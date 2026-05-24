# Tweet cards

PNG cards for the social slide (`SocialGrid` in `slides.md`).

```bash
pnpm sync:social           # refresh assets/tweets/tweets.json from X
pnpm render:tweets         # regenerate PNGs
pnpm render:tweets:sample  # Marc Lou fixture — compare to a native X screenshot
```

Cards match X dark mode: flat black background, header actions, views/bookmark/share, green repost + pink like counts.

The slide shows whichever 4 screenshots you list in `slides.md` — reorder there, not in JSON.
