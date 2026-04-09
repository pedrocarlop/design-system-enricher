---
name: ds-system-knowledge-merge
description: Use when a user wants to merge new component usage knowledge into an existing canonical component document. Trigger for tasks that compare current audit evidence with an existing `README.md`, update the canonical README, preserve non-conflicting knowledge, keep screenshot evidence linked from component-local `assets/`, and create `CONFLICTS.md` when conflicting usage patterns are detected.
---

# DS System Knowledge Merge

Use this skill when the task is to merge a new component evidence set into an existing canonical component knowledge file.

The goal is to evolve `README.md` without inventing new knowledge and without hiding ambiguity.

## Source inputs

This workflow expects:

- current audit evidence for one grouped component
- `<component-doc-root>/README.md` when it exists
- `<component-doc-root>/assets/` for the image files referenced by the markdown

Primary output:

- updated `<component-doc-root>/README.md`

Conditional output:

- `<component-doc-root>/CONFLICTS.md`

## Source of truth

Only use the current audit evidence and the existing canonical component doc.

Do not use:

- external knowledge
- assumptions from other components
- inferred design-system rules not present in the files

## Non-negotiable rules

- Do not rename the component.
- Do not remove valid information unless it is clearly redundant.
- Do not overwrite conflicting patterns silently.
- Do not invent new rules.
- Always update `README.md`.
- Only create `CONFLICTS.md` if conflicts exist.
- Do not leave `NEW.md` in the repository after a successful run.

## Required workflow

1. Read the current audit evidence and the existing `README.md` when present.
2. Compare them section by section.
3. Identify overlap, additions, and conflicts.
4. Merge complementary content into a richer `README.md`.
5. Keep conflicting patterns visibly separate inside the affected sections.
6. Create `CONFLICTS.md` when any conflict exists.
7. Delete any temporary staging file before finishing.

## Conflict handling inside README.md

When a conflict exists in any section:

- do not collapse both statements into a single truth
- do not pick a winner
- keep both versions in the affected section
- label them as alternative patterns

Use this exact shape inside the affected section:

```md
#### Pattern A
(source: existing README)
...

#### Pattern B
(source: current audit run)
...
```

## Validation checklist

Before finishing, verify:

- `README.md` still describes the same component name
- all valid non-conflicting knowledge from both sources is preserved
- screenshot links remain valid relative to the component `assets/` folder
- conflicting statements remain visibly separated
- `CONFLICTS.md` exists if and only if new conflicts were detected in this merge pass
- no persistent `NEW.md` files remain
