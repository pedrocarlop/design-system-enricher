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
- Screenshot links copied into component `assets/` folders are required.
- Preserve per-page provenance when combining observations from multiple inspections.
- Resolve the canonical destination before writing component docs.
- Do not leave `NEW.md` as a repository-stable artifact.

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

## Provenance rules

`## Notes` must include:

- every contributing inspection path
- screenshot provenance when useful
- duplicate same-name observations when they were merged into one component file
- flow ordering provenance when applicable
