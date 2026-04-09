# ux-certification-banner

## What this component is
The promotional banner for the certification program within the main content flow.

## Where it is used
- Inside `section.earn-ux-certification` in `main#main`.

## How it is used
- It promotes the certification program with supporting text and media.
- It splits content into a copy area and a media area.
- In context, it acts as a focused promotional block between course content and service promos.

## Structure
- Root element: `div.ux-certification-banner`
- Two-part wrapper:
- `div.ux-banner__copy`
- `div.ux-banner__media`
- The copy side includes `h3.subhead-m-400`, paragraph text, and a CTA link

## Variants
None explicitly defined

## Layout patterns
- Standalone split-content banner.
- Not repeated.
- Uses a side-by-side copy-and-media composition.

## Relationships with other components
- It appears after the `home-courses` group.
- It appears before `ds-services-cards`.
- It functions as a bridge between course-focused and service-focused sections.

## Usage rules (inferred)
- Used to promote the certification program as a dedicated section.
- Used as a single focused campaign block, not as a repeated card.
- Its role is promotional conversion with supporting media.

## Content patterns
- Section subheading.
- Supporting paragraph text.
- CTA link.
- Media area.

## Notes
- Only one instance is present.
