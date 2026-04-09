# unknown

## What this component is
This is not a stable named component in the markup. The inspection uses `unknown` for two different repeated unclassed list-item patterns: client logo items inside `clients-banner` and footer navigation column items inside `navigation`.

## Where it is used
- Inside `clients-banner`, as `.clients-banner .content > ul > li`
- Inside footer `navigation`, as `section.navigation .links-list > ul > li`

## How it is used
- In `clients-banner`, it serves as one organization logo entry in a repeated credibility list.
- In footer `navigation`, it serves as one navigation column in a repeated grouped-links layout.
- In both cases, the name exists because the repeated structure is visible, but there is no stable item-level class in the inspected markup.

## Structure
- Logo-item version:
- Unclassed `li`
- Contains either `svg` plus `span.sr-only` or an `img`
- Footer-column version:
- Unclassed `li`
- Contains `h3.paragraph-m-700`
- Contains nested `ul` of links

## Variants
None explicitly defined

## Layout patterns
- Always used as a repeated list item.
- In `clients-banner`, repeated 6 times inside one `ul`.
- In footer `navigation`, repeated 4 times as column groups inside one top-level `ul`.
- Not shown standalone.

## Relationships with other components
- The logo-item version appears inside `clients-banner` near the end of `main`.
- The footer-column version appears inside `navigation` in the middle footer section.
- Each version depends on its parent component for meaning because the item itself has no stable component name.

## Usage rules (inferred)
- Used only where a repeated list structure exists without a stable item class.
- Not a reusable named component in the same way as `content-card` or `course-card`.
- Its role is parent-dependent: logo proof item in `clients-banner`, navigation column in footer `navigation`.

## Content patterns
- Logo-item version: logo graphic via `svg` or `img`, with `span.sr-only` present in the SVG case.
- Footer-column version: text heading plus nested link list.

## Notes
- The component inventory contains two separate `unknown` entries with different selectors and roles.
- Because the task requires exact component names, both observed `unknown` usages are documented in this single folder.
