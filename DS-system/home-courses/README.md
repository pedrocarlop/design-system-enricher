# home-courses

## What this component is
The repeated section wrapper used for the two course-promo groups in `main`.

## Where it is used
- Inside `.home-courses-container`, the second top-level content group in `main#main`.

## How it is used
- It groups one course category at a time into a repeated section scaffold.
- It wraps a section header, a list of `course-card` items, and a section action area.
- In the inspected UI, it is used twice to present parallel live and self-paced course groups.

## Structure
- Root element: `section.home-courses`
- Contains `div.home-courses-header`
- Contains `ul.course-cards`
- Contains `div.home-courses-action`
- The observed list classes are `course-cards live-online-cards` and `course-cards selfpaced-cards`

## Variants
None explicitly defined

## Layout patterns
- Repeated section block.
- Each instance contains a repeated list of `course-card` items.
- Used as two sibling sections with the same scaffold.

## Relationships with other components
- It appears after `articles-videos`.
- It contains repeated `course-card` items.
- The two `home-courses` sections appear before `ux-certification-banner`.

## Usage rules (inferred)
- Used to group a course category rather than represent a single course.
- Used when multiple course items need the same section structure.
- Its role is content grouping and conversion toward course offerings.

## Content patterns
- Section header content.
- A repeated course list.
- A section-level action area after the list.

## Notes
- Two sibling instances are present.
- The difference between live and self-paced appears in list class names, not in a separate component name.
