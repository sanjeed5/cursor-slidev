# cursor-slidev — agent context

Cursor talk deck (Slidev). Not event-specific.

**Content:** edit `slides.md` directly. No `deck.json`, no generate step.

## Share (live)

- Audience: https://cursor.sanjeed.in
- Presenter: https://cursor.sanjeed.in/presenter
- Fallback: https://cursor-slidev.pages.dev

Re-deploy after edits: `pnpm cf:deploy`

## Presenter (do not change unless Sanjeed asks)

- Name: Sanjeed
- Photo: `public/sanjeed.jpg`
- Role: AI Engineer/Consultant

## Layout (Slidev standard)

```
slides.md              ← talk content (source of truth)
components/            ← Vue slide components
public/                ← static assets (images, tweet PNGs, lockups)
scripts/               ← tweet pipeline + deploy-cf-pages.mjs
demo/                  ← separate Node project: live @cursor/sdk terminal demo
vite.config.ts         ← base `/` (Cloudflare Pages)
slidev-theme-cursor/   ← linked theme package
.agents/skills/        ← agent skills (cursor-brand + slidev-*)
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
| `asset-url.ts` | `asset()` helper — `public/` paths with deploy base |

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

Cloudflare Pages via Wrangler: `pnpm cf:login` (once), then `pnpm cf:deploy`.

## Promos

Stale quickly — update links/copy in `slides.md` before each talk.
