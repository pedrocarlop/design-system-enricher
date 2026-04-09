# ds-services-cards

## What this component is
The section-level container that groups service promotion items.

## Where it is used
- After the certification section in `main#main`.

## How it is used
- It groups service promos into one section.
- In the inspected UI it contains two repeated `service` items.
- It is used to present team-training and consulting promos together.

## Structure
- Root element: `section.ds-services-cards.ds-wrapper`
- Contains 2 sibling `div.service.team-training` items

## Variants
None explicitly defined

## Layout patterns
- Repeated-item group.
- Uses sibling service blocks instead of a list element.
- Not repeated as a section elsewhere in the inspected UI.

## Relationships with other components
- It appears after `ux-certification-banner`.
- It contains repeated `service` items.
- It appears before the `why-nngroup` section.

## Usage rules (inferred)
- Used to group multiple service offerings into one section.
- Used as a section wrapper rather than an item-level promo.
- Its role is grouping and promoting service categories.

## Content patterns
- Repeated service promos with copy, CTA, and image.

## Notes
- The container is a single instance with two child promos.
