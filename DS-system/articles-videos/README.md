# articles-videos

## What this component is
The grouped container for recent article and video previews in the first section of `main`.

## Where it is used
- In `section.homepage-rebranding.recent`, the first section inside `main#main`.

## How it is used
- It groups recent editorial and video content into one preview area.
- It contains repeated `content-card` items.
- It is followed by a section-level CTA for more articles rather than placing that CTA inside each item.

## Structure
- Root element: `div.articles-videos`
- Sits under `h2.h2-500`
- Contains 4 sibling `div.content-card` items
- Followed by a separate section-level link: `a.button-fill.more-articles.button-red-white.label-m-500`

## Variants
None explicitly defined

## Layout patterns
- Repeated-item group.
- Uses sibling `div` children rather than `li` items.
- Functions as a single content cluster with a heading above and a section CTA after the repeated items.

## Relationships with other components
- It appears after the section heading in `homepage-rebranding`.
- It is composed of repeated `content-card` items.
- It is followed by the section-level "more articles" link.

## Usage rules (inferred)
- Used when the page needs a mixed set of recent article and video previews.
- Used as a section-level grouping container, not as an individual content preview.
- Its role is content grouping and discovery.

## Content patterns
- Repeated preview cards.
- Mixed article and video entries.
- A single CTA after the group.

## Notes
- Only one container is present, but it includes four repeated child items.
