#!/usr/bin/env node

import { existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname } from 'node:path';
import { spawnSync } from 'node:child_process';

function usage() {
  console.error(`Usage:
  node scripts/capture-web-highlight.mjs \\
    --url <url> \\
    --selector <css-selector> [--selector <css-selector> ...] \\
    --output <path> \\
    [--component <name>] [--wait-ms <milliseconds>] [--no-full]

Creates a screenshot after temporarily outlining matched elements in the browser.
Requires the agent-browser CLI to be available on PATH.`);
}

function readArgs(argv) {
  const options = {
    selectors: [],
    component: 'component',
    full: true,
    waitMs: 0,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = argv[index + 1];

    if (arg === '--url') {
      options.url = next;
      index += 1;
    } else if (arg === '--selector') {
      options.selectors.push(next);
      index += 1;
    } else if (arg === '--output') {
      options.output = next;
      index += 1;
    } else if (arg === '--component') {
      options.component = next;
      index += 1;
    } else if (arg === '--wait-ms') {
      options.waitMs = Number.parseInt(next, 10);
      index += 1;
    } else if (arg === '--no-full') {
      options.full = false;
    } else if (arg === '--help' || arg === '-h') {
      usage();
      process.exit(0);
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  if (!options.url) {
    throw new Error('Missing required --url');
  }

  if (!options.output) {
    throw new Error('Missing required --output');
  }

  if (options.selectors.length === 0 || options.selectors.some((selector) => !selector)) {
    throw new Error('Provide at least one non-empty --selector');
  }

  if (!Number.isFinite(options.waitMs) || options.waitMs < 0) {
    throw new Error('--wait-ms must be a non-negative integer');
  }

  return options;
}

function runAgentBrowser(args, options = {}) {
  const result = spawnSync('agent-browser', args, {
    encoding: 'utf8',
    stdio: options.capture ? ['ignore', 'pipe', 'pipe'] : 'pipe',
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    const stderr = result.stderr ? `\n${result.stderr.trim()}` : '';
    const stdout = result.stdout ? `\n${result.stdout.trim()}` : '';
    throw new Error(`agent-browser ${args.join(' ')} failed.${stderr}${stdout}`);
  }

  return result.stdout?.trim() ?? '';
}

function parseEvalOutput(output) {
  try {
    return JSON.parse(output);
  } catch (error) {
    throw new Error(`Could not parse agent-browser eval output as JSON: ${output}`);
  }
}

function buildHighlightScript(selectors, component) {
  return `(() => {
    const selectors = ${JSON.stringify(selectors)};
    const component = ${JSON.stringify(component)};
    const elements = [];
    const invalidSelectors = [];

    for (const selector of selectors) {
      try {
        for (const element of document.querySelectorAll(selector)) {
          if (!elements.includes(element)) {
            elements.push(element);
          }
        }
      } catch (error) {
        invalidSelectors.push({ selector, message: error.message });
      }
    }

    if (elements.length === 0) {
      return { count: 0, selectors, invalidSelectors, url: location.href };
    }

    const marker = 'codex-highlight-' + component.replace(/[^a-z0-9_-]+/gi, '-').toLowerCase();
    let style = document.querySelector('style[data-codex-highlight-style]');
    if (!style) {
      style = document.createElement('style');
      style.dataset.codexHighlightStyle = 'true';
      document.head.appendChild(style);
    }

    style.textContent = \`
      [data-codex-highlighted-component] {
        outline: 5px solid #ff1744 !important;
        outline-offset: 6px !important;
        box-shadow:
          0 0 0 10px rgba(255, 23, 68, 0.16),
          0 0 0 9999px rgba(255, 23, 68, 0.035) !important;
        border-radius: 14px !important;
      }
    \`;

    for (const element of elements) {
      element.dataset.codexHighlightedComponent = marker;
    }

    return { count: elements.length, selectors, invalidSelectors, url: location.href };
  })()`;
}

try {
  const options = readArgs(process.argv.slice(2));
  mkdirSync(dirname(options.output), { recursive: true });

  runAgentBrowser(['open', options.url]);
  runAgentBrowser(['wait', '--load', 'networkidle']);

  if (options.waitMs > 0) {
    runAgentBrowser(['wait', String(options.waitMs)]);
  }

  const result = parseEvalOutput(
    runAgentBrowser(['eval', buildHighlightScript(options.selectors, options.component)], { capture: true }),
  );

  if (result.count === 0) {
    console.error(JSON.stringify(result, null, 2));
    process.exit(2);
  }

  const screenshotArgs = ['screenshot', options.output];
  if (options.full) {
    screenshotArgs.push('--full');
  }
  runAgentBrowser(screenshotArgs);

  if (!existsSync(options.output) || statSync(options.output).size === 0) {
    throw new Error(`Screenshot was not written: ${options.output}`);
  }

  runAgentBrowser(
    [
      'eval',
      `(() => {
        for (const element of document.querySelectorAll('[data-codex-highlighted-component]')) {
          delete element.dataset.codexHighlightedComponent;
        }
        document.querySelector('style[data-codex-highlight-style]')?.remove();
        return true;
      })()`,
    ],
    { capture: true },
  );

  console.log(JSON.stringify({ ...result, output: options.output }, null, 2));
} catch (error) {
  console.error(error.message);
  usage();
  process.exit(1);
}
