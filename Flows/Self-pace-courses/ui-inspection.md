# UI Inspection

## Screenshot

![self-paced-courses](assets/self-paced-courses.png)

## Page purpose (inferred from UI)

The page is NN/G's self-paced course catalog. It lets visitors browse and filter courses, compare individual course cards, read reasons to choose the format, skim testimonials and FAQs, and jump to live online courses or newsletter signup.

## Structural breakdown (top to bottom)

1. Hidden consent UI: `div.cky-hide.cky-overlay`, `div.cky-hide.cky-consent-container.cky-banner-bottom[role="region"]`, and `div.cky-modal` exist before the visible page shell.
2. `div.skip` provides the skip-to-content link.
3. `div.banner-sales.paragraph-xs-400` is the top promotional bar with a CTA and dismiss button.
4. `div.svg-definitions` holds shared SVG symbols.
5. `header.banner-image.header-rebrand` contains the global navigation and the page hero.
6. `nav.nav-main.nav-main--rebrand.desktop` holds the desktop primary navigation, search, cart, and login controls.
7. `div.catalog-banner-header.ds-wrapper` contains the hero copy block and the self-paced advantages strip.
8. `main#main` contains the visible page content sections in this order: `section.clients-banner.ds-wrapper`, `section.selfpaced-search.course-filters#self-paced-search`, `section.ds-wrapper.reasons`, `section.ds-wrapper.ds-testimonials.gold`, `section.ds-wrapper.faqs`, and `section.ds-wrapper.live-online-promotion`.
9. `footer.footer-rebrand` contains newsletter signup, footer navigation, and the bottom legal/social area.
10. `button.back-to-top.ds-button-medium.ds-button-gray.label-m-500` is the floating return-to-top control placed after the footer.
11. Script and tracking nodes follow at the end of `body` and are not part of the visible UI.

## Component inventory

### Component: banner-sales

Source of name: class
Selectors: `div.banner-sales`
Where it appears: top of the page above the header
Structure: promo strip with `div.banner-sales__content`, a text line, a CTA link labeled "Find Your Course", and a dismiss `button`
Variants: none
Usage: sitewide promotional banner for self-paced training
Repetition: single instance

### Component: cky-consent-container

Source of name: class
Selectors: `div.cky-hide.cky-consent-container.cky-banner-bottom`
Where it appears: hidden body-level consent UI before the visible page shell
Structure: hidden consent region containing `div.cky-consent-bar`; paired with sibling hidden `div.cky-overlay` and `div.cky-modal`
Variants: `cky-hide`, `cky-banner-bottom`
Usage: cookie consent system
Repetition: single hidden instance

### Component: nav-main

Source of name: class
Selectors: `nav.nav-main.nav-main--rebrand.desktop`
Where it appears: inside the header at the top of the page
Structure: `div.ds-wrapper.header-content` split into `div.nav-menu` and `div.search-and-profile`; the nav menu holds the burger button, logo, and a top-level `ul` with 4 `li.has-subnav` groups
Variants: `nav-main--rebrand`, `desktop`
Usage: primary site navigation and grouped submenu navigation
Repetition: single instance; 4 top-level nav groups

### Component: search-rebrand

Source of name: class
Selectors: `form.search-rebrand[role="search"]`
Where it appears: right side of `nav-main`
Structure: search form with `div.search-rebrand__field`, text input, reset button, and submit button
Variants: none
Usage: site search entry point
Repetition: single instance

### Component: cart-and-profile

Source of name: class
Selectors: `div.cart-and-profile`
Where it appears: right side of `nav-main`, next to search
Structure: `div.cart.empty` with cart status and `div.login` with the log-in link
Variants: `empty`
Usage: cart status and account access
Repetition: single instance

### Component: catalog-banner-header

Source of name: class
Selectors: `div.catalog-banner-header.ds-wrapper`
Where it appears: hero area directly under the navigation
Structure: `div.content` plus `section.selfpaced-advantages`; the content side contains hero copy and a picture, while the right-hand strip presents four advantage cards
Variants: `ds-wrapper`
Usage: hero layout for the self-paced course landing page
Repetition: single instance

### Component: information

