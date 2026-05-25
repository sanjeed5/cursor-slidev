# Cursor talk deck (Slidev)

Reusable Cursor talk deck. **Not event-specific.** Content lives in `slides.md` — no JSON sync layer.

## Share

| | URL |
|--|-----|
| **Audience** | https://cursor.sanjeed.in |
| **Presenter** | https://cursor.sanjeed.in/presenter |

Hosted on **Cloudflare Pages** (Git-connected project).

## Present

```bash
pnpm install
pnpm dev
# → http://localhost:3030
```

Edit **`slides.md`**, push to `main` — Cloudflare builds and deploys automatically.

## Deploy (Cloudflare Pages + GitHub)

In Cloudflare → **Workers & Pages** → your project → **Settings** → **Build**:

| Setting | Value |
|---------|--------|
| **Build command** | `pnpm run build` |
| **Build output directory** | `dist` |
| **Deploy command** | `pnpm run pages:deploy` |
| **Node.js version** | `22` |

Git-connected Pages **already publishes `dist/`** after the build step. The deploy command is a required no-op — do **not** run `wrangler pages deploy` here; the CI `CLOUDFLARE_API_TOKEN` lacks Pages upload permissions and will fail with error `10000`.

For manual uploads from your laptop, use `pnpm cf:deploy` (OAuth via `pnpm cf:login`).

Custom domain: **cursor.sanjeed.in** → Pages → Custom domains.

### Manual deploy (optional)

If you ever need to upload without Git:

```bash
pnpm cf:login
pnpm cf:deploy
```

## Project layout

```
slides.md              ← deck content
components/            ← Vue slide components
public/                ← images, tweet PNGs, lockups
wrangler.toml          ← Pages output dir hint (dist/)
slidev-theme-cursor/   ← linked theme
demo/                  ← @cursor/sdk terminal demo (separate Node project)
```

## Presenter

- **Sanjeed** — AI Engineer/Consultant

Photo: `public/sanjeed.jpg`

## Social proof (optional refresh)

```bash
pnpm sync:social      # refresh public/tweets/tweets.json from X API
pnpm render:tweets    # regenerate PNG cards (Playwright)
```

## SDK live demo

```bash
cd demo && npm install && npm run demo
```

Requires `CURSOR_API_KEY`.

## Agent context

See [AGENTS.md](./AGENTS.md).
