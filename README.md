# Design System Enricher

Repository for the installable Codex skill `$design-system-enricher`.

The packaged skill lives at [codex-skills/design-system-enricher/SKILL.md](/Users/pedrocarrascolopezbrea/Projects/Design%20system%20enricher/codex-skills/design-system-enricher/SKILL.md) and turns screenshot-grounded UI evidence from web, native, and Figma sources into `Flows/...` inspection docs and `DS-system/...` component knowledge.

## Install

Install from GitHub into your Codex skills directory:

```bash
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo pedrocarlop/design-system-enricher \
  --path codex-skills/design-system-enricher
```

Install locally from this checkout into `~/.codex/skills/design-system-enricher`:

```bash
./install.sh
```

Install locally into a custom Codex home:

```bash
CODEX_HOME=/tmp/codex-test ./install.sh
```

Restart Codex after install so the slash menu picks up the new skill.

## Use

Use the skill explicitly:

```text
Use $design-system-enricher with these sources: <urls/paths/figma-links> and this goal: <goal>.
```

Supported source types:

- live web URL
- local repo view with `platform=web`
- local repo view with `platform=ios`
- local repo view with `platform=android`
- existing `ui-inspection.md`
- Figma frame URL
- Figma section URL with numbered child frames

Screenshot evidence is mandatory for every source type.
