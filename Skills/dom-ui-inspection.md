---
name: dom-ui-inspection
description: Use when a user provides a live URL and wants a DOM-driven UI inspection that extracts page structure and component names strictly from rendered HTML, class names, data attributes, roles, and repeated patterns. Trigger for requests to inspect a page, inventory components, map page structure, or produce `Design system audit/.../ui-inspection.md` plus screenshots from a real site without inventing design-system names.
---

# DOM UI Inspection

Use this skill when the task is to inspect a live page and describe its structure and components from code signals, not from design interpretation.

## Linear workflow position

This is step 1 of a 3-step repository workflow:

1. `dom-ui-inspection`
2. `ui-inspection-to-ds-system-usage`
3. `ds-system-knowledge-merge`

This skill only produces audit inspection artifacts.
It does not write canonical component docs.

## Non-negotiable rules

- Do not invent component names.
- Do not translate names into design-system language.
- Prefer these naming signals in this order:
  1. `data-component`, `data-testid`, `data-ui`
  2. stable non-utility classes
  3. BEM-style block names
  4. semantic or structural grouping
- If no clear identifier exists, use `unknown`.
- Separate visible UI from hidden DOM-only systems such as cookie banners or modals.

## Required workflow

1. Open the page in a real browser.
2. Wait for full load, preferably `networkidle`.
3. Capture a screenshot before deep analysis.
4. Inspect top-level DOM structure first.
5. Extract repeated class names and count them.
6. Identify repeated structures that share both a stable naming signal and a matching internal shape.
7. Drill into candidate components to inspect child structure.
8. Record exact selectors and explicit variants.
9. Write the markdown report.
10. Update the audit flow index.

## Required output shape

Write:

- `Design system audit/<run-slug>/pages/<page-slug>/ui-inspection.md`
- `Design system audit/<run-slug>/pages/<page-slug>/screenshots/<page-slug>.png`
- `Design system audit/<run-slug>/flow.md`

Use this markdown structure:

```md
# UI Inspection

## Screenshot

## View metadata

## Page or screen purpose

## Structural breakdown (top to bottom)

## Component inventory

## Repeated patterns

## Layout observations

## Notes
```

For each component entry, include:

- `Component: <exact name or unknown>`
- `Source of name`
- `Selectors` or equivalent evidence handle
- `Where it appears`
- `Structure`
- `Variants`
- `Usage`
- `Repetition`

## Additional recommended fields per component entry

When available, also record:

- `Flow context`
- `Sequence position`
- `Previous step`
- `Next step`
- `What it represents`
- `Layout mode`
- `Grouping and nesting`
- `Surrounding components`
- `Content format`

## Validation checklist

Before finishing, verify:

- the screenshot file exists
- the markdown file exists
- the report keeps the required top-level headings exactly
- every component entry uses `### Component: <name>`
- every named component comes from a real selector or stable DOM signal
- no design-system names were invented
- the page appears in `flow.md`
- every component entry preserves enough contextual detail for downstream usage synthesis
