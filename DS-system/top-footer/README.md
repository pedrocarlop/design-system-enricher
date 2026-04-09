# top-footer

## What this component is
The first footer section that wraps the newsletter signup area.

## Where it is used
- As the first section inside `footer.footer-rebrand`.

## How it is used
- It introduces the footer with the newsletter signup area.
- It combines a decorative graphic with the `newsletter` block.
- In context, it acts as the entry point into the footer.

## Structure
- Root element: `section.top-footer.ds-wrapper`
- Contains a decorative `svg`
- Contains `div.newsletter`

## Variants
None explicitly defined

## Layout patterns
- Standalone footer section.
- Uses a paired decorative-and-content composition.
- Not repeated.

## Relationships with other components
- It appears after `clients-banner`.
- It contains `newsletter`.
- It appears before the footer `navigation` section.

## Usage rules (inferred)
- Used to wrap newsletter signup at the start of the footer.
- Used as a section-level footer wrapper, not as a general content container.
- Its role is conversion and footer entry.

## Content patterns
- Decorative SVG.
- Newsletter heading, text, and form content through the nested `newsletter` component.

## Notes
- Only one instance is present.
