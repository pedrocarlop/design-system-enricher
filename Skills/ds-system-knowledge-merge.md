---
name: ds-system-knowledge-merge
description: Use when a user wants to merge new in-product component usage knowledge into an existing canonical component document without overwriting its generic design-system specification.
---

# DS System Knowledge Merge

Use this skill when the task is to merge a new component usage-context evidence set into an existing canonical component knowledge file.

The goal is to evolve `README.md` by enriching its **in-product usage layer** without inventing new knowledge and without hiding ambiguity.

## Source inputs

This workflow expects:

- current contextual audit evidence for one grouped component
- `/README.md` when it exists
- `/usage-context/` for detailed observation files
- `/assets/` for image files referenced by the markdown

Primary output:

- updated `/README.md`

Conditional output:

- `/CONFLICTS.md`

## Source of truth

Only use:

- current contextual audit evidence
- the existing canonical component doc

Do not use:

- external knowledge
- assumptions from other components
- inferred design-system rules not present in the files

## Non-negotiable rules

- Do not rename the component.
- Do not remove valid information unless it is clearly redundant.
- Do not overwrite conflicting contextual patterns silently.
- Do not invent new rules.
- Treat existing generic design-system guidance as canonical unless the user explicitly asked to rewrite it.
- Always update `README.md` when there is valid new contextual knowledge.
- Only create `CONFLICTS.md` if contextual conflicts exist.
- Do not leave `NEW.md` in the repository after a successful run.

## Canonical merge scope

This skill should primarily merge or create the following contextual sections:

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

Do not rewrite unrelated canonical sections unless:

- they do not exist at all and the repository convention requires them
- the user explicitly asked for a full rewrite
- the new evidence clearly corrects a factual mapping error

## Required workflow

1. Read the current contextual audit evidence and the existing `README.md` when present.
2. Compare only the contextual sections first.
3. Identify overlap, additions, and conflicts.
4. Merge complementary contextual content into a richer `README.md`.
5. Keep conflicting contextual patterns visibly separate inside the affected sections.
6. Ensure the detailed observation files remain available under `usage-context/`.
7. Create `CONFLICTS.md` when any contextual conflict exists.
8. Delete any temporary staging file before finishing.

## Conflict handling inside README.md

When a conflict exists in any contextual section:

- do not collapse both statements into a single truth
- do not pick a winner
- keep both versions in the affected section
- label them as alternative patterns

Use this exact shape inside the affected section:

```md
#### Pattern A (source: existing README)
...

#### Pattern B (source: current audit run)
...
```

## Notes section contract

`## Notes` should include:

- contributing flow names
- linked observation files when helpful
- screenshot provenance when useful
- unresolved ambiguity
- whether a statement is observed or inferred

## Validation checklist

Before finishing, verify:

- `README.md` still describes the same component name
- all valid non-conflicting contextual knowledge from both sources is preserved
- screenshot links remain valid relative to the component `assets/` or `usage-context/` folder
- conflicting contextual statements remain visibly separated
- `CONFLICTS.md` exists if and only if new contextual conflicts were detected in this merge pass
- no persistent `NEW.md` files remain
