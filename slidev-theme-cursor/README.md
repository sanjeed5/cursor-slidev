# slidev-theme-cursor

Cursor-branded [Slidev](https://github.com/slidevjs/slidev) theme — dark palette, Cursor Gothic, custom layouts.

Used by the talk deck in the repo root (`slides.md`).

## Use in this repo

The root `package.json` links this theme locally:

```yaml
theme: slidev-theme-cursor
```

```bash
pnpm install
pnpm dev
```

## Layouts

| Layout | Purpose |
|--------|---------|
| `cover` | Title slide shell |
| `intro` | Section intro |
| `presenter` | Speaker intro (used with `PresenterSlide.vue`) |
| `visual` | Image-forward slides |
| `end` | Closing slide (used with `EndSlide.vue`) |

Built-in Slidev layouts (`default`, `two-cols`, `full`, etc.) also work.

## Deck components

Slide content components live in the repo root `components/` directory (not in the theme package):

- `CoverHero`, `PresenterSlide`, `EndSlide`
- `AgentChannels`, `ComposerStats`, `SocialGrid`, `VisualBullets`
- `GlowBackground`

## Theme development

```bash
cd slidev-theme-cursor
pnpm install
pnpm dev    # previews example.md
```

Fonts and lockups: `assets/`
