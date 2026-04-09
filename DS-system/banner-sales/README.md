# banner-sales

## What this component is
The page-level promotional banner shown at the very top of the page. It is a dismissible strip used for a sitewide message and, in the self-paced page inspection, specifically promotes NN/G self-paced training.

## Where it is used
- At the very top of the page, above the header and main navigation.

## How it is used
- It surfaces a promotion before any navigation or hero content.
- It contains short promo text and a close control.
- In context, it behaves like a temporary announcement layer rather than core page content.
- In the self-paced page, the CTA text is "Find Your Course".

## Structure
- Outer wrapper: `div.banner-sales.paragraph-xs-400`
- Content area: `div.banner-sales__content`
- Content area contains `p.banner-sales__text` and `a.banner-sales__action`
- Sibling close control: `button` with `aria-label="Close promotion banner"`

## Variants
None explicitly defined

## Layout patterns
- Standalone full-width banner at the top of the page.
- Not repeated in a list or grid.
- Used as a single pre-header strip.

## Relationships with other components
- It appears before `nav-main` and the rest of the header.
- It is separated from the main page content and functions as a pre-header message.
- On the self-paced page it appears before `catalog-banner-header`.

## Usage rules (inferred)
- Used when the page needs a visible sitewide promotion.
- Used before navigation, not inside content sections.
- Its role is promotional messaging, not navigation or content grouping.
- Used once per page as a top-level announcement strip.

## Content patterns
- Short promotional copy.
- A close button for dismissal.
- A single CTA link.

## Notes
- Only one instance is present in the inspected UI.
- Derived from the homepage inspection and the self-paced courses inspection.
