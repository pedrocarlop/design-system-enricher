# Design System Audit Flow

## Source

- Run slug: `home`
- Source 1: local repo route `#/`
- Source 2: local repo route `#/courses/product-thinking`
- Goal: inspect the supplied pages as one audit flow and update the installed Material Web component docs

## Ordered pages

1. Page slug: `home`
   - Inspection: `Design system audit/home/pages/home/ui-inspection.md`
   - Screenshot: `Design system audit/home/pages/home/screenshots/home.png`
2. Page slug: `product-thinking`
   - Inspection: `Design system audit/home/pages/product-thinking/ui-inspection.md`
   - Screenshot: `Design system audit/home/pages/product-thinking/screenshots/product-thinking.png`

## Notes

- Both pages belong to one audit run because they were inspected together.
- Canonical matched component docs were written into `node_modules/@material/web/...`.
- No persistent `NEW.md` files remain after the merge.
