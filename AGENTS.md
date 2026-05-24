# cursor-slidev — agent context

Cursor talk deck (Slidev). Not event-specific.

**Content:** edit `slides.md` directly. No `deck.json`, no generate step.

## Presenter (do not change unless Sanjeed asks)

- Name: Sanjeed
- Photo: `assets/sanjeed.jpg`

## Layout

```
slides.md              ← talk content (source of truth)
components/            ← Vue slide components (see list below)
assets/product/        ← changelog/blog screenshots
assets/tweets/         ← PNG cards + tweets.json (for scripts only)
demo/                  ← separate Node project: live @cursor/sdk terminal demo
scripts/               ← optional tweet refresh/render
.agents/skills/        ← agent skills (cursor-brand + slidev-*)
skills-lock.json       ← pinned skill versions
```

## Components (`components/`)

| Component | Used for |
|-----------|----------|
| `CoverHero.vue` | Title slide |
| `PresenterSlide.vue` | Speaker intro + social QR codes |
| `AgentChannels.vue` | Platform slide — IDE / web / mobile / Slack |
| `ComposerStats.vue` | Composer 2.5 stats panel |
| `SocialGrid.vue` | Tweet screenshot grid |
| `VisualBullets.vue` | Bullets with icons |
| `EndSlide.vue` | Closing / questions slide |
| `GlowBackground.vue` | Animated gradient background (legacy) |

## Slide order (in slides.md)

title → presenter → platform → **composer 2.5** → composer-social → Agents Window → planning → cloud agents → automations → canvas+design → SDK → factory arc → promos → thanks

Social slide: first 4 entries in `SocialGrid` props in `slides.md`.

## Tweet pipeline

- Data: `assets/tweets/tweets.json`
- `pnpm sync:social` — refresh from X API
- `pnpm render:tweets` — Playwright → PNGs
- Reorder or swap tweets by editing `SocialGrid` in `slides.md`

Render gotchas: strip emoji in render script; avatars as base64 before screenshot; element clip not locator screenshot.

## SDK demo (`demo/`)

Separate mini Node project (its own `package.json`) — not part of the Slidev app. Runs the Software Factory pattern live during the SDK slide.

```bash
cd demo && npm install && npm run demo
```

Requires `CURSOR_API_KEY`. Test before events.

## Promos

Stale quickly — update links/copy in `slides.md` before each talk.
