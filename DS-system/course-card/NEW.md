# course-card

## What this component is

A reusable course preview card used across the self-paced and live course listings.

## Where it is used

Inside `ul.course-cards.selfpaced-cards` and `ul.course-cards.live-online-cards`.

## How it is used

It surfaces the course title, supporting summary, metadata, and price or delivery type in a clickable card.

## Structure

Repeated `li.course-card.clickable-card` with an image and `div.content`; the self-paced version includes `div.card-info`, `a.no-decoration`, `p.paragraph-s-300`, and `div.card-footer`, while the live-course version uses the same shell with category text, title, summary, and a simpler footer.

## Variants

`lavender`, `gold`, `salmon`, `turquoise`, `interaction`, `ai`, `research`, `ready`

## Layout patterns

Grid/list card repeated many times in two separate lists.

## Relationships with other components

Grouped under `selfpaced-search` for self-paced courses and under `live-online-promotion` for live courses.

## Usage rules (inferred)

Used as the primary browseable unit for courses on this page.

## Content patterns

Image, duration, lesson count, title, summary, and price or delivery label.

## Notes

Derived from: `Flows/Self-pace-courses/ui-inspection.md`

