# cky-consent-container

## What this component is

The hidden CookieYes consent region on the page.

## Where it is used

At the body level before the visible page shell.

## How it is used

It holds the cookie consent UI that can appear for privacy handling, but it is hidden in the inspected state.

## Structure

`div.cky-hide.cky-consent-container.cky-banner-bottom[role="region"]` containing `div.cky-consent-bar`, alongside hidden sibling nodes `div.cky-hide.cky-overlay` and `div.cky-modal`.

## Variants

`cky-hide`, `cky-banner-bottom`

## Layout patterns

Hidden overlay/region system rather than a visible content block.

## Relationships with other components

Exists before the page's visible header, main content, and footer.

## Usage rules (inferred)

This component is present in the DOM even when not shown visually.

## Content patterns

Cookie notice copy and consent controls are part of the hidden consent bar.

## Notes

Derived from: `Flows/Self-pace-courses/ui-inspection.md`

