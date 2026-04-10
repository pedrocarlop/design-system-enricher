---
name: ui-inspection-to-ds-system-usage
description: Use when a user provides one or more `ui-inspection.md` files and wants contextual component usage knowledge extracted from observed product flows and prepared for enrichment of canonical design-system docs.
---

# UI Inspection To DS System Usage

Use this skill when the source of truth is one or more existing inspection documents such as `ui-inspection.md`, not a live page.

The job is **not** to recreate the generic component specification.

The job is to convert audit evidence into:

1. contextual per-page component usage observations
2. a synthesized in-product usage layer for the canonical component doc

## Linear workflow position

This is step 2 of a 3-step repository workflow:

1. `dom-ui-inspection`
2. `ui-inspection-to-ds-system-usage`
3. `ds-system-knowledge-merge`

This skill consumes the inspection artifact from step 1 and prepares contextual component knowledge for merge.

## Source of truth

Only use the provided inspection markdown files.

In the default linear workflow, those inputs are under:

- `Design system audit/<flow-slug>/pages/<page-slug>/ui-inspection.md`

Do not use:

- external knowledge
- visual inference beyond what the inspection already states
- unrelated component docs as input

For web-backed inspections, you may reopen the recorded page URL only to generate annotated evidence images for contextual usage records.
Do not use that rerender as a new source of truth for content extraction.

## Non-negotiable rules

- Read only the provided inspection document set for content.
- Extract components only from the `## Component inventory` section unless the parent inspection explicitly includes relevant contextual metadata elsewhere.
- Use the exact component names from `### Component: ...` unless an authoritative mapping promotes the destination.
- Preserve per-page provenance.
- Preserve per-flow provenance.
- Resolve the canonical destination before preparing merged contextual knowledge.
- Generate contextual observation files before editing the canonical `README.md`.
- Do not overwrite or recreate generic design-system guidance that is already canonical.
- Do not leave `NEW.md` in the repository after a successful run.
- Create `CONFLICTS.md` only when a real contextual discrepancy remains visible after merge.
- For web-backed inspections with a reachable `Source path or URL`, attempt component-local annotated screenshots through browser automation before copying the raw page screenshot unchanged.

## Destination resolution

Resolve the canonical component-doc root using these signals when available:

- `Code target` from the inspection evidence
- package manifests and lockfiles
- direct imports and usages in source
- an existing package or repo-local path that resolves on disk

Destination order:

1. installed package-backed DS component folder
2. repo-local DS component folder
3. `unmatched/` when the repo has a DS kit but this component does not match it
4. `DS-system/` only when no DS kit can be resolved for the repo

For each component doc root, create or reuse:

- `/README.md`
- `/assets/`
- `/usage-context/<flow-slug>/`

## Contextual observation output

For every component observation on every page, write:

- `Design system audit/<flow-slug>/observations/<component-key>/<page-slug>.md`
- `Design system audit/<flow-slug>/observations/<component-key>/assets/<page-slug>.png`

And also copy normalized evidence into the component destination:

- `<component-root>/usage-context/<flow-slug>/<page-slug>.md`
- `<component-root>/usage-context/<flow-slug>/<page-slug>.png`

## Required section structure for each observation file

Use this exact structure:

```md
# <component name> — observed usage

## Source
## Name origin
## Where it appears in flow
## What it represents here
## Layout mode
## Grouping and nesting
## Observed structure
## Variants observed on this page
## Content format
## Design system mapping
## Evidence
## Notes
```

## Required section structure for contextual synthesis

This skill must prepare the following synthesized sections for the canonical component doc:

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

## Extraction workflow

1. Read the provided inspection markdown files.
2. Locate `## Component inventory`.
3. Parse every `### Component:` block.
4. Preserve page-level metadata such as screen purpose, sequence position, and provenance.
5. Group entries by final component key.
6. For each page-level observation, generate a contextual observation record.
7. For web-backed component observations, reopen the recorded page URL in browser automation, temporarily highlight the matched component instance or instances, and capture a component-specific evidence screenshot.
8. Write observation files into the audit flow.
9. Write normalized copies into the component `usage-context/` destination.
10. Build a contextual synthesis per component.
11. Hand off that synthesis to the merge step.

## Observation writing rules

For each observed usage, document:

- component name and where the name came from
- where it appears as part of the flow
- what happens before and after this screen when known
- what the component represents in this product context
- whether it is used in a list, inline, grid, grouped section, card group, or another layout mode
- how it is grouped or nested with surrounding elements
- its observed internal structure
- variants seen in evidence
- recurring content format such as title length, supporting text style, metadata format, value placement, and status format
- screenshot evidence

Do not turn these observations into generic component doctrine.

## Synthesis rules

When preparing the contextual layer for the canonical component doc:

- summarize patterns that repeat across flows
- preserve separate patterns when they differ meaningfully
- distinguish observed, inferred, and unknown
- link back to the underlying observation files
- do not overwrite generic sections such as universal best practices unless the user explicitly requested a broader rewrite

## Validation checklist

Before finishing, verify:

- every grouped component produced contextual observation files
- every component doc root contains a `usage-context/` directory when contextual evidence exists
- no component names were invented
- no persistent `NEW.md` files remain
- the canonical `README.md` was not treated as blank if it already existed
- the contextual synthesis is ready for merge into the canonical component doc
