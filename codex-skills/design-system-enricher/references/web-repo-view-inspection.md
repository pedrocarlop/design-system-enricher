# Web Repo-View Inspection

Use this workflow for a repo-local web page, route, Storybook story, or view entrypoint.

## Purpose

Create screenshot-grounded page inspections inside a shared audit flow while preserving repo provenance.

## Required evidence

- rendered screenshot from the local app or preview path
- route or entry-view provenance
- source-backed selectors or identifiers when discoverable

## Capture workflow

1. Discover the local render path for the requested view.
2. Start or reuse the local preview server when needed.
3. Open the rendered page in a browser.
4. Capture `Design system audit/<run-slug>/pages/<page-slug>/screenshots/<page-slug>.png`.
5. Only after the screenshot exists, inspect the rendered DOM and the source files.
6. Update `Design system audit/<run-slug>/flow.md` with the page entry.

If the view cannot be rendered locally, stop and report the missing local render requirement.

## Extract

- screenshot path and provenance
- route, story, or entry-view path
- repo file path for the page when discoverable
- top-level layout regions
- stable selectors, `data-testid`, and wrapper names
- component wrapper hierarchy
- repeated structures and counts
- explicit markup variants
- page-to-file provenance notes

## Naming rules

Prefer names from:

1. existing repo component wrappers or test IDs
2. stable selectors in the rendered output
3. clearly named view-level wrappers
4. `unknown`

Do not rename structures to match a presumed design system unless the repo itself already uses that name.

## Output requirements

Write:

- `Design system audit/<run-slug>/pages/<page-slug>/ui-inspection.md`
- `Design system audit/<run-slug>/pages/<page-slug>/screenshots/<page-slug>.png`

`## View metadata` must include:

- `Platform: web`
- `Source kind: repo-view`
- `Source path or URL`
- `Repo path` when known
- `Route or entry view` when known
- `Screenshot path`
- `Screenshot provenance`
- `Capture method`
- `Goal`
