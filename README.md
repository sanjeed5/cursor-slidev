# Cursor talk deck (Slidev)

Reusable Cursor talk deck. **Not event-specific.** Content lives in `slides.md` — no JSON sync layer.

## Present

```bash
pnpm install
pnpm dev
# → http://localhost:3030
```

Edit **`slides.md`** directly before a talk.

## Project layout

```
slides.md           ← deck content
components/         ← Vue slide components
public/             ← images, tweet PNGs, lockups (Slidev static assets)
slidev-theme-cursor/ ← linked theme
demo/               ← live @cursor/sdk terminal demo (separate Node project)
vite.config.ts      ← deploy base path (default `/` for Cloudflare Pages)
```

## Presenter

- **Sanjeed** — AI Engineer/Consultant

Photo: `public/sanjeed.jpg`

## Social proof (optional refresh)

Tweet data: `public/tweets/tweets.json`  
Slide layout: `SocialGrid` (defaults in `components/social-slide.ts`)

```bash
pnpm sync:social      # refresh tweets.json from X API
pnpm render:tweets    # regenerate PNG cards (Playwright)
```

## SDK live demo

```bash
cd demo
npm install
export CURSOR_API_KEY="..."
npm run demo
```

Software Factory — Supervisor + Plan-and-Execute + Reflexion via `@cursor/sdk`.

## Deploy (Cloudflare Pages)

**Live deck:** https://cursor.sanjeed.in

### CLI (recommended)

One-time auth in your terminal:

```bash
pnpm install
pnpm cf:login    # opens browser — approve Cloudflare OAuth
```

Deploy (build + upload + custom domain if token set):

```bash
pnpm cf:deploy
```

Optional env vars:

| Variable | Default | Purpose |
|----------|---------|---------|
| `CF_PAGES_PROJECT` | `cursor-slidev` | Pages project name |
| `CF_CUSTOM_DOMAIN` | `cursor.sanjeed.in` | Custom domain |
| `CLOUDFLARE_API_TOKEN` | — | Auto-add custom domain via API |
| `CLOUDFLARE_ACCOUNT_ID` | from `wrangler whoami` | Required with API token |

Presenter mode: `https://cursor.sanjeed.in/presenter`

### Dashboard alternative

Connect Git in [Cloudflare Pages](https://dash.cloudflare.com) → build command `corepack enable && pnpm install && pnpm build` → output `dist` → add custom domain `cursor.sanjeed.in`.

### Legacy GitHub Pages

```bash
pnpm build:gh   # base /cursor-slidev/ — old gh-pages subpath
```

## Agent context

See [AGENTS.md](./AGENTS.md). Brand skill: `.agents/skills/cursor-brand/`.
