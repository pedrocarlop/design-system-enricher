# Design System Enricher

A Codex skill that looks at your screens — from Figma, live websites, or apps — takes screenshots, and automatically writes detailed component documentation for your design system.

Think of it as a design-system assistant that can **see** your UI and turn what it sees into structured, reusable knowledge.

---

## How It Works

```
┌─────────────────────────────────────┐
│                                     │
│   1. YOU GIVE IT A SOURCE           │
│                                     │
│   A Figma link, a website URL,      │
│   or an app screen.                 │
│                                     │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│                                     │
│   2. IT TAKES A SCREENSHOT          │
│                                     │
│   The skill captures a real         │
│   screenshot of the screen.         │
│   Everything it writes is based     │
│   on what it actually sees.         │
│                                     │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│                                     │
│   3. IT INSPECTS THE UI             │
│                                     │
│   It breaks down the screen into    │
│   individual components: buttons,   │
│   cards, nav bars, inputs, etc.     │
│   Each one gets a name, structure,  │
│   and usage notes.                  │
│                                     │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│                                     │
│   4. IT WRITES AN AUDIT REPORT      │
│                                     │
│   A structured inspection file      │
│   is saved for every screen,        │
│   along with the screenshot.        │
│                                     │
│   📁 Design system audit/           │
│    └─ your-run/                     │
│       ├─ flow.md                    │
│       └─ pages/                     │
│          └─ page-name/              │
│             ├─ ui-inspection.md     │
│             └─ screenshots/         │
│                └─ page-name.png     │
│                                     │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│                                     │
│   5. IT DOCUMENTS EACH COMPONENT    │
│                                     │
│   For every component it found,     │
│   it writes (or updates) a          │
│   README.md with variants, usage    │
│   guidelines, and screenshot        │
│   evidence.                         │
│                                     │
│   If your project already has a     │
│   design system installed, the      │
│   docs go directly into it.         │
│                                     │
└─────────────────────────────────────┘
```

---

## What Can You Inspect?

| Source type | What to provide | Example |
|---|---|---|
| **Live website** | A URL | `https://yoursite.com/pricing` |
| **Figma frame** | A Figma link to a frame | Paste the link from Figma |
| **Figma section** | A Figma link to a section with numbered frames (`01`, `02`, `03`...) | Paste the section link |
| **Web app (local)** | A local repo path | Add `platform=web` |
| **iOS app (local)** | A local repo path | Add `platform=ios` |
| **Android app (local)** | A local repo path | Add `platform=android` |
| **Previous inspection** | A `ui-inspection.md` file from a past run | Point to the file |

You can give it **multiple sources at once**. They will all be grouped into a single audit.

---

## Getting Started

### What you need

- **Codex** installed on your Mac
- The **Terminal** app (it comes pre-installed on every Mac)
- An internet connection

You do **not** need to know Git, coding, or the command line beyond copy-pasting.

---

### Step 1 — Open Terminal

Open **Finder**, go to **Applications** > **Utilities**, and double-click **Terminal**.

Or use Spotlight: press `Cmd + Space`, type `Terminal`, and press `Enter`.

You will see a window with a blinking cursor. This is where you paste the install command.

---

### Step 2 — Copy the install command

Select and copy this entire command (triple-click to select the whole block):

```bash
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo pedrocarlop/design-system-enricher \
  --path codex-skills/design-system-enricher
```

---

### Step 3 — Paste it into Terminal

Click inside the Terminal window and press `Cmd + V` to paste.

Then press `Enter`.

Wait a few seconds. When you see a success message and the blinking cursor comes back, the install is done.

---

### Step 4 — Restart Codex

Quit Codex completely and reopen it. This lets Codex detect the new skill.

---

### Step 5 — Verify the install

Open Codex and type:

```
Use $design-system-enricher
```

If Codex recognizes the skill name (you may see an autocomplete or no error), you are all set.

---

## How To Use It

Write a plain-language prompt in Codex with two things:

1. **The source(s)** you want inspected
2. **Your goal**

### Template

```
Use $design-system-enricher with these sources: <your links or paths>
and this goal: <what you want to achieve>.
```

### Examples

**Audit a single page:**

```
Use $design-system-enricher with these sources: https://mysite.com/pricing
and this goal: identify all reusable components on the pricing page.
```

**Audit multiple pages at once:**

```
Use $design-system-enricher with these sources:
https://mysite.com/pricing, https://mysite.com/signup
and this goal: audit reusable components and update the design system docs.
```

**Inspect a Figma section:**

```
Use $design-system-enricher with these sources:
<paste your Figma section link here>
and this goal: document all components in this flow.
```

---

## What It Produces

### Audit folder

Every run creates a folder under `Design system audit/` with:

| File | What it contains |
|---|---|
| `flow.md` | An overview of all pages inspected in this run |
| `ui-inspection.md` (per page) | A detailed breakdown of every component on that screen |
| `screenshots/` (per page) | The actual screenshot used as evidence |

### Component documentation

For each component found, the skill writes a `README.md` that includes:

- Component name and where the name comes from
- Where it appears across inspected screens
- Its internal structure
- Known variants
- Usage guidance
- Screenshot evidence

### Where the docs are saved

The skill is smart about where it puts component docs:

| Scenario | Destination |
|---|---|
| Your project has a design system installed and the component matches | Directly inside the design system |
| Your project has a design system but the component does not match anything | `unmatched/<component>/README.md` |
| Your project has no design system at all | `DS-system/<component>/README.md` |

---

## Important Rules

- **Screenshots are required.** The skill will not guess. If it cannot capture a screenshot of a screen, it stops and tells you.
- **Multiple pages = one audit.** When you give it several links at once, they are grouped together in a single audit run.
- **It respects your existing design system.** If your project already has one installed, matched components go inside it — not into a separate folder.

---

## For Maintainers

If you are developing this skill from a local copy of the repo, you can install it directly:

```bash
./install.sh
```

Or point to a custom Codex home for testing:

```bash
CODEX_HOME=/tmp/codex-test ./install.sh
```
