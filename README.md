# Cursor talk deck (Slidev)

Reusable Cursor talk deck. **Not event-specific.** Content lives in `slides.md` — no JSON sync layer.

## Present

```bash
pnpm install
pnpm dev
# → http://localhost:3030
```

Edit **`slides.md`** directly before a talk.

## Presenter

- **Sanjeed** — AI engineer & consultant

Photo: `assets/sanjeed.jpg`

## Social proof (optional refresh)

Tweet data: `assets/tweets/tweets.json`  
Slide layout: `SocialGrid` in `slides.md` (pick which 4 PNGs to show)

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

Software Factory — live terminal demo in `demo/` (separate Node project from Slidev). Supervisor + Plan-and-Execute + Reflexion via `@cursor/sdk`.

## Deploy

Push to `main` → GitHub Pages (see `.github/workflows/deploy.yml`).

## Agent context

See [AGENTS.md](./AGENTS.md). Brand skill: `.agents/skills/cursor-brand/`.
