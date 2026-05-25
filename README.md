# Cursor talk deck (Slidev)

Reusable Cursor talk deck. **Not event-specific.** Content lives in `slides.md` — no JSON sync layer.

## Share

| | URL |
|--|-----|
| **Audience** | https://cursor.sanjeed.in |
| **Presenter** | https://cursor.sanjeed.in/presenter |
| **Fallback** | https://cursor-slidev.pages.dev |

Hosted on **Cloudflare Pages** (project: `cursor-slidev`, direct upload — not CF dashboard Git integration).

## Present

```bash
pnpm install
pnpm dev
# → http://localhost:3030
```

Edit **`slides.md`**, push to `main` — GitHub Actions deploys automatically (once secrets are set). Or deploy manually:

```bash
pnpm cf:deploy
```

## Project layout

```
slides.md              ← deck content
components/            ← Vue slide components
public/                ← images, tweet PNGs, lockups
scripts/deploy-cf-pages.mjs ← manual CF deploy
.github/workflows/cloudflare-pages.yml ← auto-deploy on push
slidev-theme-cursor/   ← linked theme
demo/                  ← @cursor/sdk terminal demo (separate Node project)
vite.config.ts         ← base `/` for Cloudflare Pages
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

The Pages project uses **direct upload** (created via Wrangler CLI). It is **not** linked through Cloudflare’s “Connect to Git” UI — this repo deploys via GitHub Actions + Wrangler instead.

### Auto-deploy on push (recommended)

Add these [GitHub repo secrets](https://github.com/sanjeed5/cursor-slidev/settings/secrets/actions):

| Secret | Value |
|--------|--------|
| `CLOUDFLARE_API_TOKEN` | API token with **Account → Cloudflare Pages → Edit** |
| `CLOUDFLARE_ACCOUNT_ID` | From `pnpm exec wrangler whoami` |

Push to `main` → `.github/workflows/cloudflare-pages.yml` builds and uploads `dist/`.

### Manual deploy

```bash
pnpm cf:login    # once — Cloudflare OAuth in browser
pnpm cf:deploy   # build + upload dist
```

Custom domain `cursor.sanjeed.in` is set in Cloudflare Pages → `cursor-slidev` → Custom domains.

## Agent context

See [AGENTS.md](./AGENTS.md). Brand skill: `.agents/skills/cursor-brand/`.
