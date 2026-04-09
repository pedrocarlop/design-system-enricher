#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
SKILL_NAME="design-system-enricher"
SKILL_SRC="$SCRIPT_DIR/codex-skills/$SKILL_NAME"
SKILL_DEST_ROOT="$CODEX_HOME/skills"
SKILL_DEST="$SKILL_DEST_ROOT/$SKILL_NAME"

if [ ! -f "$SKILL_SRC/SKILL.md" ]; then
  echo "Error: packaged skill not found at $SKILL_SRC" >&2
  exit 1
fi

mkdir -p "$SKILL_DEST_ROOT"
rm -rf "$SKILL_DEST"
cp -R "$SKILL_SRC" "$SKILL_DEST"

echo
echo "Installed $SKILL_NAME to $SKILL_DEST"
echo "Restart Codex to pick up the new skill."
