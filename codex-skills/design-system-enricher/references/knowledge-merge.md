# Knowledge Merge

Use this workflow to update the canonical component doc after grouped audit evidence exists for a component.

## Purpose

Merge screenshot-grounded evidence into `<component-doc-root>/README.md` without losing ambiguity or design-system mapping evidence.

## Source inputs

- current audit evidence for one grouped component
- `<component-doc-root>/README.md` when it exists
- `<component-doc-root>/assets/`

`<component-doc-root>` may be:

- an installed package-backed component folder
- a repo-local DS component folder
- `unmatched/<component-name>`
- `DS-system/<component-name>` when no DS kit exists

## Canonical output

- `<component-doc-root>/README.md`

Conditional output:

- `<component-doc-root>/CONFLICTS.md`

## Missing README bootstrap

If `README.md` does not exist:

- create it directly from the current audit evidence
- preserve the exact section structure
- keep all screenshot links valid
- do not create `CONFLICTS.md` unless the incoming evidence already contains explicit unresolved conflicting patterns

## Sections to preserve

Preserve and merge these sections:

- `Screenshot`
- `What this component is`
- `Where it is used`
- `How it is used`
- `Structure`
- `Variants`
- `Layout patterns`
- `Relationships with other components`
- `Usage rules (inferred)`
- `Content patterns`
- `Design system mapping`
- `Notes`

## Mapping merge rules

Treat `## Design system mapping` like any other evidence-bearing section.

Compatible examples:

- same library and same component target with richer notes
- same unresolved mapping with new supporting evidence

Conflicts that must remain visible:

- existing doc maps to one code target and new evidence maps to another
- one doc says mapped and the other says unresolved with contradictory evidence
- one doc names a different authoritative library component for the same grouped component

When mapping conflicts exist:

- keep both mapping interpretations visible in `README.md`
- add the conflict to `CONFLICTS.md`
- do not resolve the winner yourself

## Conflict formatting

Use the existing pattern split style in conflicting sections:

```md
#### Pattern A
(source: existing README)
...

#### Pattern B
(source: current audit run)
...
```

Use the same approach for `## Design system mapping` when needed.

## Conflict report

Create or update `CONFLICTS.md` only when meaningful conflicts exist.

For mapping conflicts, include:

- conflict area
- existing mapping evidence
- new mapping evidence
- recommended human review action

## Lifecycle rule

- `README.md` is the canonical deliverable.
- `NEW.md` must not remain in the repository after a successful run.
- If a temporary staging file is created internally, delete it before finishing.
