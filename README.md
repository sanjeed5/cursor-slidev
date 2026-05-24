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
vite.config.ts      ← deploy base path
```

## Presenter

- **Sanjeed** — AI engineer & consultant

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

## Deploy

**Live deck:** https://sanjeed5.github.io/cursor-slidev/

Push to `main` → GitHub Pages (see `.github/workflows/deploy.yml`).

| Host | Build command |
|------|---------------|
| GitHub Pages (`/cursor-slidev/`) | `pnpm build` (default) |
| Cloudflare Pages / root domain | `SLIDEV_BASE=/ pnpm build` |

## Agent context

See [AGENTS.md](./AGENTS.md). Brand skill: `.agents/skills/cursor-brand/`.
