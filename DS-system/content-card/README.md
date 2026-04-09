# content-card

## What this component is
The repeated preview card used to surface recent articles and videos.

## Where it is used
- Inside `articles-videos` in the first section of `main`.

## How it is used
- It previews a single article or video.
- It contains a title, summary, and pill metadata.
- Video cards add an image wrapper with a play icon, while article cards use an image directly.

## Structure
- Root element: `div.content-card`
- Repeated clickable preview block
- Article instances contain `img` plus `div.content-card__content`
- Video instances contain `div.content-card__image` with `div.content-card__play-icon` and `img`, then `div.content-card__content`
- `div.content-card__content` contains `h3.content-card__title` with a link
- Also contains `p.content-card__summary`
- Also contains `div.content-card__pills` with repeated `span.ds-pill-small`

## Variants
- `content-card--article`
- `content-card--video`
- `ready`

## Layout patterns
- Repeated as sibling items in one grouped content section.
- Not used standalone in the inspected UI.
- Mixed article and video variants appear together in the same group.

## Relationships with other components
- It appears inside `articles-videos`.
- It follows the section heading and comes before the section-level "more articles" CTA.
- It is grouped with other `content-card` items rather than paired with unrelated component types.

## Usage rules (inferred)
- Used to preview recent reading and video content.
- Used as an item-level card inside a grouped content feed.
- When the preview is for video, a play-icon wrapper is added around the image area.

## Content patterns
- Image or image-plus-play treatment.
- Linked title.
- Short summary text.
- Pill metadata in repeated small pills.

## Notes
- Four total instances are present: two article cards and two video cards.
