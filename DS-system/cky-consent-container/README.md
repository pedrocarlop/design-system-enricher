# cky-consent-container

## What this component is
The hidden CookieYes consent region for the page.

## Where it is used
- At the body level before the visible page shell.

## How it is used
- It holds the cookie consent UI that can appear for privacy handling.
- In the inspected state it is hidden, alongside its overlay and modal siblings.

## Structure
- Root element: `div.cky-hide.cky-consent-container.cky-banner-bottom`
- Role: `region`
- Contains `div.cky-consent-bar`
- Sibling hidden nodes present in the body: `div.cky-hide.cky-overlay` and `div.cky-modal`

## Variants
- `cky-hide`
- `cky-banner-bottom`

## Layout patterns
- Hidden overlay/region system.
- Not part of the visible page layout in the captured state.

## Relationships with other components
- It appears before the header, main content, and footer.
- It is separate from the visible page chrome.

## Usage rules (inferred)
- Used for cookie consent handling even when not shown visually.
- Used at body level rather than inside a section component.

## Content patterns
- Consent copy and controls inside the consent bar.

## Notes
- Derived from: `Flows/Self-pace-courses/ui-inspection.md`
- The inspected state shows the component hidden with `cky-hide`.