Source of name: class
Selectors: `header .catalog-banner-header .information`
Where it appears: left side of the hero inside `catalog-banner-header`
Structure: `h1.h3-500`, `h2.subtitle.h1-500`, `p.description.subhead-m-300`, and CTA link `a.button-small.button-fill.button-darkmaroon-white.label-xl-500`
Variants: none
Usage: page title, value proposition, and primary CTA
Repetition: single instance

### Component: selfpaced-advantages

Source of name: class
Selectors: `header .selfpaced-advantages`
Where it appears: right side of the hero under the main copy block
Structure: a four-item strip of `div.selfpaced-advantage` cards
Variants: none
Usage: explains the core value of the self-paced format
Repetition: single container with 4 repeated child items

### Component: selfpaced-advantage

Source of name: class
Selectors: `.selfpaced-advantages > div.selfpaced-advantage`
Where it appears: inside the hero advantage strip
Structure: image, `p.title`, and supporting paragraph text
Variants: none
Usage: short benefit statements for the page hero
Repetition: 4 items

### Component: selfpaced-search

Source of name: class
Selectors: `section.selfpaced-search.course-filters#self-paced-search`
Where it appears: first section in `main#main` after the client-logo banner
Structure: `div.ds-wrapper` containing `h2.h2-500`, a filter header, `ul.course-cards.selfpaced-cards`, and a hidden `div.no-results.hidden`
Variants: none
Usage: course catalog and filtering shell
Repetition: single instance

### Component: select-filter

Source of name: class
Selectors: `.select-filter.default-filter`
Where it appears: inside the `selfpaced-search` filter header
Structure: each filter is a `div.select-filter.default-filter` with `label.label-large` and a native `select`
Variants: `default-filter`
Usage: dropdown filters for topics, difficulty, prices, and durations
Repetition: 4 filters

### Component: course-card

Source of name: class
Selectors: `.course-card.clickable-card`
Where it appears: in both `ul.course-cards.selfpaced-cards` and `ul.course-cards.live-online-cards`
Structure: repeated `li` with an image and `div.content`; inside `div.content`, the self-paced cards use `div.card-info`, `a.no-decoration`, `p.paragraph-s-300`, and `div.card-footer`, while the live-course cards use the same shell with a category label, title, description, and a simpler footer
Variants: `lavender`, `gold`, `salmon`, `turquoise`, `interaction`, `ai`, `research`, `ready`
Usage: individual course previews with duration, lessons, title, summary, and price or delivery mode
Repetition: 21 total items, with 18 self-paced cards and 3 live online cards

### Component: reasons

Source of name: class
Selectors: `section.ds-wrapper.reasons`
Where it appears: third section in `main#main`
Structure: section heading plus `section.selfpaced-reasons.ds-selling-cards`
Variants: `ds-wrapper`
Usage: introduces the reasons to choose self-paced courses
Repetition: single instance

### Component: selfpaced-reason

Source of name: class
Selectors: `.selfpaced-reasons > div.selfpaced-reason`
Where it appears: inside the `reasons` section
Structure: image, `p.title`, and supporting paragraph text
Variants: none
Usage: four benefit cards explaining depth, flexibility, credibility, and reuse
Repetition: 4 items

### Component: ds-testimonials

Source of name: class
Selectors: `section.ds-wrapper.ds-testimonials.gold`
Where it appears: fourth section in `main#main`
Structure: a `div.slider` with a heading, arrow controls, and a `ul.testimonials-primary`
Variants: `gold`
Usage: social proof and course feedback
Repetition: single instance

### Component: testimonial-card

Source of name: class
Selectors: `.testimonial-card.testimonial-card-text`
Where it appears: inside `ul.testimonials-primary`
Structure: `figure` with `blockquote` and `figcaption`
Variants: `testimonial-card-text`
Usage: quoted learner testimonial
Repetition: 6 items

### Component: faqs

Source of name: class
Selectors: `section.ds-wrapper.faqs`
Where it appears: fifth section in `main#main`
Structure: section heading and a `div.accordion.selfpaced-accordion.faq-accordion`
Variants: `ds-wrapper`
Usage: answers common buying and access questions
Repetition: single instance

### Component: accordion-item

Source of name: class
Selectors: `.accordion-item`
Where it appears: inside the FAQ accordion
Structure: `details` with `summary.label-xl-600`, `div.divider`, and `div.content`
Variants: none
Usage: expandable FAQ row
Repetition: 10 items

