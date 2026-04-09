# selfpaced-search

## What this component is
The course catalog and filter shell for self-paced courses.

## Where it is used
- First content section in `main#main`, after the client banner.

## How it is used
- It groups the filter controls and the full course card list.
- It includes a hidden no-results state.

## Structure
- Root element: `section.selfpaced-search.course-filters#self-paced-search`
- Contains `div.ds-wrapper`
- Inside the wrapper are `h2.h2-500`, a filter header, `ul.course-cards.selfpaced-cards`, and `div.no-results.hidden`

## Variants
- `course-filters`

## Layout patterns
- Catalog shell with filters above a large repeating card list.
- Uses a hidden empty-state container.

## Relationships with other components
- It follows `clients-banner`.
- It precedes `reasons`.

## Usage rules (inferred)
- Used once as the main browsing surface for self-paced courses.
- Used when the page needs filterable course discovery.

## Content patterns
- Section heading.
- Filter labels and select controls.
- Course cards.
- Hidden empty-state copy.

## Notes
- Derived from: `Flows/Self-pace-courses/ui-inspection.md`

