# selfpaced-search

## What this component is

The course catalog and filter shell for self-paced courses.

## Where it is used

First content section in `main#main`, after the client banner.

## How it is used

It groups the filter controls and the full course card list, and includes a hidden no-results state.

## Structure

`section.selfpaced-search.course-filters#self-paced-search` containing `div.ds-wrapper`, `h2.h2-500`, a filter header, `ul.course-cards.selfpaced-cards`, and `div.no-results.hidden`.

## Variants

`course-filters`

## Layout patterns

Catalog shell with filters above a large repeating card list.

## Relationships with other components

Follows `clients-banner` and precedes `reasons`.

## Usage rules (inferred)

Used once as the main browsing surface for self-paced courses.

## Content patterns

Section heading, filter labels, course cards, and hidden empty-state copy.

## Notes

Derived from: `Flows/Self-pace-courses/ui-inspection.md`

