# card

## What this component is
The proof-point card used inside the `why-nngroup` section.

## Where it is used
- Inside `section.why-nngroup`.

## How it is used
- It presents a single proof-point statement about NNGroup.
- It pairs a short heading with supporting body text.
- In context, it acts as a credibility or value statement item rather than a promotional CTA card.

## Structure
- Root element: `li.card`
- Contains `div.card-header` with `h3.card-title.subhead-m-400`
- Contains a sibling `p.card-text.paragraph-m-400`

## Variants
None explicitly defined

## Layout patterns
- Repeated list item inside one `ul`.
- Used as a grouped set of three proof-point items.
- Not shown as a standalone card elsewhere in the inspected UI.

## Relationships with other components
- It appears inside the `why-nngroup` section.
- It comes after `ds-services-cards` and before `clients-banner` in the page flow.
- It is grouped only with other proof-point cards in the same list.

## Usage rules (inferred)
- Used when the page is presenting credibility or explanatory proof points.
- Used inside a grouped section rather than as a general-purpose card across the page.
- Its role is support and persuasion, not navigation or direct conversion.

## Content patterns
- Short card title.
- Supporting paragraph text.

## Notes
- The component name is generic and only becomes meaningful in the `why-nngroup` context.
