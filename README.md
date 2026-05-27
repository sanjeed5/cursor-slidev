# Cursor talk deck (Slidev)

Reusable Cursor talk deck. **Not event-specific.** Content lives in `slides.md`, no JSON sync layer.

## Share

| | URL |
|--|-----|
| **Audience** | https://cursor.sanjeed.in |
| **Presenter** | https://cursor.sanjeed.in/presenter |

Hosted on **Cloudflare Workers** (static assets from `dist/`).

## Present

```bash
pnpm install
pnpm dev
# → http://localhost:3030
```

Edit **`slides.md`**, push to `main`. Cloudflare builds and deploys automatically (once Git is connected).

## Deploy (Cloudflare Workers + GitHub)

Cloudflare merged Pages into Workers. There is **no separate Pages tab**. Use **Import a repository**.

### One-time dashboard setup

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application**
2. Choose **Import a repository** (not “Hello World” template)
3. GitHub → `sanjeed5/cursor-slidev`, branch `main`
4. Worker name must match `wrangler.toml`: **`cursor-slidev`**
5. **Settings → Builds**:

| Setting | Value |
|---------|--------|
| **Build command** | `pnpm run build` |
| **Deploy command** | `pnpm exec wrangler deploy` |
| **Node.js version** | `22` |

6. **Domains** tab → add custom domain **`cursor.sanjeed.in`**

Push to `main` → CF runs build → `wrangler deploy` uploads `dist/`.

`wrangler.toml` points at `./dist` with SPA fallback for `/presenter` and deep links.

### Manual deploy (optional)

```bash
pnpm cf:deploy
```

## Project layout

```
slides.md              ← deck content
components/            ← Vue slide components
public/                ← images, tweet PNGs, lockups
wrangler.toml          ← Worker name + static assets (dist/)
slidev-theme-cursor/   ← linked theme
demo/                  ← @cursor/sdk terminal demo (separate Node project)
```

See **`AGENTS.md`** for slide order, tweet pipeline, and SDK demo.

## Social tweets

```bash
pnpm sync:social      # refresh tweets.json from X API
pnpm render:tweets    # PNG cards for slides
```

Reorder tweets in `slides.md` → `SocialGrid` props.

## SDK demo

```bash
cd demo && npm install && npm run demo
```

Needs `CURSOR_API_KEY` for live runs.
