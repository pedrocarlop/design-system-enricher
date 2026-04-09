# clients-banner

## What this component is
The final main-content section used to show client and organization logos as proof.

## Where it is used
- As the final section in `main#main`.

## How it is used
- It provides credibility through recognizable organization logos.
- It contains section text plus a repeated list of logo items.
- In context, it acts as a proof section before the footer begins.

## Structure
- Root element: `section.clients-banner.ds-wrapper`
- Contains `div.content`
- `div.content` contains section heading text
- `div.content` also contains an unclassed `ul` of logo items

## Variants
None explicitly defined

## Layout patterns
- Standalone section with an internal repeated logo list.
- The repeated child items do not have a stable item class.
- Used as the last main-content block before the footer.

## Relationships with other components
- It appears after the `why-nngroup` section.
- It contains repeated `unknown` logo items.
- It appears before `top-footer`.

## Usage rules (inferred)
- Used when the page needs a credibility section based on client or organization logos.
- Used as a section-level grouping wrapper, not as an individual logo item.
- Its role is trust-building near the end of the page.

## Content patterns
- Section heading text.
- Repeated logo entries using either `svg` or `img`.

## Notes
- The repeated logo items are documented separately in the inventory as `unknown` because they are unclassed.
