# cursor-slidev — agent context

Cursor talk deck (Slidev). Not event-specific.

**Content:** edit `slides.md` directly. No `deck.json`, no generate step.

## Presenter (do not change unless Sanjeed asks)

- Name: Sanjeed
- Photo: `public/sanjeed.jpg`

## Layout (Slidev standard)

```
slides.md              ← talk content (source of truth)
components/            ← Vue slide components
public/                ← static assets (images, tweet PNGs, lockups)
demo/                  ← separate Node project: live @cursor/sdk terminal demo
scripts/               ← optional tweet refresh/render
vite.config.ts         ← deploy base path (/cursor-slidev/ for GitHub Pages)
.agents/skills/        ← agent skills (cursor-brand + slidev-*)
slidev-theme-cursor/   ← linked theme package
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
| `asset-url.ts` | `asset()` helper — resolves `public/` paths with deploy base |

## Slide order (in slides.md)

title → presenter → platform → **composer 2.5** → composer-social → Agents Window → planning → cloud agents → automations → canvas+design → SDK → factory arc → promos → thanks

Social slide: default tweets in `components/social-slide.ts`. Reorder by editing that file.

## Tweet pipeline

- Data: `public/tweets/tweets.json`
- `pnpm sync:social` — refresh from X API
- `pnpm render:tweets` — Playwright → PNGs in `public/tweets/`
- Slide uses `SocialGrid` with bundled defaults from `social-slide.ts`

Render gotchas: strip emoji in render script; avatars as base64 before screenshot; element clip not locator screenshot.

## SDK demo (`demo/`)

Separate mini Node project (its own `package.json`) — not part of the Slidev app.

```bash
cd demo && npm install && npm run demo
```

Requires `CURSOR_API_KEY`. Test before events.

## Deploy

- **Primary:** Cloudflare Pages → https://cursor.sanjeed.in
- **CLI:** `pnpm cf:login` once, then `pnpm cf:deploy`
- **Legacy GitHub Pages subpath:** `pnpm build:gh`

## Promos

Stale quickly — update links/copy in `slides.md` before each talk.
