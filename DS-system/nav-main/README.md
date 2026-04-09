# nav-main

## What this component is
The primary desktop navigation block inside the header. It combines brand access, top-level navigation, grouped submenu content, search, and account/cart access.

## Where it is used
- At the top of the header, above the page hero block.
- In the homepage inspection it appears above `home-banner-header`.
- In the self-paced courses inspection it appears above `catalog-banner-header`.

## How it is used
- It provides the main site navigation.
- It contains grouped submenu navigation under repeated top-level items.
- It also hosts `search-rebrand` and `cart-and-profile` on the right side.
- It uses a burger button and logo on the left, top-level nav groups in the middle, and utilities on the right.

## Structure
- Root element: `nav.nav-main.nav-main--rebrand.desktop`
- Inner wrapper: `div.ds-wrapper.header-content`
- Left side: `div.nav-menu`
- `div.nav-menu` contains `button.burger-button`, `a.rebrand-logo`, and a top-level `ul`
- The top-level `ul` contains 4 repeated `li.has-subnav` items
- Each repeated nav item contains `ul.submenu`
- Each submenu contains one or more `li.menu-section` with nested `ul.menu-section-list`
- Right side: `div.search-and-profile`
- In the self-paced page, the right-side utilities include a visible search field, cart state, and login link.

## Variants
- `nav-main--rebrand`
- `desktop`

## Layout patterns
- Standalone header navigation bar.
- Internally arranged as a split layout with navigation on the left and utilities on the right.
- Uses repeated grouped submenu items rather than a flat inline link list.
- Repeated submenu groups are the defining structural pattern.

## Relationships with other components
- It appears after `banner-sales` when the promo banner is present.
- It appears before `home-banner-header` within the same header.
- It is grouped directly with `search-rebrand` and `cart-and-profile`.
- It appears before `catalog-banner-header` on the self-paced page.

## Usage rules (inferred)
- Used as the primary site navigation layer.
- Used at the top of the page rather than inside `main`.
- When submenu navigation is needed, it uses repeated `li.has-subnav` groups with nested lists.
- Used once per page as the global navigation shell.

## Content patterns
- Brand logo link.
- Four top-level navigation groups.
- Nested sectioned submenu links.
- Search and account/cart utilities.
- The same header shell can contain either the homepage hero below it or the self-paced courses hero below it.

## Notes
- Only one instance is present.
- The submenu structure is a major part of the component, not a separate documented component in the inventory.
- Derived from the homepage inspection and the self-paced courses inspection.
