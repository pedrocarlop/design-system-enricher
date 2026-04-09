# Pre-Flight Setup

Verify that all tools needed for the current invocation are available before any inspection workflow begins. Auto-fix what can be fixed. Guide the designer through the rest.

## When to run

Always. This check runs after source classification and before the first inspection workflow.

## Dependency map

| Source type | Required capabilities |
|---|---|
| All sources | File system write access |
| Figma URL | Figma MCP tools |
| Live web URL | Browser automation |
| Local repo with `platform=web` | Browser automation + local dev server |
| Local repo with `platform=ios` | Native iOS inspector |
| Local repo with `platform=android` | Native Android inspector |
| Existing `ui-inspection.md` | File system read; browser automation only if web-backed evidence has reachable URLs |

## Procedure

### Step 1 — Identify required capabilities

From the user prompt, classify each source using the same routing rules in `SKILL.md`. Build a deduplicated set of required capabilities from the dependency map above.

### Step 2 — Run probes

Check file system write access first (it is universal). Then check each remaining capability. Run independent probes in parallel when possible.

### Step 3 — Present a consolidated checklist

Show the designer a clear status report:

```
Setup check:
[pass] File system access
[pass] Browser automation
[NEEDS SETUP] Figma tools — not connected
```

### Step 4 — If all pass, proceed immediately

Print "All tools are ready. Starting inspection." and continue to source routing. Do not delay.

### Step 5 — If any fail, remediate one at a time

For each failing capability:

1. Attempt the auto-fix described below.
2. If auto-fix succeeds, re-probe and mark as pass.
3. If auto-fix is not possible, present the manual remediation instructions to the designer.
4. Wait for the designer to confirm they have completed the step.
5. Re-probe to verify.

### Step 6 — Final consolidated check

After all failures are addressed, re-run the full checklist once. Proceed only when every required capability shows pass.

### Step 7 — Handle unresolvable dependencies

If a dependency cannot be resolved and the designer cannot or does not want to configure it right now, offer partial execution:

> I can proceed with the web URL inspections now and skip the Figma source. Would you like to continue with what is available, or would you prefer to set up Figma first?

Never silently skip a source. Always get explicit confirmation before proceeding with a subset.

---

## Detection probes and remediation

### 1. File system write access

**Probe:** Attempt to create a directory named `.preflight-check/` in the project root, then immediately delete it.

**Success:** Directory creates and deletes without error.

**Failure:** Permission denied or sandbox restriction.

**Auto-fix:** Approve the Codex permission prompt when it appears. Codex may show a permission dialog automatically.

**Manual remediation:**

> I need write access to create folders and files in this project. Please do the following:
>
> 1. Open **Codex Settings**.
> 2. Go to the **Permissions** or **File Access** section.
> 3. Grant **full file system access** for this project directory.
> 4. Let me know when you are done and I will check again.

---

### 2. Figma MCP tools

**Probe:** Call `whoami` from the Figma MCP server. This is the lightest possible Figma call — it returns the authenticated user without touching any design file.

**Success:** Returns user data without error.

**Failure (tool not found):** Figma MCP server is not connected to Codex.

**Failure (auth error):** Server is connected but the token is invalid or expired.

**Auto-fix:** Not available for initial setup. For expired tokens, the designer must generate a new one.

**Manual remediation (tool not found):**

> Figma tools are not connected to Codex. To set them up:
>
> 1. Open your **Figma** account in a web browser.
> 2. Click your **profile icon** in the top-left corner.
> 3. Go to **Settings**.
> 4. Scroll down to **Personal Access Tokens**.
> 5. Click **Create a new personal access token**. Give it a descriptive name like "Codex".
> 6. Copy the token (you will only see it once).
> 7. Open **Codex Settings** and go to **MCP Servers**.
> 8. Add the **Figma MCP server** and paste the token when prompted.
> 9. Let me know when you are done and I will check again.

**Manual remediation (auth error):**

> Your Figma connection is set up but the token may have expired or been revoked. To fix this:
>
> 1. Open **Figma** in your browser and go to **Settings** → **Personal Access Tokens**.
> 2. Create a **new token** (or regenerate the existing one).
> 3. Copy the new token.
> 4. Open **Codex Settings** → **MCP Servers** → **Figma** and update the token.
> 5. Let me know when you are done and I will check again.

---

### 3. Browser automation

**Probe:** Attempt to open a lightweight page using any available browser MCP tool. Try these in order until one responds:

