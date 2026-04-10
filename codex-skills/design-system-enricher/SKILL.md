---
name: design-system-enricher
description: Use when Codex needs to inspect UI from Figma, live URLs, local views, or apps, capture screenshot-grounded evidence, generate flow-level component usage observations, and enrich canonical design-system docs with in-product usage context.
---

# Design System Enricher

Inspect real product UI and turn it into structured design-system context.

## Purpose

This skill does not recreate the generic design-system specification of a component.

Its purpose is to add an **in-product usage layer** on top of the existing design-system documentation by capturing how components are actually used across real flows, screens, and teams.

The output should help both:

- human designers understand how a component is used in practice
- AI agents design by analogy using existing product patterns

## When to use

Use this skill when the user wants to:

- inspect UI from a live page or app view
- inspect repo-local views and preserve file-to-screen provenance
- inspect Figma frames or ordered sections
- group multiple supplied pages into one audit flow
- preserve design-system mappings
- enrich component docs with real usage context from product flows

## Required input contract

The prompt should include:

- one or more sources
- a goal

Preferred prompt:

`Use $design-system-enricher with these sources: <sources> and this goal: <goal>.`

Supported sources:

- live web URL
- local repo view with `platform=web`
- local repo view with `platform=ios`
- local repo view with `platform=android`
- existing `ui-inspection.md`
- Figma frame URL
- Figma section URL whose direct child frames are numbered `01`, `02`, `03`, and so on

## Non-negotiable rules

- Screenshot evidence is mandatory for every inspected page or screen.
- Do not continue to extraction if a screenshot cannot be captured or supplied.
- For non-Figma sources, do not invent design-system names from visual similarity alone.
- Use `unknown` when no trustworthy name exists.
- For Figma sources, existing Code Connect mappings and published library component names are authoritative evidence.
- Preserve per-page provenance even when later grouping evidence across multiple pages.
- Resolve the canonical component-doc destination before writing any contextual knowledge.
- Do not overwrite generic component guidance that already belongs to the design system.
- Treat the existing component `README.md` as canonical and add contextual usage knowledge on top of it.
- Do not leave persistent `NEW.md` files after a successful workflow.
- For web-backed inspections with reachable URLs and selector-backed evidence, do not silently copy the raw page screenshot as the component asset. Attempt annotated highlight capture first, then record an explicit fallback reason if it fails.

## Source routing

Pick the first matching route:

1. If the source is an existing `ui-inspection.md`, skip inspection and continue to `references/evidence-generation.md`.
2. If the source is a Figma URL, read `references/figma-section-frame-inspection.md`.
3. If the source is a live web URL, read `references/web-url-inspection.md`.
4. If the source is a local repo view with `platform=web`, read `references/web-repo-view-inspection.md`.
5. If the source is a local repo view with `platform=ios`, read `references/ios-swiftui-inspection.md`.
6. If the source is a local repo view with `platform=android`, read `references/android-compose-inspection.md`.

If multiple sources are provided:

- inspect each page separately
- preserve one page artifact per page
- place all page artifacts under one audit flow for that invocation
- run evidence generation only after all page artifacts are ready

## Pre-flight setup check

Before executing any source route:

1. Classify all sources from the user prompt.
2. Read `references/preflight-setup.md`.
3. Run the pre-flight procedure for the identified source types.
4. Proceed to source routing only after all required capabilities are confirmed available.
5. If a required capability cannot be resolved and the user declines partial execution, stop and explain what is needed.

## Audit flow contract

Derive one `<flow-slug>` for the whole invocation.

Write:

- `Design system audit/<flow-slug>/flow.md`
- `Design system audit/<flow-slug>/pages/<page-slug>/ui-inspection.md`
- `Design system audit/<flow-slug>/pages/<page-slug>/screenshots/<page-slug>.png`
- `Design system audit/<flow-slug>/observations/<component-key>/<page-slug>.md`
- `Design system audit/<flow-slug>/observations/<component-key>/assets/<page-slug>.png`

`flow.md` must record:

- the source list in input order
- the page slug for each inspected page
- the output path for each page inspection
- the screenshot path for each inspected page
- notes about sequence ordering when the source was a Figma section

Every `ui-inspection.md` must use this top-level structure:

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

Every component entry must use this shape:

```md
### Component: <name>
Source of name
Where it appears
Structure
Variants
Usage
Repetition
Evidence handles
Design system mapping
```

### Additional contextual fields required for downstream usage synthesis

When available, each component observation should also preserve:

- flow name
- sequence position
- previous step
- next step
- user intent on screen
- layout mode
- represented entity
- surrounding components
- grouping or nesting notes
- instance generation pattern
- content format notes

## Destination resolution

Before writing component context docs, resolve a canonical destination for each grouped component.

Use these signals as authoritative when available:

- mapped `Code target` path from inspection evidence
- package manifests or lockfiles showing the DS dependency
- direct imports or usages in source
- an existing package or repo-local path that resolves on disk

Destination rules:

1. If the component maps to an installed package file, write contextual documentation beside the resolved component destination.
2. If the component maps to a repo-local DS target, write contextual knowledge in that component location.
3. If the repo has a DS kit but the component cannot be matched to it, write to `unmatched/<component>/`.
4. Only if no DS kit can be resolved for the repo at all, fall back to `DS-system/<component>/`.

Do not create a parallel `DS-system/` tree for matched components when a repo-backed DS kit already exists.

## Evidence pipeline

After inspection artifacts exist:

1. Read `references/evidence-generation.md`.
2. Group evidence across the audit flow by final component key.
3. Generate per-page contextual observations before any canonical merge.
4. Resolve the canonical destination for each grouped component.
5. For web-backed evidence with reachable recorded URLs, rerender the page and capture component-local annotated screenshots by temporarily outlining the matched component instances in red.
6. Store detailed observation files in `usage-context/`.
7. Merge only contextual usage knowledge into the canonical component `README.md`.
8. Create or update `CONFLICTS.md` only when meaningful contextual conflicts exist.
9. If a temporary `NEW.md` is created during execution, merge it in the same run and delete it before finishing.

## Canonical merge rule

The canonical component `README.md` remains the source of truth for the component.
This skill should enrich it with in-product usage context, not rewrite generic design-system guidance unless the user explicitly asks for that.

## References

- `references/preflight-setup.md`
- `references/web-url-inspection.md`
- `references/web-repo-view-inspection.md`
- `references/ios-swiftui-inspection.md`
- `references/android-compose-inspection.md`
- `references/figma-section-frame-inspection.md`
- `references/evidence-generation.md`
- `references/knowledge-merge.md`
