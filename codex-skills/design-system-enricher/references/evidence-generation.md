# Evidence Generation

Use this workflow after one or more `ui-inspection.md` artifacts already exist.

## Purpose

Convert screenshot-grounded inspection evidence into:

1. per-page contextual component usage observations
2. synthesized in-product usage knowledge
3. contextual updates to canonical component `README.md` files

The goal is to preserve design-system mappings and per-page provenance while adding a real product-context layer on top of existing design-system docs.

## Accepted inputs

- one `ui-inspection.md`
- multiple `ui-inspection.md` files from the same audit flow
- one `flow.md` plus its referenced child inspection files

## Non-negotiable rules

- Read only the supplied inspection artifacts for content.
- Preserve exact evidence-backed names unless mapping rules promote the component to a stronger authoritative name.
- Screenshot links copied or captured into component `assets/` or `usage-context/` folders are required.
- Preserve per-page provenance when combining observations from multiple inspections.
- Preserve per-flow provenance.
- Resolve the canonical destination before writing contextual component knowledge.
- Do not leave `NEW.md` as a repository-stable artifact.
- For web-backed inspections with a reachable recorded URL and selector-backed component evidence, attempt annotated component screenshots captured from a rerendered page in browser automation before copying raw screenshot fallbacks.
- Use temporary browser-side highlighting only.
- Do not edit repo files just to create the annotation.
- Do not silently use a raw screenshot fallback for web-backed evidence. If annotation capture fails, record the exact render or selector-matching failure in notes.

## Grouping rules

Group observations by final component key using this priority:

1. mapped code or library component when authoritative
2. authoritative Figma published component name
3. stable source-backed component name
4. `unknown`

If multiple pages contribute evidence for the same grouped component:

- keep one canonical `README.md`
- preserve separate page-level observations
- include multiple screenshots when needed
- record every contributing inspection path
- record every contributing flow step
- prefer one annotated screenshot per contributing page for web-backed evidence

## Intermediate artifact rule

Before merging into a canonical `README.md`, create normalized contextual observation files.

For every grouped component and every contributing page, write:

- one observation markdown file
- one evidence screenshot
- one normalized copy inside the component destination `usage-context/` folder

Do not merge directly from raw inspection inventory into canonical README sections without creating these observations first.

## Destination resolution

Resolve one destination root per grouped component:

1. installed package-backed DS mapping
2. repo-local DS component mapping
3. `unmatched/` when the repo has a DS kit but the component is unmatched
4. `DS-system/` when no DS kit exists

Use these signals as authoritative when available:

- `Code target` in inspection evidence
- package manifests and lockfiles
- direct imports and usages in source
- a package or repo-local path that resolves on disk

## Contextual README output shape

For each grouped component, update or create contextual sections such as:

```md
## In-product usage
## Where it appears across flows
## Common layout patterns
## Common grouping and nesting
## Common content patterns
## Variants observed in product
## Evidence sources
## Notes
```

## Observation content contract

Each observation should capture:

- component name and name origin
- flow location
- where it appears in the journey
- what it represents in that context
- layout mode
- grouping and nesting
- observed structure
- variants seen
- content format
- design-system mapping
- screenshot evidence
- ambiguity or inference notes

## Merge behavior

- If no canonical `README.md` exists yet, create it with a contextual usage layer and preserve any existing repository conventions.
- If a canonical `README.md` already exists, merge only contextual usage knowledge into it in the same run.
- If a temporary `NEW.md` is used during execution, delete it before finishing.
- Create `CONFLICTS.md` only when meaningful contextual conflicts remain visible after the merge.

## Provenance rules

`## Notes` or `## Evidence sources` must include:

- every contributing inspection path
- screenshot provenance when useful
- duplicate same-name observations when they were merged into one component file
- flow ordering provenance when applicable
- links to detailed observation files when available
