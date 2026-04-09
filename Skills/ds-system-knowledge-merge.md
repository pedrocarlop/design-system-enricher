---
name: ds-system-knowledge-merge
description: Use when a user wants to merge new component usage knowledge into an existing DS-system component document. Trigger for tasks that compare `DS-system/<component-name>/NEW.md` with `DS-system/<component-name>/README.md`, update the canonical README, preserve non-conflicting knowledge, keep screenshot evidence linked from component-local `assets/` files, and create `CONFLICTS.md` when conflicting usage patterns are detected.
---

# DS System Knowledge Merge

Use this skill when the task is to merge a new component usage document into an existing component knowledge file.

The goal is to evolve `README.md` without inventing new knowledge and without hiding ambiguity.

## Source files

This workflow expects:

- `DS-system/<component-name>/NEW.md`
- `DS-system/<component-name>/README.md`
- `DS-system/<component-name>/assets/` for the image files referenced by the markdown

Primary output:

- updated `DS-system/<component-name>/README.md`

Conditional output:

- `DS-system/<component-name>/CONFLICTS.md`

## Source of truth

Only use the two provided component documents.

Do not use:

- external knowledge
- assumptions from other components
- inferred design-system rules not present in the files

## Non-negotiable rules

- Do not rename the component.
- Do not remove valid information unless it is clearly redundant.
- Do not overwrite conflicting patterns silently.
- Do not invent new rules.
- Do not generalize beyond what is written.
- Keep everything grounded in the two source documents.
- Always update `README.md`.
- Only create `CONFLICTS.md` if conflicts exist.

## Required workflow

1. Read both files fully.
2. Compare them section by section.
3. Identify overlap, additions, and conflicts.
4. Merge complementary content into a richer `README.md`.
5. Keep conflicting patterns visibly separate inside the affected sections.
6. Create `CONFLICTS.md` when any conflict exists.
7. Do not resolve the conflict yourself.

## Sections to compare

Compare these sections when present:

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
- `Notes`

If the headings differ slightly, map them to the closest matching section without changing meaning.

## Merge logic

### No-conflict merge

If both files describe the same observed pattern or provide complementary detail:

- combine them into a single clearer explanation
- remove duplication
- keep the most explicit version
- preserve concrete examples and qualifiers when present
- preserve any screenshot links and their alt text in the merged `Screenshot` section

Use one unified section when the information is compatible.

### What counts as a conflict

A conflict exists when the documents disagree in a meaningful way about:

- usage rules
- layout patterns
- structure
- variants
- relationships with other components

Examples:

- one file says the component is used in a grid and another says it is used in a single-column stack
- one file says the component includes an image and another describes a text-only form
- one file lists a variant that the other implicitly excludes through a contradictory structure or rule

Small wording differences are not conflicts if the underlying pattern is the same.

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
(source: NEW.md)
...
```

Use Pattern A for the existing `README.md` interpretation and Pattern B for the incoming `NEW.md` interpretation.

Only use this split format in sections that actually conflict.

## Conflict report

If any conflict is detected, create:

- `DS-system/<component-name>/CONFLICTS.md`

Use this exact structure:

```md
# Conflict Report — <component-name>

## Summary
Short explanation that multiple usage patterns were detected.

## Conflicting areas

### Conflict: <area name>

#### Pattern A (existing)
- description

#### Pattern B (new)
- description

## Suggested action
- The design team should review the conflicting patterns.
- Decide whether both patterns are valid, one should be deprecated, or the component should be split into variants.
```

Do not resolve the conflict in this file.

## No-conflict case

If no conflicts are found:

- fully merge into a clean unified `README.md`
- do not create `CONFLICTS.md`
- if an old `CONFLICTS.md` exists, do not delete it unless the user explicitly asks

## Writing standard

- Clear
- Structured
- Concrete
- No fluff
- No design theory
- No invented best practices

Write like internal documentation for a product or design team.

## Validation checklist

Before finishing, verify:

- `README.md` still describes the same component name
- all valid non-conflicting knowledge from both files is preserved
- screenshot links remain valid relative to the component `assets/` folder
- conflicting statements remain visibly separated
- `CONFLICTS.md` exists if and only if new conflicts were detected in this merge pass
- no unsupported claims were introduced

## Deliverable convention

Always update:

- `DS-system/<component-name>/README.md`

Conditionally create:

- `DS-system/<component-name>/CONFLICTS.md`

The final repository should expose ambiguity rather than hiding it.
