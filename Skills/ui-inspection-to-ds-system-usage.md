---
name: ui-inspection-to-ds-system-usage
description: Use when a user provides a UI inspection markdown file and wants component usage knowledge extracted strictly from its Component inventory into DS-system folders as merge-ready `NEW.md` files plus component-local screenshot assets. Trigger for requests to turn `ui-inspection.md`-style reports into per-component staging docs without reading existing component markdown files, without merging prior observations, and without inventing components or names.
---

# UI Inspection To DS System Usage

Use this skill when the source of truth is an existing inspection document such as `ui-inspection.md`, not a live page.

The job is to convert inspection evidence into merge-ready component usage notes.

## Linear workflow position

This is step 2 of a 3-step repository workflow:

1. `dom-ui-inspection`
2. `ui-inspection-to-ds-system-usage`
3. `ds-system-knowledge-merge`

This skill consumes the inspection artifact from step 1 and prepares `NEW.md` files, plus copied screenshot assets, for step 3.

## What this workflow is for

- Building a design-system knowledge repository from inspected UI evidence
- Creating one merge-ready staging file per component folder
- Preserving page-by-page observations without reading canonical component docs yet

This skill is not for:

- live DOM inspection
- merging existing component knowledge
- reconciling contradictions across pages
- inventing a canonical design system

## Source of truth

Only use the provided inspection markdown file.

In the default linear workflow, that input is:

- `Flow/ui-inspection.md`

Do not use:

- external knowledge
- visual inference beyond what the inspection already states
- existing files inside `DS-system/<component-name>/` as input

## Non-negotiable rules

- Read only the provided inspection document for content.
- Extract components only from the `## Component inventory` section.
- Use the exact component names from `### Component: ...`.
- Do not rename components.
- Do not merge components.
- If a component is named `unknown`, keep `unknown`.
- If the same component name appears multiple times in the inventory, treat each inventory entry as a separate observation, but preserve those observations inside one merge-ready `NEW.md` for that component.
- Do not read existing component markdown files before writing new ones.
- Do not update or overwrite existing `README.md` files during this step.
- Do not create or edit `CONFLICTS.md` during this step.
- Create or overwrite only `NEW.md` as the staging file for the merge step.
- Create or reuse `DS-system/<component-name>/assets/` for screenshot files copied from the source inspection flow.
- Include those screenshots in the generated `NEW.md` with relative `assets/...` links so the component doc shows where the component was used.

## Repository behavior

Create or reuse:

- `DS-system/`
- `DS-system/<component-name>/`
- `DS-system/<component-name>/assets/`

For each unique component name in the inspection, create one staging file:

- `DS-system/<component-name>/NEW.md`

Important:

- `NEW.md` represents the current inspection only.
- It is a handoff artifact for `ds-system-knowledge-merge`.
- If a previous `NEW.md` exists, overwrite it with the current inspection output.
- Do not open `README.md` to shape the new content.
- Copy the relevant page screenshot(s) into the component's `assets/` folder before writing the markdown references.

## Required writing standard

Write for a designer or agent that wants to reuse the component correctly based on observed usage.

- Be concrete, not abstract.
- Prefer repeated patterns over one-off details.
- Only describe what can be inferred from the inspection file.
- If something is uncertain, say so clearly.
- Do not write generic design advice.
- Do not invent best practices.

## Required section structure for each generated file

Use this exact structure:

```md
# <component-name>

## Screenshot

## What this component is

## Where it is used

## How it is used

## Structure

## Variants

## Layout patterns

## Relationships with other components

## Usage rules (inferred)

## Content patterns

## Notes
```

If no explicit variants are present, write:

`None explicitly defined`

The main headings above must stay exact so the merge skill can compare sections reliably.

## Extraction workflow

1. Read the provided inspection markdown.
2. Locate `## Component inventory`.
3. Parse every `### Component: <name>` block until the next top-level section.
4. Group entries by exact component name.
5. For each grouped component name, capture only the evidence written in those matching inventory blocks.
6. Optionally use `## Repeated patterns`, `## Layout observations`, and `## Notes` from the same inspection file only when they directly clarify that component.
7. Create `DS-system/<exact-component-name>/` if it does not exist.
8. Create `DS-system/<exact-component-name>/assets/` if it does not exist.
9. Copy the relevant screenshot asset(s) into `DS-system/<exact-component-name>/assets/`.
10. Write `DS-system/<exact-component-name>/NEW.md` with local image links to those assets.

## Handling multiple inventory entries with the same component name

Some inspections may contain the same exact component name more than once, such as repeated `unknown` entries for different unclassed structures.

In that case:

- do not split them into multiple files
- do not silently collapse them into one truth
- keep one `NEW.md` because the merge step expects one staging file per component folder
- preserve separate observations inside the affected sections with labels such as:
  - `#### Observed pattern 1`
  - `#### Observed pattern 2`
- note clearly in `## Notes` that the current inspection produced multiple entries with the same exact component name
- if multiple screenshots are relevant to those observations, place them in the same component `assets/` folder and reference them from the generated markdown

This preserves source ambiguity while keeping the handoff compatible with the merge skill.

## How to write each section

### What this component is

Describe the component based on its observed structure and role in the UI.

### Screenshot

Embed one or more markdown image links to the copied asset(s) using relative `assets/...` paths.
Use the page screenshot that shows the component in context.

### Where it is used

List the section, area, or parent region where it appears.

### How it is used

Explain:

- what purpose it serves
- what kind of content it contains
- how it behaves in context

### Structure

Describe:

- child elements
- layout composition
- required elements if observable

### Variants

Include only variants explicitly present in class names or structure.

### Layout patterns

Explain whether the component appears:

- standalone
- in a list
- in a grid
- inline
- grouped with others

Be specific about repeated-item structure when the inspection provides it.

### Relationships with other components

Explain:

- what usually appears before it
- what usually appears after it
- what components it is grouped with

Only use relationships visible in the inspection document.

### Usage rules (inferred)

Write practical rules grounded in observed usage, such as:

- when the component is used
- when it is not used in the inspected page
- what role it plays in the page

Do not turn these into opinionated guidelines.

### Content patterns

Describe typical observed content, such as:

- headings
- summaries
- links
- images
- metadata
- pills
- icons

### Notes

Use this section for:

- ambiguity
- structural inconsistency
- duplicate component names
- edge cases
- source provenance if useful
- screenshot provenance if useful

Recommended provenance line:

- `Derived from: <relative path to inspection file>`

Also note when the current `NEW.md` contains multiple observations from the same inspection for one exact component name.

## Validation checklist

Before finishing, verify:

- every unique component name in the inventory produced `DS-system/<component-name>/NEW.md`
- every folder name matches the exact component name
- every generated component folder contains an `assets/` directory with the copied screenshot asset(s)
- no component names were invented
- no existing component markdown files were read
- no `README.md` files were overwritten
- every generated `NEW.md` follows the required section structure
- duplicate same-name observations from the same inspection were preserved inside the relevant `NEW.md`
- every generated `NEW.md` includes relative links to the copied screenshot asset(s)

## Deliverable convention

Unless the user asks otherwise, the output location is:

- `DS-system/<component-name>/NEW.md`
- `DS-system/<component-name>/assets/`

These files are the expected inputs to `ds-system-knowledge-merge`.

If the repository already contains canonical `README.md` files, leave them untouched during this step.