1. Claude Preview (`preview_start` or equivalent)
2. Claude in Chrome (`navigate` or equivalent)
3. Control Chrome (`open_url` or equivalent)

Use a minimal page target such as `data:text/html,<h1>ok</h1>` or `about:blank`.

**Success:** Page loads without error.

**Failure:** No browser MCP tool is available or the browser fails to launch.

**Auto-fix:** Not available — browser MCP must be configured by the designer.

**Manual remediation:**

> Browser automation is not available. I need it to open web pages and capture screenshots. To set it up:
>
> 1. Open **Codex Settings** and go to **MCP Servers**.
> 2. Enable a **browser MCP server** (such as Claude Preview, Claude in Chrome, or Control Chrome).
> 3. Follow any setup prompts that appear (some browser tools require a browser extension).
> 4. Let me know when you are done and I will check again.

---

### 4. Local dev server

Only checked when the source is a local repo view with `platform=web`.

**Probe:**

1. Look for project configuration files to identify the expected dev server command and port:
   - `package.json` → check `scripts.dev`, `scripts.start`, or `scripts.serve`
   - `vite.config.*` → default port 5173
   - `next.config.*` → default port 3000
   - `angular.json` → default port 4200
2. Attempt to load `http://localhost:<port>` using the available browser tool. Even a 404 response means the server is running.

**Success:** The local URL responds (any HTTP status).

**Failure:** Connection refused — the server is not running.

**Auto-fix:** If the start command can be identified from `package.json`, offer to run it:

> I found the dev server command in your project: `npm run dev`. Would you like me to start it for you?

If the designer agrees, run the command in a background process and re-probe after a few seconds.

**Manual remediation:**

> The local development server is not running. I need it to render the web view and capture a screenshot. Please do the following:
>
> 1. Open a **separate terminal window**.
> 2. Navigate to the project directory.
> 3. Start the dev server. Based on your project, the command is likely:
>    - `npm run dev` or `yarn dev` or `pnpm dev`
> 4. Wait until you see a message like "ready on localhost:3000" or similar.
> 5. Let me know when it is running and I will check again.

---

### 5. iOS native inspector

Only checked when the source is a local repo view with `platform=ios`.

**Probe:** Run `xcodebuild -version` to check for Xcode, or `xcrun simctl list` to check for Simulator availability. Alternatively check for `appium` in PATH.

**Success:** At least one of the commands responds.

**Failure:** None of the tools are available.

**Auto-fix:** Not available — Xcode or Appium must be installed by the designer.

**Manual remediation:**

> iOS screenshot capture requires Xcode with Simulator or Appium. To set up:
>
> **Option A — Xcode (recommended for designers):**
> 1. Install **Xcode** from the Mac App Store.
> 2. Open Xcode once and accept the license agreement.
> 3. Go to **Xcode** → **Settings** → **Platforms** and install the iOS Simulator.
>
> **Option B — Appium (for advanced users):**
> 1. Install Node.js if not already installed.
> 2. Run `npm install -g appium` in Terminal.
>
> Let me know when you are done and I will check again.

---

### 6. Android native inspector

Only checked when the source is a local repo view with `platform=android`.

**Probe:** Run `adb devices` to check for Android SDK tools, or `emulator -list-avds` to check for available emulators.

**Success:** At least one of the commands responds.

**Failure:** Android SDK tools are not available.

**Auto-fix:** Not available — Android Studio must be installed by the designer.

**Manual remediation:**

> Android screenshot capture requires Android Studio with an emulator or a connected device. To set up:
>
> 1. Download and install **Android Studio** from developer.android.com/studio.
> 2. Open Android Studio and complete the setup wizard.
> 3. Go to **Tools** → **Device Manager** and create at least one virtual device (emulator).
> 4. Start the emulator.
>
> Alternatively, connect a physical Android device with **USB debugging** enabled.
>
> Let me know when you are done and I will check again.

---

## Partial availability

When some sources can proceed but others cannot:

1. Clearly list which sources are ready and which are blocked.
2. Ask the designer to choose:
   - Proceed with the available sources now and return to the blocked ones later.
   - Pause everything and complete setup first.
3. Never silently drop a source from the invocation.
4. If the designer chooses partial execution, record the skipped sources in `flow.md` with a note explaining they were skipped due to missing tool configuration.

## Completion gate

Proceed to source routing only when every required capability for every non-skipped source shows pass. If partial execution was chosen, proceed only for the sources whose capabilities are confirmed.
