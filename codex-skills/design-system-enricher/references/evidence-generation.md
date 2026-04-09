# Evidence Generation

Use this workflow after one or more `ui-inspection.md` artifacts already exist.

## Purpose

Convert screenshot-grounded inspection evidence into merge-ready `DS-system/<component-name>/NEW.md` files while preserving design-system mappings and per-screen provenance.

## Accepted inputs

- one `ui-inspection.md`
- multiple `ui-inspection.md` files
- one Figma `sequence.md` plus its referenced child inspection files

## Non-negotiable rules

- Read only the supplied inspection artifacts for content.
- Do not read existing component `README.md` files during evidence generation.
- Preserve exact evidence-backed names unless mapping rules promote the component to a stronger authoritative name.
- Screenshot links copied into component `assets/` folders are required.
- Preserve per-screen provenance when combining observations from multiple inspections.

## Grouping rules

Group observations by final component key using this priority:

1. mapped code or library component when authoritative
2. authoritative Figma published component name
3. stable source-backed component name
4. `unknown`

If multiple screens contribute evidence for the same grouped component:

- keep one `NEW.md`
- preserve separate observations where patterns differ
- include multiple screenshots when needed
- record every contributing inspection path in `## Notes`

## Output shape

For each grouped component, write:

- `DS-system/<component-name>/NEW.md`
- `DS-system/<component-name>/assets/...`

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

## Provenance rules

`## Notes` must include:

- every contributing inspection path
- screenshot provenance when useful
- duplicate same-name observations when they were merged into one component file
- sequence provenance for Figma section screens when applicable
