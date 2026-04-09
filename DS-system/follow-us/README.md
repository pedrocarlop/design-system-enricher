# follow-us

## What this component is
The social-links block inside the bottom footer.

## Where it is used
- On the right side of `bottom-footer`.

## How it is used
- It lists social destinations in a compact grouped block.
- It consists of a heading plus a repeated social link list.
- In context, it serves as the footer’s social navigation area.

## Structure
- Root element: `div.follow-us`
- Contains `h2.subhead-s-500`
- Contains `ul.social`
- `ul.social` contains repeated `li.paragraph-s-400` items
- Each item wraps a single link

## Variants
None explicitly defined

## Layout patterns
- Standalone grouped block within `bottom-footer`.
- Uses a repeated inline-style list of social items.
- Contains 8 repeated list items in the inspected UI.

## Relationships with other components
- It appears inside `bottom-footer`.
- It is grouped with `div.copyright-rebrand`.
- It appears before the page-level `back-to-top` control in the overall flow.

## Usage rules (inferred)
- Used for footer social destinations.
- Used as a grouped list, not as isolated social buttons elsewhere on the page.
- Its role is external/social navigation.

## Content patterns
- Section heading.
- Repeated linked social destinations.

## Notes
- Only one `follow-us` container is present, with eight child items.
