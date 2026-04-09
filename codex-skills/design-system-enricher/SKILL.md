---
name: design-system-enricher
description: Use when Codex needs to turn screenshot-grounded UI evidence from live URLs, local views, or Figma into `Design system audit/...` inspection artifacts and canonical component `README.md` files written into the resolved design-system destination.
---

# Design System Enricher

Create screenshot-grounded UI audit artifacts and merge them into canonical component docs.

## When to use

Use this skill when the user wants to:

- inspect UI from a live page or app view
- inspect repo-local views and preserve file-to-screen provenance
- inspect Figma frames or ordered sections
- group multiple supplied pages into one audit flow
- preserve design-system mappings while updating canonical component docs

## Required input contract

The prompt should include:

- one or more sources
- a goal

Preferred prompt:

`Use $design-system-enricher with these sources: <urls/paths/figma-links> and this goal: <goal>.`

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
- Resolve the canonical component-doc destination before writing any component `README.md`.
- Do not leave persistent `NEW.md` files after a successful workflow.

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

## Audit flow contract

Derive one `<run-slug>` for the whole invocation, using the first source slug by default and adding a numeric suffix only when needed for uniqueness.

Write:

- `Design system audit/<run-slug>/flow.md`
- `Design system audit/<run-slug>/pages/<page-slug>/ui-inspection.md`
- `Design system audit/<run-slug>/pages/<page-slug>/screenshots/<page-slug>.png`

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

## Required metadata fields

`## View metadata` must always include:

- `Platform`
- `Source kind`
- `Source path or URL`
- `Screenshot path`
- `Screenshot provenance`
- `Capture method`
- `Goal`

Include these when available:

- `Sequence position`
- `Sequence label`
- `Repo path`
- `Route or entry view`
- `Figma file key`
- `Figma node id`

`Design system mapping` must always record:

- `Mapping status`: `mapped` or `unresolved`
- `Evidence source`: Code Connect, library instance, repo signal, source node, or package signal
- `Library or system name` when known
- `Component name`
- `Code target` when known
- `Notes`

## Naming priority

Use the first reliable naming source that applies:

1. existing Code Connect mapping
2. published library component name
3. instance main-component name
4. stable source identifier from code or DOM
5. source node name
6. `unknown`

For non-Figma sources, do not jump above step 4 unless the evidence explicitly exists.

## Destination resolution

Before writing component docs, resolve a canonical destination for each grouped component.

Use these signals as authoritative when available:

- mapped `Code target` path from inspection evidence
- package manifests or lockfiles showing the DS dependency
- direct imports or usages in source
- an existing package or repo-local path that resolves on disk

Destination rules:

1. If the component maps to an installed package file such as `@material/web/button/filled-button.js`, create a sibling component folder beside the resolved module file and write:
   - `<resolved-component-folder>/README.md`
   - `<resolved-component-folder>/assets/...`
2. If the component maps to a repo-local DS target, write the canonical doc in that component location.
3. If the repo has a DS kit but this component cannot be matched to it, write:
   - `unmatched/<component-name>/README.md`
   - `unmatched/<component-name>/assets/...`
4. Only if no DS kit can be resolved for the repo at all, fall back to:
   - `DS-system/<component-name>/README.md`
   - `DS-system/<component-name>/assets/...`

Do not create a parallel `DS-system/` tree for matched components when a repo-backed DS kit already exists.

## Figma section handling

For Figma sections:

- parse the URL into `fileKey` and `nodeId`
- use `get_metadata` on the section node to enumerate direct child frames
- require each direct child frame name to start with a two-digit order prefix such as `01`, `02`, `03`
- stop and ask for numbering if any frame is missing a prefix or if prefixes are duplicated
- process frames strictly by numeric prefix, not by canvas position
- for each frame, run `get_screenshot` and `get_design_context`
- use `get_code_connect_map` first, then `get_code_connect_suggestions`, then `search_design_system` if needed for mappings
- write one page-level `ui-inspection.md` per frame under the shared audit flow
- record the ordered frames in `flow.md`

## Evidence pipeline

After inspection artifacts exist:

1. Read `references/evidence-generation.md`.
2. Group evidence across the audit flow by final component key.
3. Resolve the canonical destination for each grouped component.
4. Merge the grouped evidence into canonical `README.md` files directly.
5. Create or update `CONFLICTS.md` only when meaningful conflicts exist.
6. If a temporary `NEW.md` is created during execution, merge it in the same run and delete it before finishing.

## References

- `references/web-url-inspection.md`
- `references/web-repo-view-inspection.md`
- `references/ios-swiftui-inspection.md`
- `references/android-compose-inspection.md`
- `references/figma-section-frame-inspection.md`
- `references/evidence-generation.md`
- `references/knowledge-merge.md`
