# Android Compose Inspection

Use this workflow for a repo-local Android screen implemented in Jetpack Compose.

## Scope

v1 supports Jetpack Compose only. XML layouts are out of scope.

## Purpose

Create a screenshot-grounded `ui-inspection.md` from a Compose screen while preserving file-to-screen provenance and Compose structure evidence.

## Capture workflow

1. Identify the Compose screen or preview entrypoint.
2. Capture a screenshot with a pluggable native backend.
3. Prefer an Appium-style inspector when available.
4. Fall back to Compose preview or emulator-backed capture when needed.
5. Do not continue if no screenshot can be produced.

## Extract

- screenshot path and provenance
- composable file path
- top-level composable hierarchy
- major layout containers such as `Column`, `Row`, `Box`, `LazyColumn`, `LazyRow`, and grids
- `Modifier` chains that materially affect layout and appearance
- `Lazy*` repetition structure
- preview configuration such as device, ui mode, and font scale when present
- semantics, `testTag`, and `contentDescription` when present
- repeated visual patterns backed by Compose structure

## Naming rules

Prefer names from:

1. explicit composable names
2. named repeated child composables
3. `testTag` or semantics labels when they clearly name a component
4. `unknown`

## Output requirements

Write:

- `Flows/<slug>/ui-inspection.md`
- `Flows/<slug>/screenshots/<slug>.png`

`## View metadata` must include:

- `Platform: android`
- `Source kind: repo-view`
- `Source path or URL`
- `Repo path`
- `Screenshot path`
- `Screenshot provenance`
- `Capture method`
- `Goal`
