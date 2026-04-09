# bottom-footer

## What this component is
The last footer block that holds legal/copyright content and social links.

## Where it is used
- As the last block inside `footer.footer-rebrand`.

## How it is used
- It closes the footer with legal information and social destinations.
- It contains two side-by-side areas: copyright content and `follow-us`.
- In context, it is the final footer layer before the floating `back-to-top` control.
- In the self-paced inspection it appears inside `footer-rebrand` with `div.copyright-rebrand` and `div.follow-us`.

## Structure
- Root element: `div.bottom-footer.ds-wrapper`
- Contains `div.copyright-rebrand`
- Contains `div.follow-us`
- `div.copyright-rebrand` contains the copyright text and legal links.
- `div.follow-us` contains the social navigation block.

## Variants
None explicitly defined

## Layout patterns
- Standalone footer block.
- Split into two grouped areas.
- Not repeated.
- Final footer utility row.

## Relationships with other components
- It appears after footer `navigation`.
- It contains `follow-us`.
- It appears before `back-to-top`.
- It is the closing footer layer inside `footer-rebrand`.

## Usage rules (inferred)
- Used as the closing footer bar.
- Used for legal/supporting information plus social linking, not for primary navigation.
- Its role is footer closure and external link access.
- Used once per page.

## Content patterns
- Copyright and legal content.
- Social links through the nested `follow-us` component.
- Cookie preference and declaration links are part of the legal area.

## Notes
- Only one instance is present.
- Derived from the homepage inspection and the self-paced courses inspection.
