# navigation

## What this component is
The middle footer section that exposes grouped footer links.

## Where it is used
- As the middle section inside `footer.footer-rebrand`.

## How it is used
- It organizes footer links into columns.
- It contains a top-level list whose items act as repeated link groups.
- In context, it is the main footer navigation area between newsletter signup and legal/social links.

## Structure
- Root element: `section.navigation.ds-wrapper`
- Contains `div.links-list`
- `div.links-list` contains a top-level `ul`
- That `ul` contains 4 unclassed column items
- Each column item contains `h3.paragraph-m-700` and nested `ul` of links

## Variants
None explicitly defined

## Layout patterns
- Standalone section with repeated column groups.
- The repeated columns are unclassed `li` elements rather than a named item component.
- Used as a grouped multi-column footer layout.

## Relationships with other components
- It appears after `top-footer`.
- It contains repeated `unknown` footer-column items.
- It appears before `bottom-footer`.

## Usage rules (inferred)
- Used when the footer needs grouped navigation links.
- Used as a section-level navigation wrapper, not as the global header navigation.
- Its role is grouped footer navigation.

## Content patterns
- Column headings.
- Nested lists of links.

## Notes
- The column items are documented separately in the inventory as `unknown` because they do not have a stable item class.
