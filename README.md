# Design System Enricher

`$design-system-enricher` is a Codex skill that helps turn UI screens into structured design-system knowledge.

It can inspect websites, local app views, and Figma screens, then generate:

- `Flows/...` inspection files
- `DS-system/...` component knowledge files

Important: those folders are generated only when you use the skill in a project. They are not part of the installed skill anymore.

## What This Is For

Use this skill when you want Codex to:

- inspect a web page or app screen
- analyze a Figma frame or a numbered Figma section
- turn screenshots into reusable component knowledge
- build clean `ui-inspection.md` and `DS-system` documentation files

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

## If Something Goes Wrong

- If Terminal says the installer script cannot be found, update Codex and try again.
- If Codex does not recognize `$design-system-enricher`, fully quit Codex and reopen it.
- If you still get stuck, send the Terminal error message to the person maintaining this skill.

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
Use $design-system-enricher with these sources: https://example.com/pricing and this goal: document reusable components and create DS-system knowledge.
```

## Sources You Can Give It

- a live web URL
- a local repo view with `platform=web`
- a local repo view with `platform=ios`
- a local repo view with `platform=android`
- an existing `ui-inspection.md`
- a Figma frame URL
- a Figma section URL with numbered child frames such as `01`, `02`, `03`

## What The Skill Produces

When you run it inside a project, the skill creates output such as:

- `Flows/<screen-name>/ui-inspection.md`
- `Flows/<screen-name>/screenshots/<screen-name>.png`
- `DS-system/<component-name>/NEW.md`
- `DS-system/<component-name>/README.md`

## Important Rule

Every inspection needs a screenshot. If a screenshot cannot be captured, the skill should stop instead of guessing.

## Local Install For Maintainers

If you are working from a local checkout of this repository, you can install it with:

```bash
./install.sh
```

Or into a custom Codex home:

```bash
CODEX_HOME=/tmp/codex-test ./install.sh
```