### Component: live-online-promotion

Source of name: class
Selectors: `section.ds-wrapper.live-online-promotion`
Where it appears: last content section in `main#main`
Structure: `div.ds-courses-banner.live-online-courses-banner.ds-wrapper` with promo copy and `ul.course-cards.live-online-cards`
Variants: none
Usage: cross-promotion to live online courses
Repetition: single instance

### Component: ds-courses-banner

Source of name: class
Selectors: `section.live-online-promotion > div.ds-courses-banner.live-online-courses-banner.ds-wrapper`
Where it appears: inside the live-course promo section
Structure: `div.informations` with heading, copy, and CTA, plus the live course card list
Variants: `live-online-courses-banner`
Usage: supports the live-course upsell with a matching course list
Repetition: single instance

### Component: footer-rebrand

Source of name: class
Selectors: `footer.footer-rebrand`
Where it appears: after the main content
Structure: `section.top-footer.ds-wrapper`, `section.navigation.ds-wrapper`, and `div.bottom-footer.ds-wrapper`
Variants: none
Usage: newsletter signup, navigation, and legal/social links
Repetition: single instance

### Component: newsletter

Source of name: class
Selectors: `footer .newsletter`
Where it appears: inside `footer .top-footer`
Structure: `div.newsletter-text` with heading and paragraph, plus `form.form-field.form-validated.subscribe-form`
Variants: none
Usage: email newsletter signup
Repetition: single instance

### Component: links-list

Source of name: class
Selectors: `footer .links-list`
Where it appears: inside the footer navigation section
Structure: `div.links-list` containing a `ul` with 4 top-level column groups, each a `li` with a heading and nested `ul`
Variants: none
Usage: footer navigation groups for courses, consulting, help, and company
Repetition: 4 top-level column groups

### Component: bottom-footer

Source of name: class
Selectors: `footer .bottom-footer.ds-wrapper`
Where it appears: last footer row
Structure: `div.copyright-rebrand` with copyright and legal links, plus `div.follow-us` with social links
Variants: none
Usage: legal text and social navigation
Repetition: single instance

### Component: back-to-top

Source of name: class
Selectors: `button.back-to-top.ds-button-medium.ds-button-gray.label-m-500`
Where it appears: floating control after the footer
Structure: single button labeled "Back to Top"
Variants: `ds-button-medium`, `ds-button-gray`
Usage: scrolls the user back to the top of the page
Repetition: single instance

## Repeated patterns

- `li.has-subnav` repeats 4 times in `nav-main`, with 4 matching `ul.submenu` groups.
- `div.selfpaced-advantage` repeats 4 times in the hero advantage strip.
- `div.select-filter.default-filter` repeats 4 times in the course filter header.
- `li.course-card.clickable-card` repeats 18 times in the self-paced catalog and 3 times in the live-course promo.
- `div.selfpaced-reason` repeats 4 times in the reasons section.
- `figure.testimonial-card.testimonial-card-text` repeats 6 times in the testimonials slider.
- `details.accordion-item` repeats 10 times in the FAQ accordion.
- The footer navigation uses 4 column groups inside `footer .links-list ul`.

## Layout observations

- The page uses a strong split-hero layout: copy on the left, illustration and benefit strip on the right.
- `ds-wrapper` is used across sections to keep content aligned while the visual treatment changes by section.
- The self-paced catalog is the densest area on the page, with filters above a large grid of uniform course cards.
- The page mixes native semantics and custom classes well: `select` controls, `details/summary` FAQs, `figure` testimonials, and list-based card grids.
- The testimonials section uses a distinct gold background and slider controls, which separates it from the more neutral catalog sections.
- The footer is three-part and ends with legal links plus social links, with a floating back-to-top button after the footer.

## Notes

- The screenshot in `assets/self-paced-courses.png` captures the visible top of the page; the rest of the report comes from DOM inspection.
- Hidden CookieYes markup is present in the body but is suppressed with `cky-hide`.
- `div.no-results.hidden` is present in the course filter section, but the default state shows the full course catalog.
- No design-system component names were inferred from visual similarity alone; all names in this report come from DOM classes, attributes, or repeated structural signals.
