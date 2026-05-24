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

Hosted on Cloudflare Pages at the repo root (`base: /`). Push to `main` triggers a deploy when the project is connected in Cloudflare.

### One-time Cloudflare setup

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Select this repo (`cursor-slidev`), branch `main`
3. Build settings:

| Setting | Value |
|---------|--------|
| Framework preset | None |
| Build command | `corepack enable && pnpm install && pnpm build` |
| Build output directory | `dist` |
| Node.js version | `20` |

4. **Custom domains** → Add `cursor.sanjeed.in`
5. In DNS for `sanjeed.in` (Cloudflare): add **CNAME** `cursor` → `<your-project>.pages.dev` (Cloudflare usually creates this when you add the custom domain)

`public/_redirects` enables SPA routing for `/presenter` and slide deep links.

### Legacy GitHub Pages

If you ever need the old subpath host again:

```bash
pnpm build:gh
```

## Agent context

See [AGENTS.md](./AGENTS.md). Brand skill: `.agents/skills/cursor-brand/`.
