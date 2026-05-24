---
title: What's New in Cursor May 2026
info: |
  ## Cursor talk deck

  Updated 2026-05-24
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
  title="What's New in Cursor May 2026"
  name="Sanjeed"
  subtitle="AI engineer & consultant"
/>

---
layout: presenter
---

<PresenterSlide />

---
layout: two-cols
layoutClass: gap-12 items-center
---

# Cursor as an agent platform

<p class="text-lg leading-relaxed text-[#edecec]/80 mt-3 mb-6 max-w-md">One runtime. Agents wherever your team already works.</p>

<ul class="platform-points">
  <li>Gartner MQ Leader (May 2026)</li>
  <li>Enterprise controls when teams need them</li>
</ul>

<p class="text-sm text-muted mt-8">Powered by Composer 2.5 · Plan Mode → cloud agents → automations</p>

::right::

<AgentChannels />

---
layout: two-cols
layoutClass: gap-12 items-center
---

# Composer 2.5

<p class="text-lg leading-relaxed text-[#edecec]/80 mt-2 mb-5 max-w-lg">Cursor's most capable model for agentic coding — the engine behind Plan Mode, cloud agents, and the SDK.</p>

<ul class="platform-points">
  <li>Sustained work on long-running, multi-step tasks</li>
  <li>Follows complex instructions more reliably</li>
  <li>~10× lower cost than Opus 4.7 / GPT-5.5 at similar quality</li>
</ul>

<p class="text-sm text-muted mt-6">Fast tier default · $0.50/M in · $2.50/M out · <a href="https://cursor.com/blog/composer-2-5" target="_blank">announcement</a></p>

::right::

<ComposerStats />

---
layout: default
class: composer-social-slide
---

# Builders love Composer 2.5

<p class="text-sm text-muted mb-3">Community reaction — not just the official announcement</p>

<SocialGrid />

---
layout: visual
---

# Agents window

<VisualBullets wide>
  <div>• Many agents in parallel — local, cloud, worktrees, SSH</div>
  <div>• Start local, continue in cloud — or the reverse</div>
  <div>• PR review in one place — Reviews, Commits, Changes tabs</div>
</VisualBullets>

<p class="text-sm text-muted mb-4">Cmd/Ctrl+Shift+P → "Agents Window"</p>

<img src="/product/cloud-agents-handoff.jpg" alt="Agents Window" class="product-shot" />

---
layout: default
---

# Plan before you build

- Shift+Tab → Plan Mode: research, clarify, approve
- **Build in Parallel** — independent steps as async subagents
- **Split into PRs** — logical slices when a change gets too big

<div class="tip-box">
  <strong class="text-[#edecec]">Tip:</strong> Wrong result? Revert and refine the plan — don't patch in chat.
</div>

---
layout: visual
---

# Cloud agents

<VisualBullets wide>
  <div>• 40%+ of Cursor's own PRs come from cloud agents — <a href="https://cursor.com/blog/cloud-agent-lessons" target="_blank">source (Apr 2026)</a></div>
  <div>• Returns PRs, screenshots, and demo artifacts</div>
  <div>• Dev environments as code — Dockerfiles, secrets, multi-repo</div>
</VisualBullets>

<p class="text-sm text-muted mb-4">cursor.com/agents · @Cursor in Slack, GitHub, Linear, Jira</p>

<img src="/product/cloud-agents-pr.jpg" alt="Cloud agent PR output" class="product-shot" />

---
layout: visual
---

# Automations

<VisualBullets wide>
  <div>• Now in the Agents Window — create and manage alongside your agents</div>
  <div>• Always-on: PR events, Slack, Linear, cron, webhooks</div>
  <div>• Multi-repo and no-repo · Marketplace templates (Slack digest, Stripe, FAQ…)</div>
</VisualBullets>

<p class="text-sm text-muted mb-4">cursor.com/automations · cursor.com/marketplace</p>

<img src="/product/automations-pr-routing.jpg" alt="Cursor Automations — PR routing workflow" class="product-shot" />

---
layout: visual
---

# Canvas + Design Mode

<VisualBullets wide>
  <div>• Canvas: dashboards instead of markdown walls</div>
  <div>• Design Mode: Cmd/Ctrl+Shift+D · Ctrl/Cmd+M to speak</div>
</VisualBullets>

<p class="text-sm text-muted mb-4">Live demo next</p>

<div class="grid grid-cols-2 gap-3">
  <img src="/product/canvas-dashboard.jpg" alt="Canvas incident dashboard" class="product-shot" />
  <img src="/product/design-mode.jpg" alt="Design Mode visual editor" class="product-shot" />
</div>

---
layout: two-cols
layoutClass: gap-8 items-start
---

# Cursor SDK

<p class="text-sm text-muted mb-4">cursor.com/docs/sdk · public beta</p>

