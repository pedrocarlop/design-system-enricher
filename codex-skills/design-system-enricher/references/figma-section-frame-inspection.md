# Figma Section And Frame Inspection

Use this workflow for a Figma frame URL or a Figma section URL containing ordered screens.

## Purpose

Create screenshot-grounded inspection artifacts from Figma while preserving screen order and design-system/library mappings.

## Tools

Use Figma MCP tools. The minimum tool set for this workflow is:

- `get_metadata`
- `get_design_context`
- `get_screenshot`
- `get_code_connect_map`
- `get_code_connect_suggestions`
- `search_design_system`

## Single frame workflow

1. Parse the Figma URL into `fileKey` and `nodeId`.
2. Run `get_screenshot` for the frame.
3. Run `get_design_context` for the same node.
4. If the result is too large, use `get_metadata` to narrow the child nodes and re-fetch only what is needed.
5. Run `get_code_connect_map`.
6. If no mapping is found, run `get_code_connect_suggestions`.
7. If still unresolved, use `search_design_system` when library lookup is needed.
8. Write one `Flows/<slug>/ui-inspection.md` and one screenshot file.

## Numbered section workflow

1. Parse the section URL into `fileKey` and `nodeId`.
2. Run `get_metadata` on the section node.
3. Enumerate direct child frames only.
4. Require every direct child frame name to start with a unique two-digit prefix such as `01`, `02`, `03`.
5. Stop and ask for numbering if any frame is missing a prefix or if a prefix is duplicated.
6. Sort strictly by numeric prefix.
7. For each frame:
   - run `get_screenshot`
   - run `get_design_context`
   - resolve mappings with `get_code_connect_map`, then `get_code_connect_suggestions`, then `search_design_system` if needed
   - write `Flows/<section-slug>/screens/<nn-screen-slug>/ui-inspection.md`
   - write `Flows/<section-slug>/screenshots/<nn-screen-slug>.png`
8. Write `Flows/<section-slug>/sequence.md` that records the ordered frames and their output paths.

## Required `sequence.md` structure

Use this shape:

```md
# Screen Sequence

## Source

## Ordered frames

## Notes
```

Inside `## Ordered frames`, record each numbered frame with:

- numeric position
- original frame name
- node id
- inspection file path
- screenshot path

## What to extract

For every frame, extract:

- screenshot path and provenance
- frame name and numeric order
- node id and file key
- auto-layout and container structure
- text hierarchy
- repeated frame-internal patterns
- library instances
- published component ancestry when available
- Code Connect mapping status

Do not infer order from canvas position.

## Naming and mapping priority

Use this strict order:

1. existing Code Connect mapping
2. published library component name
3. instance main-component name
4. node name
5. `unknown`

When mapping is ambiguous:

- preserve the raw Figma or library name
- mark `Mapping status: unresolved`
- explain the ambiguity briefly

## Output requirements

For every Figma inspection, `## View metadata` must include:

- `Platform: figma`
- `Source kind: figma`
- `Source path or URL`
- `Figma file key`
- `Figma node id`
- `Sequence position` when applicable
- `Sequence label` when applicable
- `Screenshot path`
- `Screenshot provenance`
- `Capture method: figma-mcp-get_screenshot`
- `Goal`
