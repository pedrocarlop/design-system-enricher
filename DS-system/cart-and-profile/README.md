# cart-and-profile

## What this component is
The utility block in the header that exposes cart status and login access.

## Where it is used
- On the right side of `nav-main`, next to `search-rebrand`.

## How it is used
- It gives quick access to the cart and login entry point.
- It surfaces cart state through an item count and empty-state styling.
- In context, it behaves as a compact utility cluster.
- In the self-paced page inspection it is grouped with the visible search utility inside `nav-main`.

## Structure
- Root element: `div.cart-and-profile`
- Contains `div.cart.empty` with a link and item count
- Contains `div.login` with a link
- The observed state shows the cart as empty.

## Variants
- `empty`

## Layout patterns
- Inline utility block.
- Grouped with `search-rebrand` inside the right side of `nav-main`.
- Not repeated.
- Compact header utility group.

## Relationships with other components
- It appears inside `nav-main`.
- It is commonly grouped with `search-rebrand`.
- It sits after the main navigation menu within the header layout.
- It appears alongside header search and before the hero block.

## Usage rules (inferred)
- Used in the global header where account and purchase-related access is needed.
- Used as a status-and-entry utility, not as content or navigation grouping.
- The observed state shows cart empty status explicitly.
- Used once per page.

## Content patterns
- Cart link with item count.
- Login link.

## Notes
- Only one instance is present.
- Only the `empty` variant is observed in the captured state.
- Derived from the homepage inspection and the self-paced courses inspection.
