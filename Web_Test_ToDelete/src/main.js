import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/chips/assist-chip.js';
import '@material/web/divider/divider.js';
import '@material/web/labs/card/elevated-card.js';
import {styles as typescaleStyles} from '@material/web/typography/md-typescale-styles.js';
import './style.css';

document.adoptedStyleSheets = [...document.adoptedStyleSheets, typescaleStyles.styleSheet];

const app = document.querySelector('#app');

const courses = [
  {
    slug: 'ui-systems',
    title: 'UI Systems for Shipping Teams',
    tagline: 'Turn scattered interface ideas into a reusable product language.',
    level: 'Intermediate',
    duration: '4 weeks',
    format: 'Live cohort',
    description:
      'A practical placeholder course for designers who want to move from polished screens to scalable systems. Students learn how to structure design decisions, create reusable foundations, and document patterns that help product teams ship faster.',
    outcomes: [
      'Build a UI system foundation that aligns design, content, and product decisions.',
      'Create repeatable patterns for page structure, hierarchy, and component reuse.',
      'Present design systems work in a way product partners can understand and support.',
    ],
    audience: 'Product designers and early design leads who want more consistency across launches.',
    heroLabel: 'System thinking',
    enrolUrl: 'https://example.com/enrol/ui-systems',
  },
  {
    slug: 'product-thinking',
    title: 'Product Thinking for Designers',
    tagline: 'Make stronger design decisions by tying every screen to a product outcome.',
    level: 'Beginner to intermediate',
    duration: '3 weeks',
    format: 'Recorded + Q&A',
    description:
      'This placeholder course helps designers connect user insight, business context, and interaction design. It focuses on framing problems, prioritizing tradeoffs, and telling a clearer story about why a design direction matters.',
    outcomes: [
      'Translate vague requests into focused product opportunities and measurable bets.',
      'Use lightweight frameworks to balance user value, feasibility, and business goals.',
      'Communicate design rationale with more confidence in reviews and planning sessions.',
    ],
    audience: 'Designers who want to contribute more strategically in product conversations.',
    heroLabel: 'Decision making',
    enrolUrl: 'https://example.com/enrol/product-thinking',
  },
  {
    slug: 'design-leadership',
    title: 'Design Leadership in Practice',
    tagline: 'Lead projects, critique work well, and create momentum without formal authority.',
    level: 'Advanced',
    duration: '6 weeks',
    format: 'Workshop series',
    description:
      'A placeholder leadership program for senior designers growing into mentorship and cross-functional influence. The material covers feedback systems, decision rituals, and healthier collaboration patterns for teams under pressure.',
    outcomes: [
      'Run design critiques and working sessions that make decisions clearer and faster.',
      'Coach teammates with feedback that is specific, actionable, and confidence-building.',
      'Design team rituals that support quality without creating unnecessary process.',
    ],
    audience: 'Senior product designers, staff designers, and new leads shaping team culture.',
    heroLabel: 'Leadership craft',
    enrolUrl: 'https://example.com/enrol/design-leadership',
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function courseCard(course) {
  return `
    <md-elevated-card class="course-card">
      <div class="course-visual course-visual-${escapeHtml(course.slug)}">
        <p class="course-visual-label md-typescale-label-large">${escapeHtml(course.heroLabel)}</p>
        <h3 class="course-visual-title md-typescale-headline-small">${escapeHtml(course.title)}</h3>
      </div>

      <div class="course-card-body">
        <div class="course-meta">
          <md-assist-chip label="${escapeHtml(course.level)}"></md-assist-chip>
          <md-assist-chip label="${escapeHtml(course.duration)}"></md-assist-chip>
          <md-assist-chip label="${escapeHtml(course.format)}"></md-assist-chip>
        </div>

        <p class="md-typescale-title-large course-card-title">${escapeHtml(course.title)}</p>
        <p class="md-typescale-body-large course-card-copy">${escapeHtml(course.tagline)}</p>

        <div class="course-card-footer">
          <span class="md-typescale-body-medium">${escapeHtml(course.audience)}</span>
          <a href="#/courses/${escapeHtml(course.slug)}" class="button-link">
            <md-filled-button>View course</md-filled-button>
          </a>
        </div>
      </div>
    </md-elevated-card>
  `;
}

function homePage() {
  return `
    <div class="page-shell">
      <header class="site-header">
        <a href="#/" class="brand-lockup">
          <span class="brand-mark">PC</span>
          <span class="brand-copy">
            <span class="md-typescale-title-medium">Pedro Carrasco</span>
            <span class="md-typescale-body-medium">Product designer teaching online courses</span>
          </span>
        </a>

        <nav class="site-actions" aria-label="Primary">
          <a href="mailto:pedro@example.com" class="button-link">
            <md-filled-tonal-button>Contact Pedro</md-filled-tonal-button>
          </a>
        </nav>
      </header>

      <main>
        <section class="hero-section">
          <div class="hero-copy-block">
            <p class="hero-eyebrow md-typescale-title-medium">Online courses for thoughtful digital products</p>
            <h1 class="md-typescale-display-medium hero-title">Design sharper products, systems, and team rituals.</h1>
            <p class="md-typescale-body-large hero-description">
              Pedro Carrasco is a product designer helping teams turn abstract ideas into
              strong interfaces, better decisions, and more collaborative design practice.
              This demo site showcases three placeholder courses built entirely with
              Material Web components already installed in the repo.
            </p>

            <div class="hero-actions">
              <a href="mailto:pedro@example.com" class="button-link">
                <md-filled-button>Say hello</md-filled-button>
              </a>
              <a href="#courses" class="button-link">
                <md-outlined-button>Browse courses</md-outlined-button>
              </a>
            </div>
          </div>

          <div class="hero-panel">
            <div class="hero-panel-art">
              <span class="hero-orb hero-orb-large"></span>
              <span class="hero-orb hero-orb-small"></span>
            </div>

            <div class="hero-panel-content">
              <p class="md-typescale-title-large">Teaching focus</p>
              <p class="md-typescale-body-large">
                Product thinking, UI systems, and leadership habits for design teams that
                want to ship with more clarity.
              </p>

              <div class="hero-stats">
                <div>
                  <span class="md-typescale-headline-medium">3</span>
                  <span class="md-typescale-body-medium">available courses</span>
                </div>
                <div>
                  <span class="md-typescale-headline-medium">100%</span>
                  <span class="md-typescale-body-medium">placeholder-friendly demo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about-section surface-panel">
          <div class="section-heading">
            <p class="md-typescale-title-medium">About Pedro</p>
            <h2 class="md-typescale-headline-medium">A calm, strategic approach to product design education.</h2>
          </div>

          <div class="about-grid">
            <p class="md-typescale-body-large about-copy">
              Pedro teaches designers how to improve the quality of their decisions, not
              just the look of their screens. The placeholder copy here positions him as a
              mentor for teams that care about craft, collaboration, and systems that scale.
            </p>

            <div class="about-chips" aria-label="Highlights">
              <md-assist-chip label="Product strategy"></md-assist-chip>
              <md-assist-chip label="Design systems"></md-assist-chip>
              <md-assist-chip label="Critique facilitation"></md-assist-chip>
              <md-assist-chip label="Mentorship"></md-assist-chip>
            </div>
          </div>
        </section>

        <section class="courses-section" id="courses">
          <div class="section-heading section-heading-inline">
            <div>
              <p class="md-typescale-title-medium">Courses</p>
              <h2 class="md-typescale-headline-medium">Choose a course and open its dedicated page.</h2>
            </div>
            <p class="md-typescale-body-large section-copy">
              Each card routes to its own course view with a longer description and a placeholder enrollment CTA.
            </p>
          </div>

          <div class="course-grid">
            ${courses.map(courseCard).join('')}
          </div>
        </section>
      </main>
    </div>
  `;
}

function detailPage(course) {
  const outcomes = course.outcomes
    .map(
      (outcome) => `
        <li class="outcome-item">
          <span class="outcome-bullet"></span>
          <span class="md-typescale-body-large">${escapeHtml(outcome)}</span>
        </li>
      `,
    )
    .join('');

  return `
    <div class="page-shell">
      <header class="site-header detail-header">
        <a href="#/" class="button-link">
          <md-text-button>Back to homepage</md-text-button>
        </a>
        <a href="mailto:pedro@example.com" class="button-link">
          <md-filled-tonal-button>Contact Pedro</md-filled-tonal-button>
        </a>
      </header>

      <main class="detail-layout">
        <section class="detail-hero surface-panel">
          <div class="detail-copy">
            <p class="hero-eyebrow md-typescale-title-medium">${escapeHtml(course.heroLabel)}</p>
            <h1 class="md-typescale-display-small detail-title">${escapeHtml(course.title)}</h1>
            <p class="md-typescale-body-large detail-description">${escapeHtml(course.description)}</p>

            <div class="course-meta detail-meta">
              <md-assist-chip label="${escapeHtml(course.level)}"></md-assist-chip>
              <md-assist-chip label="${escapeHtml(course.duration)}"></md-assist-chip>
              <md-assist-chip label="${escapeHtml(course.format)}"></md-assist-chip>
            </div>
          </div>

          <div class="detail-visual course-visual-${escapeHtml(course.slug)}">
            <div class="detail-visual-inner">
              <span class="md-typescale-label-large">For</span>
              <p class="md-typescale-headline-small">${escapeHtml(course.audience)}</p>
            </div>
          </div>
        </section>

        <section class="detail-content">
          <div class="surface-panel detail-panel">
            <div class="section-heading">
              <p class="md-typescale-title-medium">Course overview</p>
              <h2 class="md-typescale-headline-small">${escapeHtml(course.tagline)}</h2>
            </div>
            <p class="md-typescale-body-large">
              This placeholder syllabus page gives each course its own destination while
              keeping the implementation lightweight. Replace this content later with real
              modules, schedule details, pricing, student outcomes, or testimonials.
            </p>
          </div>

          <div class="surface-panel detail-panel">
            <div class="section-heading">
              <p class="md-typescale-title-medium">What you'll learn</p>
              <h2 class="md-typescale-headline-small">Three practical outcomes for the course.</h2>
            </div>
            <ul class="outcomes-list">
              ${outcomes}
            </ul>
          </div>
        </section>

        <section class="enrol-section surface-panel">
          <div>
            <p class="md-typescale-title-medium">Enrollment</p>
            <h2 class="md-typescale-headline-small">Reserve a placeholder seat for ${escapeHtml(course.title)}.</h2>
          </div>

          <div class="enrol-actions">
            <a href="${escapeHtml(course.enrolUrl)}" class="button-link" target="_blank" rel="noreferrer">
              <md-filled-button>Enroll now</md-filled-button>
            </a>
            <a href="#/" class="button-link">
              <md-outlined-button>View all courses</md-outlined-button>
            </a>
          </div>
        </section>
      </main>
    </div>
  `;
}

function getRoute() {
  const hash = window.location.hash || '#/';

  if (hash === '#/' || hash === '#') {
    return {type: 'home'};
  }

  const match = hash.match(/^#\/courses\/([^/]+)$/);
  if (!match) {
    return {type: 'home'};
  }

  const course = courses.find((entry) => entry.slug === decodeURIComponent(match[1]));
  if (!course) {
    return {type: 'home'};
  }

  return {type: 'course', course};
}

function renderApp() {
  const route = getRoute();

  if (route.type === 'course') {
    document.title = `${route.course.title} | Pedro Carrasco Courses`;
    app.innerHTML = detailPage(route.course);
    return;
  }

  document.title = 'Pedro Carrasco | Product Design Courses';
  app.innerHTML = homePage();
}

window.addEventListener('hashchange', renderApp);
renderApp();
