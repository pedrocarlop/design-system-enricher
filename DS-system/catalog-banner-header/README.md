# catalog-banner-header

## What this component is
The hero wrapper for the self-paced courses landing page.

## Where it is used
- Directly below the header navigation.

## How it is used
- It combines the page intro on one side and the self-paced advantages strip on the other.
- It serves as the header hero for the self-paced courses page.

## Structure
- Root element: `div.catalog-banner-header.ds-wrapper`
- Contains `div.content`
- Contains `section.selfpaced-advantages`
- The content side contains the main hero copy and a picture

## Variants
None explicitly defined

## Layout patterns
- Split hero layout with copy and supporting content.
- One content column plus one benefit-strip column.

## Relationships with other components
- It appears after `nav-main`.
- It contains `information` and `selfpaced-advantages`.

## Usage rules (inferred)
- Used once as the top hero layout for the page.
- Used for introductory messaging rather than repeated item content.

## Content patterns
- Page intro copy.
- Supporting image.
- Short benefit cards.

## Notes
- Derived from: `Flows/Self-pace-courses/ui-inspection.md`

