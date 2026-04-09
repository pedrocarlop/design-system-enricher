# Design System Enricher

`$design-system-enricher` is a Codex skill that turns screenshot-grounded UI evidence into:

- `Design system audit/...` inspection artifacts
- canonical component `README.md` files written into the resolved design-system destination

Important: these folders are generated only when you use the skill in a project. They are not part of the installed skill itself.

## What This Is For

Use this skill when you want Codex to:

- inspect a web page or app screen
- analyze a Figma frame or a numbered Figma section
- group multiple supplied pages into one audit flow
- turn screenshots into reusable component knowledge
- write component docs into the actual installed design system when the repo already has one

## Output Model

Each run produces one audit flow:

- `Design system audit/<run-slug>/flow.md`
- `Design system audit/<run-slug>/pages/<page-slug>/ui-inspection.md`
- `Design system audit/<run-slug>/pages/<page-slug>/screenshots/<page-slug>.png`

If you provide 2 links in one request, both pages belong to the same `<run-slug>`.

Component docs are written to one of these destinations:

- installed DS package or repo-local DS target when an authoritative mapping exists
- `unmatched/<component-name>/README.md` when the repo has a DS kit but that component cannot be matched
- `DS-system/<component-name>/README.md` only when no DS kit can be resolved for the repo

The workflow must not leave both `NEW.md` and `README.md` after a successful run. `README.md` is the canonical output.

## Before You Start

You need:

1. Codex already installed on your computer
2. The Terminal app on your Mac
3. An internet connection

You do not need to know Git or coding. You only need to copy and paste one command.

## Install From GitHub

This is the recommended option for designers and other non-technical users.

### Step 1: Open Terminal

Open the macOS `Terminal` app.

### Step 2: Copy and paste this command

```bash
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo pedrocarlop/design-system-enricher \
  --path codex-skills/design-system-enricher
```

### Step 3: Press `Enter`

Codex will install the skill into your personal skills folder:

```text
~/.codex/skills/design-system-enricher
```

### Step 4: Restart Codex

Close Codex and open it again. This refreshes the skill list.

### Step 5: Check that it worked

In Codex, start a prompt with:

```text
Use $design-system-enricher
```

If Codex recognizes the skill name, the install worked.

## How To Use It

Write your request in plain language and include:

1. the source or sources you want inspected
2. the goal

Use this template:

```text
Use $design-system-enricher with these sources: <urls/paths/figma-links> and this goal: <goal>.
```

### Example

```text
Use $design-system-enricher with these sources: https://example.com/pricing, https://example.com/signup and this goal: audit reusable components and update the installed design system docs.
```

## Sources You Can Give It

- a live web URL
- a local repo view with `platform=web`
- a local repo view with `platform=ios`
- a local repo view with `platform=android`
- an existing `ui-inspection.md`
- a Figma frame URL
- a Figma section URL with numbered child frames such as `01`, `02`, `03`

## Important Rules

- Every inspection needs a screenshot. If a screenshot cannot be captured, the skill should stop instead of guessing.
- Multiple supplied pages in one request belong to one audit flow.
- If the repo already has a real design system installed, matched components should be documented inside that system instead of a parallel `DS-system/` folder.
- `unmatched/` is only for components that do not map to the installed DS kit.
- `DS-system/` is a fallback for repos that do not have a resolvable DS kit.

## Local Install For Maintainers

If you are working from a local checkout of this repository, you can install it with:

```bash
./install.sh
```

Or into a custom Codex home:

```bash
CODEX_HOME=/tmp/codex-test ./install.sh
```
