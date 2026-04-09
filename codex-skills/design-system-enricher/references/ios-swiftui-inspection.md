# iOS SwiftUI Inspection

Use this workflow for a repo-local iOS screen implemented in SwiftUI.

## Scope

v1 supports SwiftUI only. UIKit is out of scope.

## Purpose

Create a screenshot-grounded `ui-inspection.md` from a SwiftUI screen while preserving file-to-screen provenance and SwiftUI structure evidence.

## Capture workflow

1. Identify the SwiftUI screen or preview entrypoint.
2. Capture a screenshot with a pluggable native backend.
3. Prefer an Appium-style inspector when available.
4. Fall back to preview or XCTest-backed screenshot capture when needed.
5. Do not continue if no screenshot can be produced.

## Extract

- screenshot path and provenance
- SwiftUI screen or preview file path
- top-level `View` hierarchy
- major layout containers such as `VStack`, `HStack`, `ZStack`, `ScrollView`, `NavigationStack`, and `List`
- `ForEach` repetition structure
- layout-affecting modifiers
- preview traits such as device, color scheme, locale, and size category when present
- accessibility identifiers and labels when present
- repeated visual patterns backed by SwiftUI structure

## Naming rules

Prefer names from:

1. explicit SwiftUI view type names
2. named repeated child views
3. accessibility identifiers when they clearly name a component
4. `unknown`

## Output requirements

Write:

- `Flows/<slug>/ui-inspection.md`
- `Flows/<slug>/screenshots/<slug>.png`

`## View metadata` must include:

- `Platform: ios`
- `Source kind: repo-view`
- `Source path or URL`
- `Repo path`
- `Screenshot path`
- `Screenshot provenance`
- `Capture method`
- `Goal`

Include preview and device notes in `## Notes` when they materially affect layout.
