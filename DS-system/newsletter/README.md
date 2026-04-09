# newsletter

## What this component is
The newsletter subscription block inside the top footer.

## Where it is used
- Inside `top-footer`.
- Inside the first footer section of `footer-rebrand`.

## How it is used
- It captures newsletter subscriptions.
- It combines explanatory text with a validated subscribe form.
- In context, it is the main conversion element of the top footer.
- In the self-paced inspection it appears beneath the "Never miss an update" heading.

## Structure
- Root element: `div.newsletter`
- Contains `div.newsletter-text` with heading and paragraph
- Contains `form.form-field.form-validated.subscribe-form`
- The form contains `div.subscribe-wrap[role="group"][aria-label="Newsletter subscribe"]`
- Inside the group are `label`, `span.subscribe-divider`, `input.newsletter-email`, and `button.subscribe-btn`
- Followed by `div.error-local`
- The self-paced inspection shows the same outer newsletter block with the validated subscribe form.

## Variants
None explicitly defined

## Layout patterns
- Standalone form block within `top-footer`.
- Built as text plus form.
- Not repeated.
- Used as the first footer conversion block.

## Relationships with other components
- It appears inside `top-footer`.
- It comes before footer `navigation` in the full page flow.
- It is grouped with a decorative SVG in its parent section.
- It is followed by the footer navigation and the bottom legal/social bar.

## Usage rules (inferred)
- Used for newsletter conversion in the footer.
- Used as a dedicated signup module, not as a generic inline form elsewhere on the page.
- Its role is email capture.
- Used once per page footer.

## Content patterns
- Heading and supporting paragraph.
- Email input.
- Submit button.
- Local error area.
- Newsletter-specific subscribe affordances and validation state.

## Notes
- The form is explicitly marked as validated through class names.
- Derived from the homepage inspection and the self-paced courses inspection.
