# home-banner-header

## What this component is
The homepage hero block inside the header. It carries the main page message and the primary call-to-action links.

## Where it is used
- In the hero area inside the header, below `nav-main`.

## How it is used
- It introduces the homepage message.
- It contains the main course-focused CTAs for the page.
- It behaves as the hero for the page, even though it is part of the header rather than a standalone `main` section.

## Structure
- Root element: `div.home-banner-header.ds-wrapper`
- Contains `h1.h1-500`
- Contains `div.action`
- `div.action` contains two links:
- `button-fill button-maroon-white`
- `button-outline button-darkmaroon-transparent`

## Variants
None explicitly defined

## Layout patterns
- Standalone hero block.
- Built as a heading plus grouped actions.
- Not repeated.

## Relationships with other components
- It appears after `nav-main` inside the header.
- It appears before the first `main` section, including `articles-videos`.
- Its CTA grouping is internal rather than separated into another inventory component.

## Usage rules (inferred)
- Used as the homepage hero message area.
- Used where the page needs primary conversion CTAs near the top.
- Its role is introductory messaging and conversion, not navigation.

## Content patterns
- One main heading.
- Two CTA links styled differently.

## Notes
- The layout observations explicitly say the hero is part of the header, not a separate `main` section.
