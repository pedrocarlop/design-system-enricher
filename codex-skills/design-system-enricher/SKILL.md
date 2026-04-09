---
name: design-system-enricher
description: Use when Codex needs to turn screenshot-grounded UI evidence from a live web URL, local web repo view, iOS SwiftUI view, Android Jetpack Compose view, Figma frame, or numbered Figma section into `Flows/...` inspection docs and `DS-system/...` component knowledge with preserved design-system mappings.
---

# Design System Enricher

Create screenshot-grounded UI inspection artifacts and merge-ready design-system knowledge from web, native, and Figma sources.

## When to use

Use this skill when the user wants to:

- inspect UI from a live page or app view
- inspect repo-local views and preserve file-to-screen provenance
- extract reusable component evidence from screenshot-backed UI
- turn Figma frames or numbered screen sections into ordered inspection artifacts
- preserve design-system/library mappings while generating `DS-system` knowledge

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

- Screenshot evidence is mandatory for every inspected screen.
- Do not continue to extraction if a screenshot cannot be captured or supplied.
- For non-Figma sources, do not invent design-system names from visual similarity alone.
- Use `unknown` when no trustworthy name exists.
- For Figma sources, existing Code Connect mappings and published library component names are authoritative evidence.
- Preserve per-screen provenance even when later grouping evidence across multiple screens.
- The screenshot is the shared source-of-truth artifact across web, native, and Figma workflows.

## Source routing

Pick the first matching route:

1. If the source is an existing `ui-inspection.md`, skip inspection and continue to `references/evidence-generation.md`.
2. If the source is a Figma URL, read `references/figma-section-frame-inspection.md`.
3. If the source is a live web URL, read `references/web-url-inspection.md`.
4. If the source is a local repo view with `platform=web`, read `references/web-repo-view-inspection.md`.
5. If the source is a local repo view with `platform=ios`, read `references/ios-swiftui-inspection.md`.
6. If the source is a local repo view with `platform=android`, read `references/android-compose-inspection.md`.

If multiple sources are provided:

- inspect each source separately
- preserve one inspection artifact per screen
- run evidence generation only after all inspection artifacts are ready

## Screenshot-first gating

Before extracting structure, confirm the screenshot path that will anchor the inspection.

Required capture order by source:

- web URL: render in a browser, wait for stable load, then capture screenshot
- web repo view: run the local render path first, then capture screenshot from the rendered view
- iOS SwiftUI repo view: capture screenshot via a pluggable native backend, preferring an Appium-style inspector and falling back to preview or XCTest-backed capture
- Android Compose repo view: capture screenshot via a pluggable native backend, preferring an Appium-style inspector and falling back to preview or emulator-backed capture
- Figma: run `get_screenshot` for each frame before extracting structure

If capture fails:

- stop
- report the missing capture step precisely
- do not silently switch to code-only extraction

## Common output contract

Single-screen outputs:

- `Flows/<slug>/ui-inspection.md`
- `Flows/<slug>/screenshots/<slug>.png`

Figma section outputs:

- `Flows/<section-slug>/sequence.md`
- `Flows/<section-slug>/screens/<nn-screen-slug>/ui-inspection.md`
- `Flows/<section-slug>/screenshots/<nn-screen-slug>.png`

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
- `Evidence source`: Code Connect, library instance, repo signal, or source node
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

## Figma section handling

For Figma sections:

- parse the URL into `fileKey` and `nodeId`
- use `get_metadata` on the section node to enumerate direct child frames
- require each direct child frame name to start with a two-digit order prefix such as `01`, `02`, `03`
- stop and ask for numbering if any frame is missing a prefix or if prefixes are duplicated
- process frames strictly by numeric prefix, not by canvas position
- for each frame, run `get_screenshot` and `get_design_context`
- use `get_code_connect_map` first, then `get_code_connect_suggestions`, then `search_design_system` if needed for mappings
- write one `ui-inspection.md` per frame and one section-level `sequence.md`

## Evidence pipeline

After inspection artifacts exist:

1. Read `references/evidence-generation.md`.
2. Generate or overwrite `DS-system/<component-name>/NEW.md`.
3. If `README.md` exists for the component, or if the component needs a canonical doc, read `references/knowledge-merge.md`.
4. Update or create `DS-system/<component-name>/README.md`.
5. Create or update `CONFLICTS.md` only when meaningful conflicts exist.

## References

- `references/web-url-inspection.md`
- `references/web-repo-view-inspection.md`
- `references/ios-swiftui-inspection.md`
- `references/android-compose-inspection.md`
- `references/figma-section-frame-inspection.md`
- `references/evidence-generation.md`
- `references/knowledge-merge.md`
