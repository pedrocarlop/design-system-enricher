---
name: ui-inspection-to-ds-system-usage
description: Use when a user provides one or more `ui-inspection.md` files and wants canonical component usage docs extracted from their Component inventory into the resolved design-system destination. Trigger for requests to turn inspection reports into per-component `README.md` files without inventing components or leaving persistent `NEW.md` files behind.
---

# UI Inspection To DS System Usage

Use this skill when the source of truth is an existing inspection document such as `ui-inspection.md`, not a live page.

The job is to convert audit evidence into canonical component docs.

## Linear workflow position

This is step 2 of a 3-step repository workflow:

1. `dom-ui-inspection`
2. `ui-inspection-to-ds-system-usage`
3. `ds-system-knowledge-merge`

This skill consumes the inspection artifact from step 1 and writes canonical `README.md` files plus copied screenshot assets.

## Source of truth

Only use the provided inspection markdown files.

In the default linear workflow, those inputs are under:

- `Design system audit/<run-slug>/pages/<page-slug>/ui-inspection.md`

Do not use:

- external knowledge
- visual inference beyond what the inspection already states
- unrelated component docs as input

## Non-negotiable rules

- Read only the provided inspection document set for content.
- Extract components only from the `## Component inventory` section.
- Use the exact component names from `### Component: ...` unless an authoritative mapping promotes the destination.
- Preserve per-page provenance.
- Resolve the canonical destination before writing component docs.
- Write or update `README.md` directly.
- Do not leave `NEW.md` in the repository after a successful run.
- Create `CONFLICTS.md` only when a real discrepancy remains visible after merge.

## Destination resolution

Resolve the canonical component-doc root using these signals when available:

- `Code target` from the inspection evidence
- package manifests and lockfiles
- direct imports and usages in source
- an existing package or repo-local path that resolves on disk

Destination order:

1. installed package-backed DS component folder
2. repo-local DS component folder
3. `unmatched/<component-name>` when the repo has a DS kit but this component does not match it
4. `DS-system/<component-name>` only when no DS kit can be resolved for the repo

For each component doc root, create or reuse:

- `<component-doc-root>/README.md`
- `<component-doc-root>/assets/`

## Required section structure for each generated file

Use this exact structure:

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

If no explicit variants are present, write:

`None explicitly defined`

## Extraction workflow

1. Read the provided inspection markdown files.
2. Locate `## Component inventory`.
3. Parse every `### Component: <name>` block.
4. Group entries by final component key.
5. Resolve the canonical destination for each grouped component.
6. Copy the relevant page screenshot asset(s) into `<component-doc-root>/assets/`.
7. Write or update `<component-doc-root>/README.md`.
8. If a temporary `NEW.md` was created during execution, merge it and delete it before finishing.

## Handling repeated evidence

If multiple pages contribute evidence for the same component:

- keep one canonical `README.md`
- preserve separate observations when patterns differ
- note all contributing inspection paths in `## Notes`
- include multiple screenshots when needed

## Validation checklist

Before finishing, verify:

- every grouped component produced a canonical `README.md`
- every component doc root contains an `assets/` directory with the copied screenshot asset(s)
- no component names were invented
- no persistent `NEW.md` files remain
- every generated `README.md` follows the required section structure
- every generated `README.md` includes valid relative links to the copied screenshot asset(s)
