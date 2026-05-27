---
title: Cursor 101 → 201
info: |
  ## Cursor talk deck

  Live: https://cursor.sanjeed.in
  Presenter: https://cursor.sanjeed.in/presenter
  Updated 2026-05-28

  101 slides have speaker notes. Open presenter mode and demo live in Cursor.
theme: slidev-theme-cursor
layout: full
class: p-0
colorSchema: dark
highlighter: shiki
mdc: true
transition: slide-left
exportFilename: cursor-community-talk
drawings:
  persist: false
---

<CoverHero
  title="Cursor 101 → 201"
  subtitle="Basics first · advanced pro features · May 2026"
  name="Sanjeed · Cursor Community South Asia Lead"
/>

---
layout: presenter
---

<PresenterSlide />

---
layout: default
class: index-slide
---

# Today

<p class="text-lg text-muted mt-2 mb-10">Two halves. Skim the first if you use Cursor daily.</p>

<div class="index-grid">

<div>

## Cursor 101

<div class="platform-points">
  <div class="platform-points__item">Tab, inline edit, Agent</div>
  <div class="platform-points__item">@ mentions and rules</div>
  <div class="platform-points__item">MCP and Plan Mode</div>
</div>

<p class="text-xs text-muted mt-3">What you'll use day one</p>

</div>

<div>

## Cursor 201

<div class="platform-points">
  <div class="platform-points__item">Composer 2.5 and Agents Window</div>
  <div class="platform-points__item">Cloud agents, automations, Canvas</div>
  <div class="platform-points__item">SDK and the third era</div>
</div>

<p class="text-xs text-muted mt-3">Where pro users live now</p>

</div>

</div>

<p class="text-sm text-muted mt-12">101 is live in Cursor · 201 follows the latest changelog</p>

---
layout: section
---

# Cursor 101

Tab, Agent, context, and rules

<!--
Cursor open on a demo repo. Slides are prompts. Demo in the app.
-->

---
layout: default
---

# Three speeds of AI

| Mode | Shortcut | Best for |
| --- | --- | --- |
| **Tab** | `Tab` to accept | Autocomplete as you type: next line, refactors, imports |
| **Inline edit** | `Cmd/Ctrl+K` | Targeted edits on selected code |
| **Agent** | `Cmd/Ctrl+I` | Multi-step tasks: search, edit, run terminal, browser |

<p class="text-sm text-muted mt-6">Start with Tab and inline edit. Reach for Agent when the task spans files or needs tools.</p>

<!--
Demo: Tab autocomplete → Cmd+K on a selection → Cmd+I for a multi-file question.
-->

---
layout: default
---

# Agent in the IDE

Agent picks the steps, edits files across the repo, runs commands in your terminal, and can browse the web.

- **Checkpoints**: auto-snapshots before edits; restore from the chat timeline
- **Fork chat**: three-dot menu on any message; branch the same context two ways
- **Queued messages**: `Enter` queues the next step · `Cmd/Ctrl+Enter` sends now
- **Ask questions**: agent keeps working while you answer clarifications
- Pick a model in the picker · rules apply to every run

<div class="tip-box mt-4">
  <strong class="text-[#edecec]">Tip:</strong> Wrong turn? Restore a checkpoint. Two ideas to try? Fork the chat.
</div>

<!--
Demo: small multi-file agent task. Show queued follow-up vs Cmd+Enter. Restore a checkpoint if useful. Fork Chat from a message to explore an alternative approach without losing the main thread (editor chats fork from any message; Agents Window from the latest).
-->

---
layout: default
---

# Steer with @ and rules

**@ mentions**: attach exactly what matters:

- `@file.ts` / `@src/` for files and folders
- `@Docs` for indexed documentation you add yourself
- `@Branch (Diff with Main)` for full branch context
- `@Terminals` for recent terminal output

**Rules**: persistent instructions in `.cursor/rules` so every agent run knows your conventions.

<p class="text-sm text-muted mt-4">`Shift+Tab` rotates modes · `Cmd/Ctrl+/` cycles models · context ring shows token usage</p>

<!--
Demo: `@` a file and folder · flash `.cursor/rules` · Shift+Tab through modes · context ring if time.
-->

---
layout: default
---

# Connect your stack with MCP

Model Context Protocol links Cursor to external tools and data: Linear, Figma, Slack, your own APIs.

- **Marketplace**: install official plugins from the catalog
- **`.cursor/mcp.json`**: project or global config for custom servers
- Agent uses MCP tools in chat and Plan Mode; approve or auto-run per tool

<!--
Demo: show an installed MCP and trigger it from agent chat (approval prompt). Mention auto-run if relevant.
-->

---
layout: default
---

# Plan before you build

