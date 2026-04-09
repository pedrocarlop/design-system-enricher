# Web URL Inspection

Use this workflow for a live web URL.

## Purpose

Create screenshot-grounded page inspections inside a shared audit flow without inventing component names.

## Required evidence

- rendered page screenshot
- DOM-backed structure
- stable selectors and naming signals

## Capture workflow

1. Open the URL in a real browser.
2. Wait for the page to settle.
3. Capture `Design system audit/<run-slug>/pages/<page-slug>/screenshots/<page-slug>.png`.
4. Only after the screenshot exists, inspect the DOM.
5. Update `Design system audit/<run-slug>/flow.md` with the page entry.

If browser automation is available, prefer it for repeatable capture and DOM inspection.

## Extract

- screenshot path and provenance
- page purpose from visible content
- top-level regions such as header, main, footer, modal, and banner systems
- stable DOM selectors
- `data-*` identifiers
- stable non-utility classes
- repeated structures and their counts
- explicit markup variants only
- source-backed component names, or `unknown`

## Naming rules

Prefer names from:

1. `data-component`, `data-testid`, `data-ui`
2. stable non-utility classes
3. repeated named wrappers
4. `unknown`

Do not invent design-system names from visuals.

## Output requirements

Write:

- `Design system audit/<run-slug>/pages/<page-slug>/ui-inspection.md`
- `Design system audit/<run-slug>/pages/<page-slug>/screenshots/<page-slug>.png`

`## View metadata` must include:

- `Platform: web`
- `Source kind: url`
- `Source path or URL`
- `Screenshot path`
- `Screenshot provenance`
- `Capture method`
- `Goal`

Every component entry must include a `Design system mapping` block. For URL-based work, default that block to unresolved unless an explicit mapping signal exists.
