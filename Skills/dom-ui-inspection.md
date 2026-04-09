---
name: dom-ui-inspection
description: Use when a user provides a live URL and wants a DOM-driven UI inspection that extracts page structure and component names strictly from rendered HTML, class names, data attributes, roles, and repeated patterns. Trigger for requests to inspect a page, inventory components, map page structure, or produce `Flow/ui-inspection.md` and `Flow/screenshots/...` from a real site without inventing design-system names.
---

# DOM UI Inspection

Use this skill when the task is to inspect a live page and describe its structure and components from code signals, not from design interpretation.

## Linear workflow position

This is step 1 of a 3-step repository workflow:

1. `dom-ui-inspection`
2. `ui-inspection-to-ds-system-usage`
3. `ds-system-knowledge-merge`

This skill only produces the inspection artifact.
It does not write `DS-system/` component knowledge files.

## What made this workflow reliable

- The browser was the source of truth.
- The screenshot helped with section order and visible content, but naming came from the DOM.
- Component names were taken only from explicit signals in the markup.
- Repeated structures were grouped only when both structure and naming patterns matched.
- When a stable component name was missing, the correct answer was `unknown`.

## Non-negotiable rules

- Do not invent component names.
- Do not translate names into design-system language.
- Do not use generic names like `card`, `tile`, `section`, or `block` unless that exact name exists in the DOM.
- Prefer these naming signals in this order:
  1. `data-component`, `data-testid`, `data-ui`
  2. stable non-utility classes
  3. BEM-style block names
  4. semantic or structural grouping
- If no clear identifier exists, use:
  - `component_name: unknown`
  - plus a structural description
- Only call variants when they are explicit in class names such as `--featured`, `--video`, `--large`.
- Separate visible UI from hidden DOM-only systems such as cookie banners or modals.

## Required workflow

1. Open the page in a real browser.
2. Wait for full load, preferably `networkidle`.
3. Capture a screenshot before deep analysis.
4. Inspect top-level DOM structure first:
   - body children
   - header
   - main
   - footer
5. Extract repeated class names and count them.
6. Identify repeated structures that share both:
   - a stable naming signal
   - a matching internal shape
7. Drill into candidate components to inspect child structure.
8. Record exact selectors and explicit variants.
9. Write the markdown report.
10. Verify that every named component is grounded in the DOM.

## Preferred browser workflow

If `agent-browser` is available, use it.

Example flow:

```bash
mkdir -p Flow/screenshots
agent-browser open "https://example.com"
agent-browser wait --load networkidle
agent-browser screenshot "Flow/screenshots/home.png"
```

Then inspect with targeted `agent-browser eval` calls rather than guessing from the screenshot.

## DOM extraction sequence

Start broad, then narrow.

### 1. Capture body-level structure

Collect `document.body.children` with:

- tag
- id
- className
- role
- aria-label

This establishes the top-to-bottom skeleton and surfaces hidden systems such as cookie UI.

### 2. Capture section-level structure

Inspect:

- `header`
- `main`
- `footer`

For each top-level child, record:

- tag
- id
- className
- role
- aria-label
- first heading text if present
- immediate child tags

### 3. Find repeated class patterns

Count class occurrences across `document.querySelectorAll("*")`.

Prioritize repeated, non-utility classes such as:

- `content-card`
- `course-card`
- `nav-main`
- `search-rebrand`

Deprioritize pure typography and spacing utilities unless they help distinguish structure.

### 4. Drill into candidate components

For each candidate selector:

- inspect the repeated parent
- inspect 1 to 3 representative instances
- inspect child structure 2 to 3 levels deep

Record:

- the exact class string
- explicit modifiers
- immediate children
- repeated descendants

### 5. Count repetitions explicitly

Use exact selectors to confirm the number of repeated items, for example:

- cards in a list
- columns in footer navigation
- logo items in a client strip
- top-level nav groups

This keeps the report factual.

## What to name as components

Name a component only when there is a stable identifier.

Good component names:

- a stable class like `content-card`
- a stable class like `course-card`
- a wrapper class like `search-rebrand`
- a repeated list parent like `articles-videos`

Use `unknown` when:

- the repeated item has no class or data identifier
- the only classes are utilities
- the only evidence is visual similarity

When using `unknown`, describe the structure precisely, for example:

- unclassed `li` with `h3` and nested `ul`
- unclassed logo item with `svg` and `span.sr-only`

## How to handle generic class names

Some pages contain class names like `content`, `action`, or `card`.

Use them only if:

- they are the most stable available identifier in that local context
- and the selector is scoped by a named parent

Example:

- acceptable: `section.why-nngroup li.card`
- not acceptable: calling every preview block a `card` when the page already exposes `content-card`

## Required output shape

Write a markdown report with these sections:

```md
# UI Inspection

## Screenshot

## Page purpose (inferred from UI)

## Structural breakdown (top to bottom)

## Component inventory

## Repeated patterns

## Layout observations

## Notes
```

For each component entry, include:

- `Component: <exact name or unknown>`
- `Source of name`
- `Selectors`
- `Where it appears`
- `Structure`
- `Variants`
- `Usage`
- `Repetition`

## Writing standard

- Be precise and mechanical.
- Ground statements in the DOM and rendered UI.
- Explain what the page is doing, but only from visible content and structure.
- Explain layout hierarchy and grouping strategy without inventing abstractions.
- Call out hidden or inconsistent structures when relevant.
- Mention uncertainty only by marking the name as `unknown`; do not hedge with words like “likely” or “probably”.

## Handoff contract for the next skill

The next skill reads this file as structured input, so preserve these conventions exactly:

- keep the top-level section headings unchanged
- keep `## Component inventory` as a dedicated section
- write each component entry as `### Component: <exact name>`
- keep the component fields in this shape:
  - `Source of name`
  - `Selectors`
  - `Where it appears`
  - `Structure`
  - `Variants`
  - `Usage`
  - `Repetition`
- keep `## Repeated patterns`, `## Layout observations`, and `## Notes` as separate top-level sections

Do not pre-merge component knowledge into `DS-system/` during this step.

## Validation checklist

Before finishing, verify:

- the screenshot file exists
- the markdown file exists
- the report keeps the required top-level headings exactly
- every component entry uses `### Component: <name>`
- every named component comes from a real selector or stable DOM signal
- every repeated pattern has a concrete selector or counted structure
- no design-system names were invented

## Deliverable convention

Unless the user asks otherwise, create:

- `Flow/ui-inspection.md`
- `Flow/screenshots/home.png`

These files are the expected inputs to the next step of the workflow.

If the user wants this as an installable Codex skill later, place this content in a `SKILL.md` file inside a skill folder and keep the frontmatter intact.