- `Shift+Tab` → **Plan Mode**: research, clarify, approve before code
- Good for multi-file work, unclear scope, or architecture you want to review first
- Wrong result? **Revert and refine the plan**: faster than patching in chat

<div class="tip-box mt-4">
  <strong class="text-[#edecec]">Favorite workflow:</strong> plan locally where you have full IDE context. Hand the plan to a cloud agent and move on (covered in 201).
</div>

<p class="text-sm text-muted mt-4"><a href="https://cursor.com/docs/agent/plan-mode" target="_blank">Plan Mode docs</a></p>

<!--
Demo: Plan Mode on a scoped feature → review plan → build. If wrong, revert and refine the plan (don't chat-patch). Tee up the 201 handoff: save the plan to repo, then a cloud agent picks it up.
-->

---
layout: default
---

# Recap: Cursor 101

<div class="platform-points mt-6">
  <div class="platform-points__item"><strong>Tab → Cmd+K → Agent</strong> · three speeds, one mental model</div>
  <div class="platform-points__item"><strong>@ and rules</strong> · steer with context, not longer prompts</div>
  <div class="platform-points__item"><strong>MCP</strong> · plug your stack into the agent</div>
  <div class="platform-points__item"><strong>Plan Mode</strong> · think first when scope is unclear</div>
</div>

<p class="text-sm text-muted mt-8">cursor.com/docs · cursor.com/download</p>

<!--
One-line recap. 101-only talks: stop here. Otherwise: advance to 201.
-->

---
layout: section
---

# Cursor 201

A new model, a new workspace, and agents that run beyond the IDE.

<!--
Optional: open Agents Window before continuing.
-->

---
layout: two-cols
layoutClass: gap-12 items-center
---

# Composer 2.5

<p class="text-lg leading-relaxed text-[#edecec]/80 mt-2 mb-5 max-w-lg">Better on long-running agentic tasks and complex instructions. Default for most agent work.</p>

<div class="platform-points">
  <div class="platform-points__item">Standard: $0.50/M in · $2.50/M out</div>
  <div class="platform-points__item">Fast (default): $3/M in · $15/M out, lower latency</div>
</div>

<p class="text-sm text-muted mt-6"><a href="https://cursor.com/blog/composer-2-5" target="_blank">announcement</a> · <a href="https://cursor.com/docs/models/cursor-composer-2-5" target="_blank">model docs</a></p>

::right::

<ComposerStats />

<!--
Optional: Composer 2.5 in model picker + one agent task. Mention double usage first week if relevant.
-->

---
layout: default
class: composer-social-slide
---

# Builders love Composer 2.5

<p class="text-sm text-muted mb-3">Social proof for Composer 2.5: speed, cost, and benchmark buzz</p>

<SocialGrid />

---
layout: two-cols
layoutClass: gap-12 items-center
---

# Beyond the IDE

<p class="text-lg leading-relaxed text-[#edecec]/80 mt-3 mb-6 max-w-md">Same agent runtime across IDE, cloud, CLI, SDK, and @Cursor in your tools.</p>

<div class="platform-points">
  <div class="platform-points__item">Run locally or in the cloud</div>
  <div class="platform-points__item">@Cursor in GitHub, Slack, Linear, Jira</div>
</div>

::right::

<AgentChannels />

<!--
Bridges Composer 2.5 → Agents Window. Jira added May 19, 2026. Linear, Slack, GitHub already shipped.
-->

---
layout: visual
---

# Agents Window

<VisualBullets wide>
  <div>• Many agents in parallel across local, cloud, worktrees, SSH</div>
  <div>• **Plan locally, build in cloud**, or the reverse</div>
  <div>• PR review built in: Reviews, Commits, Changes tabs</div>
</VisualBullets>

<p class="text-sm text-muted mb-4">Cmd/Ctrl+Shift+P → "Agents Window" · Cmd/Ctrl+Shift+M to full-screen a tab</p>

<img src="/product/cloud-agents-handoff.jpg" alt="Agents Window" class="product-shot" />

<!--
Optional live: Agents Window with parallel runs, plan-locally → build-in-cloud handoff. Slide image is enough otherwise.
-->

---
layout: default
---

# Plan at scale

Plan Mode from 101, now with more hands.

- **`/multitask`**: async subagents kick off independent steps in parallel
- **Split into PRs**: slice a big change into reviewable pieces
- **Worktrees**: isolated branches per agent run, no stepping on each other

<p class="text-sm text-muted mt-4"><a href="https://cursor.com/changelog/04-24-26" target="_blank">Changelog 3.2</a></p>

<!--
Optional: `/multitask` or worktrees. Skip if not set up.
-->

---
layout: visual
---

# Cloud agents

<VisualBullets wide>
  <div>• Isolated VMs that return PRs, screenshots, and demo artifacts</div>
  <div>• Dev environments as code: Dockerfiles, secrets, multi-repo</div>
  <div>• Kick off from cursor.com/agents or @Cursor anywhere</div>
</VisualBullets>

<img src="/product/cloud-agents-pr.jpg" alt="Cloud agent PR output" class="product-shot" />

<!--
Optional: cursor.com/agents or a finished cloud-agent PR. Slide image is enough otherwise.
-->

---
layout: visual
---

# Automations

<VisualBullets wide>
  <div>• Always-on triggers: PR events, Slack, Linear, cron, webhooks</div>
  <div>• Multi-repo and no-repo workflows · live in the Agents Window (3.5)</div>
  <div>• Marketplace templates: Slack digest, Stripe metrics, product FAQ…</div>
</VisualBullets>

<p class="text-sm text-muted mb-4">cursor.com/automations</p>

<img src="/product/automations-pr-routing.jpg" alt="Cursor Automations" class="product-shot" />

<!--
Optional: cursor.com/automations matches slide screenshot. No live needed.
-->

---
layout: visual
---

# Canvas + Design Mode

<VisualBullets wide>
  <div>• **Canvas**: agent-built dashboards and UIs · now shareable as live links (3.5)</div>
  <div>• **Design Mode**: `Cmd/Ctrl+Shift+D` · point at UI in the browser, edit by voice or chat</div>
  <div>• **`/loop`**: repeat a prompt on a schedule until the outcome is hit</div>
</VisualBullets>

<div class="grid grid-cols-2 gap-3 mt-4">
  <img src="/product/canvas-dashboard.jpg" alt="Canvas dashboard" class="product-shot" />
  <img src="/product/design-mode.jpg" alt="Design Mode" class="product-shot" />
</div>

<!--
Optional live: Canvas, Design Mode, or `/loop` (pick one). Slide screenshots are enough otherwise.
-->

---
layout: two-cols
layoutClass: gap-8 items-start
---

# Cursor SDK

<p class="text-sm text-muted mb-4">cursor.com/docs/sdk · public beta</p>

- **`@cursor/sdk`** (TypeScript) and **`cursor-sdk`** (Python)
- Same runtime as IDE, local or cloud
- Start in code, continue in Agents Window

<p class="text-sm mt-4 text-muted"><a href="https://cursor.com/docs/sdk/typescript" target="_blank">TypeScript docs</a></p>

::right::

```typescript
import { Agent } from "@cursor/sdk";

const agent = await Agent.create({
  apiKey: process.env.CURSOR_API_KEY!,
  model: { id: "composer-2.5" },
  cloud: {
    repos: [{ url: "https://github.com/org/repo" }],
    autoCreatePR: true,
  },
});

const run = await agent.send("Fix flaky checkout test");
for await (const event of run.stream()) { /* ... */ }
```

<!--
Optional: `cd demo && npm run demo`. Otherwise talk through the snippet.
-->

---
layout: center
class: px-16
---

<a href="https://www.youtube.com/watch?v=rnDm57Py54A" target="_blank">
  <img src="/product/eric-factory-talk-thumb.jpg" alt="Eric Zakariasson: Build your own software factory" class="product-shot max-h-[72vh] w-full" />
</a>

<!--
Eric's factory talk. Good clip to send people to after the deck.
-->

---
layout: default
---

# The third era

<p class="text-sm text-muted mb-4"><a href="https://cursor.com/blog/third-era" target="_blank">Third era of AI software development</a> · <a href="https://www.youtube.com/watch?v=rnDm57Py54A" target="_blank">Eric's factory talk</a></p>

From typing code → directing **fleets of agents** that ship PRs, run review, and monitor production.

- Break work into agent-sized scopes; review artifacts, not every line
- Rules, tests, and MCP as guardrails, not one-off prompts
- You own architecture, security, and taste

<!--
Discussion only. Eric's talk linked on slide.
-->

---
layout: default
---

# Try it

<div class="grid gap-4 mt-6 max-w-2xl">

<a href="https://cursor.com/download" target="_blank" class="cta-card">
  <div class="cta-card__title">Download Cursor</div>
  <div class="cta-card__desc">Start with 101: Tab, Agent, @, rules, Plan Mode</div>
</a>

<a href="https://cursor.com/docs/models/cursor-composer-2-5" target="_blank" class="cta-card cta-card--accent">
  <div class="cta-card__title">Composer 2.5</div>
  <div class="cta-card__desc">Pick it in the model picker for long agent runs</div>
</a>

<a href="https://cursor.com/automations" target="_blank" class="cta-card">
  <div class="cta-card__title">Automations</div>
  <div class="cta-card__desc">Always-on agents for PR events, Slack, cron, webhooks</div>
</a>

</div>

---
layout: end
---

<EndSlide />
