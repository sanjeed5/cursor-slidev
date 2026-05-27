# cursor-slidev (agent context)

Cursor talk deck (Slidev). Not event-specific.

**Format:** **Cursor 101** (basics + live demos) → **Cursor 201** (advanced pro features). Not a team rollout talk. It's basics first, then pro power-user features. Edit `slides.md` directly. No `deck.json`, no generate step.

## Writing style

**No em dashes (`—`) anywhere in slides, components, or notes.** Use period, comma, colon, or parentheses. Run any new copy through the **humanizer** skill at `.agents/skills/humanizer/SKILL.md` before shipping. The skill is cloned from [blader/humanizer](https://github.com/blader/humanizer) and catches em dash overuse, AI vocabulary, rule-of-three patterns, vague attributions, and other AI tells.

## Verifying docs (do this before changing any feature claim)

**Primary source: <https://cursor.com/llms.txt>**

This file is a single flat index of every Cursor docs page, each available as a `.md` URL (e.g. `cursor.com/docs/agent/plan-mode.md`, `cursor.com/docs/agent/agents-window.md`). Use it to:

1. Find the doc page for the feature you're about to write about.
2. Fetch the `.md` URL directly.
3. Use the doc's terminology, not yours or the model's recall (feature names change: "Duplicate Chat" became "Fork Chat" in April 2026).

**Hard rule:** if `llms.txt` doesn't load, or the specific `.md` page returns 404, or the docs contradict what you remember: **stop and ask Sanjeed**. Do not guess. Do not fall back to community forum threads, blog posts, or training-data recall to ship a feature claim. Outdated terminology in slides is worse than an unbuilt slide.

Secondary sources (only for context, never as the source of a feature name or pricing claim): <https://cursor.com/changelog> · <https://cursor.com/blog>

## Share (live)

- Audience: https://cursor.sanjeed.in
- Presenter: https://cursor.sanjeed.in/presenter
- Fallback: https://cursor-slidev.sanjeed5.workers.dev

Re-deploy after edits: push to `main` (Cloudflare **Workers Builds**).

### Cloudflare build settings

| Setting | Value |
|---------|--------|
| Build command | `pnpm run build` |
| Deploy command | `pnpm exec wrangler deploy` |
| Node.js | `22` |
| Worker name | `cursor-slidev` (must match `wrangler.toml`) |

**Build gotcha:** `pnpm run build` runs `slidev build && rm -f dist/_redirects`. Do not add `public/_redirects` back.

Optional manual upload: `pnpm cf:deploy`

## Presenter (do not change unless Sanjeed asks)

- Name: Sanjeed
- Photo: `public/sanjeed.jpg`
- Role: Cursor Community · South Asia Lead
- Career arc: IIT Madras · Engineer → PM → AI Consultant

## Deck philosophy

- **101 slides are text-first.** Sanjeed demos live in Cursor; details live in **speaker notes** (presenter mode only).
- **201 slides** may use existing `public/product/` screenshots where we have them. Add speaker notes for live demo as alternative.
- **Do not block on sourcing new images.** Use speaker notes for live demos instead.
- No `v-click`, `{all|1|2|3}` code reveals, or progressive bullet animations. Show content all at once.

### Presenter mode

Open https://cursor.sanjeed.in/presenter (or `pnpm dev` → `/presenter`). Speaker notes appear in the presenter panel only.

**Speaker note format:** one short line (or two max). No numbered UI walkthroughs, no v-click animations on slides.

```markdown
<!--
Demo: Tab → Cmd+K → Cmd+I with a multi-file question.
-->
```

## Slide map

| # | Slide | Section | Live demo? |
|---|-------|---------|------------|
| 1 | Cover | / | / |
| 2 | Presenter | / | / |
| 3 | **Index / Today** | / | Roadmap for 101 + 201 |
| 4 | **Cursor 101** (section) | 101 | Prep: Cursor open on demo repo |
| 5 | Three speeds of AI | 101 | **Yes**: Tab, Cmd+K, Cmd+I |
| 6 | Agent in the IDE | 101 | **Yes**: checkpoints, fork chat, queue, ask-questions |
| 7 | Steer with @ and rules | 101 | **Yes**: @, rules, Shift+Tab, context ring |
| 8 | Connect your stack with MCP | 101 | **Yes**: Marketplace / MCP settings |
| 9 | Plan before you build | 101 | **Yes**: Plan Mode end-to-end |
| 10 | Recap: Cursor 101 | 101 | Wrap; **stop here for 101-only talks** |
| 11 | **Cursor 201** (section) | 201 | Advanced pro features, not team-focused |
| 12 | Composer 2.5 | 201 | Optional: model picker |
| 13 | Social proof | 201 | **Composer 2.5 only**: tweet PNGs; not generic community hype |
| 14 | Beyond the IDE | 201 | Optional: AgentChannels |
| 15 | Agents Window | 201 | Optional: handoff / parallel agents |
| 16 | Plan at scale | 201 | Optional: `/multitask` |
| 17 | Cloud agents | 201 | Optional: cursor.com/agents |
| 18 | Automations | 201 | Optional: automations UI |
| 19 | Canvas + Design Mode | 201 | Optional: Canvas or Design Mode |
| 20 | Cursor SDK | 201 | Optional: `demo/` script |
| 21 | Eric factory talk (thumbnail) | 201 | Links to YouTube |
| 22 | The third era | 201 | Discussion |
| 23 | Try it | / | CTAs |
| 24 | End | / | Docs · Community · Changelog · sanjeed.in |

**Trimmed vs old deck:** factory arc (5 slides) collapsed to one "third era" slide. Restore from git if a factory-heavy talk is needed.

## What goes where

### 101 (stable; verify against docs)

- Tab · inline edit (`Cmd/Ctrl+K`) · Agent (`Cmd/Ctrl+I`)
- Checkpoints · fork chat · queued messages · ask-questions
- @ mentions · `.cursor/rules` · modes (`Shift+Tab`) · context ring
- MCP intro (Marketplace, approval, auto-run)
- **Plan Mode**: taught in 101 as the bridge habit before 201 parallelism

### 201 (refresh from changelog before events)

Advanced **pro** features, not team/enterprise framing:

- Composer 2.5 · Agents Window · handoff local ↔ cloud
- `/multitask` · worktrees · split PRs
- Cloud agents · Automations · Canvas · Design Mode · `/loop`
- SDK · third-era framing

**Social proof slide** follows Composer 2.5 directly. Tweets are about Composer 2.5 (speed, cost, benchmarks). Keep subtitle tied to the model; don't genericize to "community reaction."

**Sources** (in order): <https://cursor.com/llms.txt> for canonical docs · https://cursor.com/changelog · https://cursor.com/blog. See "Verifying docs" above for the hard rule.

**Brand:** `.agents/skills/cursor-brand/SKILL.md` (sentence case, warm palette, no hype).

**Voice:** `.agents/skills/humanizer/SKILL.md` (no em dashes, no AI tells).

## Layout (repo)

```
slides.md              ← talk content + speaker notes (source of truth)
components/            ← Vue slide components
public/product/        ← 201 screenshots (optional; not required for 101)
public/tweets/         ← SocialGrid PNGs
demo/                  ← SDK terminal demo (separate package.json)
slidev-theme-cursor/   ← linked theme
.agents/skills/        ← cursor-brand · humanizer · slidev-*
```

## Components

| Component | Used for |
|-----------|----------|
| `CoverHero.vue` | Title slide |
| `PresenterSlide.vue` | Speaker intro (do not edit without asking) |
| `AgentChannels.vue` | 201 platform slide |
| `ComposerStats.vue` | Composer 2.5 slide |
| `SocialGrid.vue` | Tweet grid (defaults in `social-slide.ts`) |
| `VisualBullets.vue` | 201 feature bullets + product-shot |
| `EndSlide.vue` | Closing: Docs, Community, Changelog; footer sanjeed.in |

## Images (201 only, optional)

Existing files in `public/product/`. See `public/product/README.md` for Mux re-download recipe.

101 does **not** depend on these. Prefer speaker notes for live Cursor demos.

## Verify before ship

```bash
pnpm run build     # deploy artifact
pnpm export        # optional PNG check for 201 slides with images
```

Presenter notes are **not** visible in export PNGs. Test in `/presenter`.

## Tweet pipeline

- `pnpm sync:social` · `pnpm render:tweets`
- Defaults: `components/social-slide.ts`

## SDK demo

```bash
cd demo && npm install && npm run demo   # needs CURSOR_API_KEY
```

## Promos

Update **Try it** slide before each talk. Links go stale quickly.

**Try it** (penultimate slide) holds download / product CTAs. **End** (`EndSlide.vue`) holds Docs → Community → Changelog; footer **sanjeed.in**. Do not swap these roles.

---

## Maintaining slides (learnings)

Use this when refreshing for new Cursor releases or restructuring the deck.

### What to update vs keep

| Refresh often (201) | Change rarely (101) |
|---------------------|---------------------|
| Changelog features, pricing, integrations | Tab, Cmd+K, Agent, @, rules, MCP basics |
| `public/product/` screenshots if UI changed | Index structure, section dividers, live-demo pattern |
| Composer version, social tweets | Presenter slide, End slide link order, cover framing |

**Workflow:** fetch [llms.txt](https://cursor.com/llms.txt) → find the `.md` URL for each feature you're touching → verify name, shortcut, and pricing against the doc page → update slides + speaker notes → read [changelog](https://cursor.com/changelog) for anything not yet in docs → run humanizer pass on changed copy → `pnpm run build` → spot-check image slides via `pnpm export`.

Do not invent features or stats. If `llms.txt` is unreachable or the relevant `.md` page 404s, stop and ask Sanjeed. Link official URLs in slide footers or speaker notes.

### Index slide (slide 3)

- **Title:** `# Today`. Only top-level heading on the slide.
- **Layout:** `layout: default` + `class: index-slide`. **Not** `layout: two-cols` (two-cols puts "Cursor 201" beside "Today" and breaks hierarchy).
- **Structure:** subtitle → `.index-grid` with two columns → **Cursor 101** and **Cursor 201** as equal `##` headings side by side.
- **Copy:** "Basics in the IDE, then advanced pro features." Not team/enterprise rollout language.
- **Bullets:** use `div.platform-points` / `div.platform-points__item` (see below).

Styles live in `slidev-theme-cursor/styles/layout.css` (`.index-slide`, `.index-grid`).

### Bullets: `platform-points`

**Do not use `<ul>/<li>`** with `.platform-points`. Browser list markers stack with the orange `::before` dot (double bullets).

```html
<div class="platform-points">
  <div class="platform-points__item">First point</div>
  <div class="platform-points__item">Second point</div>
</div>
```

Orange dot = brand accent `#f54e00` via CSS only. One marker per line.

### Speaker notes & demos

- **101:** text-first slides; demo steps in `<!-- -->` notes at `/presenter`.
- Notes = **one short line** (e.g. `Demo: Tab → Cmd+K → Cmd+I`). No numbered click paths ("open settings → click MCP → expand…").
- **201:** slide screenshots are enough unless notes say "optional live". Don't block ship on new blog/doc images.

### Animations & reveals

- No `v-click`, no `{all|1|2|3}` on code blocks, no progressive bullet reveals. One advance equals full slide visible.

### Layout patterns (reuse)

| Pattern | Use |
|---------|-----|
| `CoverHero` | Cover |
| `layout: presenter` | Speaker intro |
| `layout: default` + `index-slide` | Index / Today |
| `layout: section` | 101 / 201 dividers |
| `layout: default` + `platform-points__item` | Bullet lists |
| `layout: visual` + `VisualBullets` + `product-shot` | 201 features with JPG |
| `layout: two-cols` + `AgentChannels` / `ComposerStats` | Platform, Composer |
| `layout: end` + `EndSlide` | Closing |

### 201 content anchors (keep unless replaced)

- **Eric factory talk:** full-width `eric-factory-talk-thumb.jpg` linking to YouTube; keep before "The third era".
- **SocialGrid:** tweet PNGs in `public/tweets/`. **Composer 2.5 social proof only.** Sits right after Composer 2.5 slide. Reorder via `components/social-slide.ts`.
- **Factory arc:** intentionally trimmed to Eric thumb + one "third era" slide. Don't expand back to 5 slides without asking.

### End slide (`EndSlide.vue`)

Fixed unless Sanjeed asks:

1. Docs → Community → Changelog (that order)
2. Footer link: **sanjeed.in** → https://sanjeed.in

### Verify before ship

```bash
pnpm run build
pnpm export    # spot-check slides with images (index, social, product JPGs)
```

Export PNGs do not show speaker notes. Use `/presenter` to review demo notes.

**Image slides to eyeball:** index (3), social (13), agents/cloud/automations/canvas (15–19), Eric thumb (21).

### When adding a new 201 feature

1. Add slide **after** existing 201 block, before Eric thumb / third era (or swap out the stalest slide).
2. Prefer existing `public/product/` image or changelog screenshot; else bullet slide + optional live note.
3. Update index slide 201 bullet if it's a headline feature.
4. Bump `info` → `Updated YYYY-MM-DD` in `slides.md` frontmatter.
5. Update slide map table in this file if slide count/order changes.
6. Run the humanizer skill on any new prose before push.
