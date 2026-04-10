# Evidence Generation

Use this workflow after one or more `ui-inspection.md` artifacts already exist.

## Purpose

Convert screenshot-grounded inspection evidence into canonical component `README.md` updates while preserving design-system mappings and per-page provenance.

## Accepted inputs

- one `ui-inspection.md`
- multiple `ui-inspection.md` files from the same audit flow
- one `flow.md` plus its referenced child inspection files

## Non-negotiable rules

- Read only the supplied inspection artifacts for content.
- Preserve exact evidence-backed names unless mapping rules promote the component to a stronger authoritative name.
- Screenshot links copied or captured into component `assets/` folders are required.
- Preserve per-page provenance when combining observations from multiple inspections.
- Resolve the canonical destination before writing component docs.
- Do not leave `NEW.md` as a repository-stable artifact.
- For web-backed inspections with a reachable recorded URL and selector-backed component evidence, attempt annotated component screenshots captured from a rerendered page in browser automation before copying raw screenshot fallbacks.
- Use temporary browser-side highlighting only. Do not edit repo files just to create the annotation.
- Do not silently use a raw screenshot fallback for web-backed evidence. If annotation capture fails, record the exact render or selector-matching failure in the component `README.md` notes.

## Grouping rules

Group observations by final component key using this priority:

1. mapped code or library component when authoritative
2. authoritative Figma published component name
3. stable source-backed component name
4. `unknown`

If multiple pages contribute evidence for the same grouped component:

- keep one canonical `README.md`
- preserve separate observations where patterns differ
- include multiple screenshots when needed
- record every contributing inspection path in `## Notes`

For web-backed evidence, prefer one annotated screenshot per contributing page. If the page is reachable and the inspection provides stable selectors, annotated capture is required unless the selector match returns zero elements or the browser render fails.

## Destination resolution

Resolve one destination root per grouped component:

1. Installed package-backed DS mapping:
   - `<resolved-package-component-folder>/README.md`
   - `<resolved-package-component-folder>/assets/...`
2. Repo-local DS component mapping:
   - `<resolved-repo-component-folder>/README.md`
   - `<resolved-repo-component-folder>/assets/...`
3. Repo has a DS kit but this component is unmatched:
   - `unmatched/<component-name>/README.md`
   - `unmatched/<component-name>/assets/...`
4. No DS kit can be resolved for the repo:
   - `DS-system/<component-name>/README.md`
   - `DS-system/<component-name>/assets/...`

Use these signals as authoritative when available:

- `Code target` in inspection evidence
- package manifests and lockfiles
- direct imports and usages in source
- a package or repo-local path that resolves on disk

## Output shape

For each grouped component, write or update:

- `<component-doc-root>/README.md`
- `<component-doc-root>/assets/...`

For web-backed observations, assets should come from a page rerender with the matched component instance or instances outlined in red before capture whenever the URL and selector evidence are usable.

Use this exact section structure:

```md
# <component-name>

## Screenshot

## What this component is

## Where it is used

## How it is used

## Structure

## Variants

## Layout patterns

## Relationships with other components

## Usage rules (inferred)

## Content patterns

## Design system mapping

## Notes
```

## `## Design system mapping` contract

Always record:

- `Mapping status`
- `Evidence source`
- `Library or system name`
- `Component name`
- `Code target`
- `Screens or inspections`
- `Notes`

When no mapping exists, use:

- `Mapping status: unresolved`

## Merge behavior

- If no canonical `README.md` exists yet, create it directly from the current audit evidence.
- If a canonical `README.md` already exists, merge the current audit evidence into it in the same run.
- If a temporary `NEW.md` is used during execution, delete it before finishing.
- Create `CONFLICTS.md` only when meaningful conflicts remain visible after the merge.

## Web annotation workflow

When an inspection artifact contains a web `Source path or URL`:

1. Reopen the page in browser automation.
2. Identify the component instances using only evidence already recorded in the inspection artifact.
3. Inject temporary highlight styling, preferably a red outline or inset ring, onto the matched elements.
4. Capture the annotated page screenshot into the component `assets/` folder.
5. If matching fails or the page cannot be rendered, fall back to the original inspection screenshot for that page.

This rerender is only for image generation. Do not use it to invent new content evidence.

When `agent-browser` is available, use the bundled helper script instead of hand-rolling this step. Resolve `scripts/capture-web-highlight.mjs` relative to the installed `design-system-enricher` skill directory:

```bash
node <design-system-enricher-skill-dir>/scripts/capture-web-highlight.mjs \
  --url "http://localhost:5174/#/courses/ui-systems" \
  --selector ".progress-block" \
  --component "progress-block" \
  --output "unmatched/progress-block/assets/detail-page-progress-block.png"
```

The helper exits non-zero if the selector matches zero elements. Treat that as the only acceptable selector fallback condition, and include the helper output or a short summary of the failure in `## Notes`.

Before finishing a web-backed component, verify that the component asset is not just an unannotated copy when the URL was reachable and selectors matched. A byte-identical asset is allowed only when the fallback reason is documented.

## Provenance rules

`## Notes` must include:

- every contributing inspection path
- screenshot provenance when useful
- duplicate same-name observations when they were merged into one component file
- flow ordering provenance when applicable
