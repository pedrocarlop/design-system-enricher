# course-card

## What this component is
The repeated item used to preview individual courses inside the course sections.

## Where it is used
- Inside both `home-courses` sections.
- Inside `selfpaced-search` and `live-online-promotion` in the self-paced page inspection.
- Specifically inside `ul.course-cards.live-online-cards` and `ul.course-cards.selfpaced-cards`.

## How it is used
- It promotes a single course with summary information and pricing.
- It contains metadata, title, summary, price, and course-type pill information.
- The same component name is used across live and self-paced course groups, with a small structural difference between the sampled versions.
- It also appears in the self-paced page as the main browseable course tile for both catalog and live-promo sections.

## Structure
- Root element: `li.course-card`
- Contains a lead `img`
- Contains a content wrapper
- Live-course examples use `div.content > div.content-description`
- Inside that structure are `div.card-info`, `a.no-decoration` with `strong.title`, `p.paragraph-s-300`, and `div.card-footer`
- The sampled self-paced example places `div.card-info`, `a.no-decoration`, `p`, and `div.card-footer` directly under `div.content`
- The self-paced inspection shows the same shell used for both catalog cards and live course promo cards.

## Variants
- `ai`
- `gold`
- `interaction`
- `lavender`
- `research`
- `salmon`
- `turquoise`
- `ready`

## Layout patterns
- Repeated list item inside `ul.course-cards`.
- Used in repeated groups rather than standalone.
- Appears across two sibling course sections with two items in each sampled list.
- The self-paced inspection expands the total repeated set to 21 items across the catalog and live-course promo.

## Relationships with other components
- It appears inside `home-courses`.
- It appears inside `selfpaced-search`.
- It appears inside `live-online-promotion`.
- It follows the course-section header and appears before the section action area.
- It is grouped only with other `course-card` items within each list.
- It is grouped with different list contexts rather than a single dedicated card rail.

## Usage rules (inferred)
- Used to preview a single course offer.
- Used within course-section lists, not as a generic content card elsewhere on the page.
- Its role is course discovery and conversion support.
- Used as the primary browseable course unit in both course promotion and catalog views.

## Content patterns
- Course image.
- Metadata block.
- Linked title.
- Summary paragraph.
- Footer area with price and course-type pill.
- In the self-paced inspection, live-course cards use category text and a delivery label instead of a purchase price emphasis.

## Notes
- Four total items are present across the two course lists.
- The document notes a structural inconsistency between sampled live and self-paced instances.
- The self-paced inspection shows a much larger repeated set with 18 catalog items and 3 live-promo items.
