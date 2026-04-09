# back-to-top

## What this component is
The floating return-to-top control placed after the footer in the page body.

## Where it is used
- After the footer in `body`.

## How it is used
- It provides a quick way to return to the top of the page.
- It is separate from footer content and main content.
- In context, it behaves like a page-level utility control.
- In the self-paced inspection it appears as `button.back-to-top.ds-button-medium.ds-button-gray.label-m-500`.

## Structure
- Root element: `button.back-to-top`
- Contains an `svg`
- In the self-paced inspection the button also includes visible "Back to Top" text.

## Variants
- `ds-button-medium`
- `ds-button-gray`

## Layout patterns
- Standalone floating control.
- Not part of a list, grid, or grouped content section.
- Appears once at body level after the footer.
- Sits outside the footer layout but visually follows it.

## Relationships with other components
- It appears after `bottom-footer` and the rest of the footer.
- It is not grouped inside another documented component.
- It follows the `footer-rebrand` shell.

## Usage rules (inferred)
- Used as a page-level navigation utility after long page content.
- Used outside the footer structure even though it appears after the footer visually.
- Its role is navigation back to the top of the page.
- Used once as a floating utility button.

## Content patterns
- Icon-only button using `svg`.
- Text label plus icon in the self-paced page inspection.

## Notes
- Only one instance is present.
- Derived from the homepage inspection and the self-paced courses inspection.
