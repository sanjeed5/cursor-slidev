# Cursor talk deck (Slidev)

Reusable Cursor talk deck. **Not event-specific.** Content lives in `slides.md` — no JSON sync layer.

## Share

| | URL |
|--|-----|
| **Audience** | https://cursor.sanjeed.in |
| **Presenter** | https://cursor.sanjeed.in/presenter |
| **Fallback** | https://cursor-slidev.pages.dev |

Hosted on **Cloudflare Pages** (project: `cursor-slidev`).

## Present

```bash
pnpm install
pnpm dev
# → http://localhost:3030
```

Edit **`slides.md`** directly before a talk. Re-deploy when ready:

```bash
pnpm cf:deploy
```

## Project layout

```
slides.md              ← deck content
components/            ← Vue slide components
public/                ← images, tweet PNGs, lockups
scripts/deploy-cf-pages.mjs ← CF Pages deploy
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

**First-time setup** (already done for this repo):

```bash
pnpm cf:login    # once — Cloudflare OAuth in browser
pnpm cf:deploy   # build + upload dist
```

**After slide edits:** run `pnpm cf:deploy` again.

| Variable | Default | Purpose |
|----------|---------|---------|
| `CF_PAGES_PROJECT` | `cursor-slidev` | Pages project name |
| `CF_CUSTOM_DOMAIN` | `cursor.sanjeed.in` | Custom domain (API bind) |
| `CLOUDFLARE_API_TOKEN` | — | Optional: auto-add domain via API |

Custom domain is configured in Cloudflare Pages → `cursor-slidev` → Custom domains.

## Agent context

See [AGENTS.md](./AGENTS.md). Brand skill: `.agents/skills/cursor-brand/`.
