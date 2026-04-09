# search-rebrand

## What this component is
The site search form placed in the right side of the main navigation.

## Where it is used
- On the right side of `nav-main`.

## How it is used
- It provides search input and search controls within the header navigation area.
- It includes both reset and submit actions.
- In context, it works as a utility element rather than a standalone content block.
- In the self-paced page inspection it is a `form[role="search"]`.

## Structure
- Root element: `form.search-rebrand`
- Marked as `form[role="search"]`
- Field wrapper: `div.search-rebrand__field`
- Includes a visually hidden `label`
- Input wrapper: `div.search-rebrand__input`
- Reset control: `button.reset-button.empty[type="reset"]`
- Submit control: `button.search-rebrand__submit[type="submit"]`
- The self-paced page inspection also shows the search form nested inside `nav-main` with the same control set.

## Variants
None explicitly defined

## Layout patterns
- Inline utility inside `nav-main`.
- Grouped with account/cart controls on the right side of the header.
- Not repeated.
- Single header utility form.

## Relationships with other components
- It appears inside `nav-main`.
- It is grouped next to `cart-and-profile`.
- It follows the left-side navigation content within the same header bar.
- It sits alongside the visible search toggle button in the self-paced page header.

## Usage rules (inferred)
- Used when site search needs to be available from the global header.
- Used as a navigation utility, not as a content-section search module.
- Its role is search entry and search control handling.
- Used once in the header.

## Content patterns
- Search label, input area, reset button, and submit button.
- Functional controls rather than descriptive marketing content.

## Notes
- Only one instance is present in the inspected UI.
- Derived from the homepage inspection and the self-paced courses inspection.