- **`@cursor/sdk`** (TypeScript) and **`cursor-sdk`** (Python)
- Same agent runtime, harness, and models as IDE, CLI, and web
- **Local** — your machine and working tree
- **Cloud** — isolated VM, parallel agents, optional PRs
- Start programmatically, continue in Agents Window

<p class="text-sm mt-4 text-muted"><a href="https://forum.cursor.com/t/introducing-the-cursor-python-sdk/161367" target="_blank">Python SDK announcement</a> · <a href="https://cursor.com/docs/sdk/typescript" target="_blank">TypeScript docs</a></p>

::right::

```typescript {all|1|3-9|11-13}
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

---
layout: center
class: px-16
---

<a href="https://www.youtube.com/watch?v=rnDm57Py54A" target="_blank">
  <img src="/product/eric-factory-talk-thumb.jpg" alt="Eric Zakariasson — Build your own software factory" class="product-shot max-h-[72vh] w-full" />
</a>

---
layout: default
---

# Build a software factory

<p class="text-sm text-muted mb-4">Eric Zakariasson · <a href="https://www.youtube.com/watch?v=rnDm57Py54A" target="_blank">Building your own software factory</a> · <a href="https://cursor.com/blog/third-era" target="_blank">third era</a></p>

Cursor is shifting from writing code to **building the factory that creates your software** — fleets of agents you direct, equip, and review.

**Why a factory?**
- **Uncapped throughput** — agents run 24/7
- **Consistent outputs** — reproducible, assembly-line workflows
- **Taste over labor** — focus on design and problem-solving, not typing

<p class="text-sm text-muted mt-4">40%+ of Cursor's internal PRs come from cloud agents — <a href="https://cursor.com/blog/cloud-agent-lessons" target="_blank">source (Apr 2026)</a></p>

---
layout: default
---

# Levels of autonomy

<p class="text-sm text-muted mb-4">Dan Shapiro's framework · via Eric's talk</p>

| Level | Mode |
| --- | --- |
| 1–2 | Spicy autocomplete → pair programming *(most teams today)* |
| 3 | AI writes most code — human reviews |
| 4 | Human manages — delegates tasks, reviews outcomes |
| 5–6 | "Dark factory" — intent in, shipped code out |

<div class="tip-box mt-4">
  <strong class="text-[#edecec]">The shift:</strong> Level 4 is the factory — break work into agent-sized scopes and review artifacts, not every diff.
</div>

---
layout: visual
---

# What agents need to run alone

<VisualBullets>
  <div>• <strong>Primitives</strong> — modular codebases, boilerplates, startup scripts</div>
  <div>• <strong>Dynamic guardrails</strong> — SOP rules when agents go off-rails, not generic rule dumps</div>
  <div>• <strong>Verifiable systems</strong> — unit tests, Playwright, UI checks so agents verify their own work</div>
  <div>• <strong>Enablers</strong> — MCP tools (Slack, Notion, Datadog), skills, dev environment control</div>
</VisualBullets>

---
layout: default
---

# From developer to manager

- **Sync → async** — front-load specs and context; agents work while you move on
- **Scope and parallelize** — isolated cloud VMs so agents don't step on each other
- **Keep tribal knowledge** — you own architecture, data flows, security, and schema decisions

---
layout: default
---

# Scaling to dozens of agents

- **Agentic code review** — Bugbot reviews PRs against team rules; humans only on high-risk changes
- **Continual learning** — plugins mine chat transcripts → auto-generate rules
- **Visual QA** — computer use: agents spin up servers, click through UI, record interactions
- **Cursor Workers** — run agent infrastructure on your own machines or self-hosted cloud

---
layout: default
---

# Factory best practices

- **Be explicit** — clear intent beats vague prompts
- **Keep critical decisions human** — auth, security, payments stay with you
- **Store context** — logs of good prompts and artifacts show future agents what "good" looks like
- **Give agents freedom** — one team added a Slack "vent channel" so agents flag blockers early

---
layout: default
---

# Try it

<div class="grid gap-4 mt-6 max-w-2xl">

<a href="https://cursor.com/docs/models/cursor-composer-2-5" target="_blank" class="cta-card cta-card--accent">
  <div class="cta-card__title">Composer 2.5</div>
  <div class="cta-card__desc">Try the latest model in the IDE</div>
</a>

<a href="https://cursor.com/automations" target="_blank" class="cta-card">
  <div class="cta-card__title">Automations</div>
  <div class="cta-card__desc">Always-on agents for your team</div>
</a>

<a href="https://cursor.com/docs/sdk/typescript" target="_blank" class="cta-card cta-card--accent">
  <div class="cta-card__title">Cursor SDK</div>
  <div class="cta-card__desc">Run agents from your own code</div>
</a>

</div>

---
layout: end
---

<EndSlide />
