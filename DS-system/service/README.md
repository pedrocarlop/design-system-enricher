# service

## What this component is
The repeated promo item used inside the services section to advertise one offering at a time.

## Where it is used
- Inside `ds-services-cards`.

## How it is used
- It promotes a specific service offering.
- It combines headline copy, supporting text, a CTA, and an image.
- The same observed class variant is used for both visible items, including the consulting promo.

## Structure
- Root element: `div.service`
- Contains `div.content`
- `div.content` contains `h2.h2-500`, `p.paragraph-m-400`, and a CTA link
- Also contains a sibling `picture` element with multiple `source` tags and an `img`

## Variants
- `team-training`

## Layout patterns
- Repeated as sibling items inside `ds-services-cards`.
- Not shown standalone elsewhere.
- Each item uses a two-part copy-and-image composition.

## Relationships with other components
- It appears inside `ds-services-cards`.
- It follows the certification promo section in the page flow.
- It is grouped with another `service` item rather than mixed with cards or course items.

## Usage rules (inferred)
- Used to promote one service offering per item.
- Used only inside the services grouping section in the inspected UI.
- Its role is service promotion and conversion.

## Content patterns
- Service headline.
- Supporting paragraph.
- CTA link.
- Responsive image structure using `picture`.

## Notes
- The file notes that `team-training` is reused for both service promos, so the observed variant does not distinguish the two offers.
