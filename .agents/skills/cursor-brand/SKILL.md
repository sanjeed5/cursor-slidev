---
name: cursor-brand
description: Produce on-brand designs, visualizations, social posts, slides, and videos for Cursor using the official marks, palette, typeface (Cursor Gothic), and voice. Use whenever designing or writing anything Cursor-branded — tweets, event assets, graphics, end cards, loading states, presentations, landing pages, or any artifact that carries the Cursor name.
---

# Cursor Brand

Distilled from the official Cursor Community Brand Guidelines (Sept 2025). Everything you need to produce on-brand work is in this one file.

## Core identity

- Understated, architectural, confident. Warm monochrome — not cold.
- Closer to Linear / Vercel / Apple than a typical dev-tool startup.
- The brand's color is **quietness**. Let content carry meaning, not saturation.

## Logos

Logos are Cursor's most visible marker and consist of the cube and wordmark. Use at modest sizes with enough breathing room to achieve a refined feeling.

### Marks available
- **Cube** — volumetric, sculptural; a box with a folded white page inside. Not an arrow/pointer.
- **Wordmark** — "cursor" set in Cursor Gothic.
- **Lockups** — horizontal & vertical, 2D and 2.5D.
- **Avatars** — circle and square.
- **App icons** — 2D, 2.5D, 3D.

### Do
- Use the provided horizontal and vertical lockups.
- Keep clear space around the cube ≥ ⅓ cube width.
- Primarily use the 2D version — reserve 2.5D/3D for hero moments.
- Use logos with restraint and modesty.

### Don't
- Don't create your own logo lockups.
- Don't crowd the logo — give it space to breathe.
- Don't create custom patterns with the logo.
- Don't display the logo in a context where it feels oversized.
- Don't recolor the marks or redraw them — always embed the source SVG.

### Asset index
Under `assets/logos/`:

| Path | Contents |
|---|---|
| `General Logos/Cube/SVG/` | Cube mark — 2D dark, 2D light, 2.5D |
| `General Logos/Wordmark/SVG/` | "cursor" wordmark — dark, light |
| `General Logos/Lockup Horizontal/SVG/` | Cube + wordmark horizontal — 2D/2.5D × dark/light |
| `General Logos/Lockup Vertical/SVG/` | Cube + wordmark stacked — 2D/2.5D × dark/light |
| `Avatars/Circle/PNG/` | Circular social avatars — 2D variants × dark/light/white |
| `Avatars/Square/PNG/` | Square app-tile avatars — 2D/2.5D × dark/light/white |
| `App Icons/PNG/` | App icons — 2D, 2.5D, 3D × dark/light |

SVGs are canonical for embedding. PNGs exist only where there is no SVG source (avatars, app icons).

## Color

Neutral and understated, with a single bright-orange accent. Use neutrals as the base, and keep the accent sparing so it feels sharp and intentional.

### Accent
| Hex | RGB | HSL |
|---|---|---|
| `#f54e00` | 245,78,0 | 19,100%,48% |

Same in light and dark. Use once per composition, intentionally.

### Light theme
| Token | Hex | RGB | HSL | Role |
|---|---|---|---|---|
| `bg` | `#f7f7f4` | 247,247,244 | 60,16%,96% | Main background |
| `fg` | `#26251e` | 38,37,30 | 53,12%,13% | Foreground / text (secondary at 60% opacity) |
| `card` | `#f2f1ed` | 242,241,237 | 48,16%,94% | Default card |
| `card-01` | `#f0efeb` | 240,239,235 | 48,14%,93% | +1% darker |
| `card-02` | `#ebeae5` | 235,234,229 | 50,13%,91% | +2.5% darker |
| `card-03` | `#e6e5e0` | 230,229,224 | 50,11%,89% | +5% darker |
| `card-04` | `#e1e0db` | 225,224,219 | 50,9%,87% | +7.5% darker |

### Dark theme
| Token | Hex | RGB | HSL | Role |
|---|---|---|---|---|
| `bg` | `#14120b` | 20,18,11 | 47,29%,6% | Main background |
| `fg` | `#edecec` | 237,236,236 | 0,3%,93% | Foreground / text (secondary at 60% opacity) |
| `card` | `#1b1913` | 27,25,19 | 45,17%,9% | Default card |
| `card-01` | `#1d1b15` | 29,27,21 | 45,16%,10% | +1% lighter |
| `card-02` | `#201e18` | 32,30,24 | 45,14%,11% | +2.5% lighter |
| `card-03` | `#26241e` | 38,36,30 | 45,12%,13% | +5% lighter |
| `card-04` | `#2b2923` | 43,41,35 | 45,10%,15% | +7.5% lighter |

### 2.5D cube facet gradient
`#43413c` · `#55544f` · `#72716d` · `#d6d5d2` · `#ffffff`

Darkest to lightest. These are internal to the cube mark — don't use them as general UI colors.

### Discipline
- No pure `#000` or `#fff` — always the warm near-black / off-white.
- No blue, no green, no gradients beyond the cube's own.
- The accent is a scalpel, not a highlighter.
- When in doubt, the warmer value is more on-brand than the cooler/flatter one.

## Typography

**Cursor Gothic** is the official typeface. Use whenever possible.

- Web (WOFF2): [assets/fonts/WEB/WOFF2/](assets/fonts/WEB/WOFF2/)
- Desktop (OTF): [assets/fonts/DESKTOP/OTF/](assets/fonts/DESKTOP/OTF/)
- Weights: Regular, Bold, Italic, BoldItalic

### Web embed
```css
@font-face {
  font-family: "Cursor Gothic";
  src: url("./fonts/CursorGothic-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Cursor Gothic";
  src: url("./fonts/CursorGothic-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
}
```

### Casing & punctuation
**Sentence case** for all headings, labels, and titles outside the Cursor IDE. No need to capitalize words outside of proper nouns.

Do:
- "Improved Agent tools, steerability, and usage visibility"
- "Bringing the Cursor Agent to Linear"
- "New API key"
- "Only run when mentioned"

Don't:
- "Improved Agent Tools, Steerability, and Usage Visibility"
- "New API Key"
- "Only Run When Mentioned"

## Voice & tone

Cursor speaks with **quiet confidence**: clear, concise, and approachable. Explain things simply, without hype or excess. Technical when needed, light when possible. Always professional, sometimes witty, **never forced**.

### Do
- Say things simply and directly.
- Be clear and concise, but complete.
- Stay professional and considerate.

### Don't
- Don't oversell or exaggerate.
- Don't try too hard to be funny or casual.
- Don't hide meaning in jargon or corporate speak.

## Photography

Warm, not overproduced, and precise in intent. Use natural light and candid shots to ground Cursor in real energy. Film and disposable cameras introduce spontaneity, giving cultural moments their authentic texture.

### Do
- Shoot with warm, natural tones.
- Utilize natural light when possible.
- Embrace candid and spontaneous shots.

### Don't
- Don't over-produce or over-light.
- Don't use cold / corporate stock imagery.
- Don't let set-dressing flatten the texture of a real moment.

## Motion

Official animations ship in the full `Cursor_Logo_Animations.zip` from the Cursor community brand pack (~937 MB, not vendored here). Stills preserved in [assets/animations-preview/](assets/animations-preview/).

Use motion where it adds delight; avoid overuse or distracting loops. Motion should be slow, soft, and architectural — no bounce, no snappy playfulness.

### Animation families
| Family | Use |
|---|---|
| `LOGO_ONLY/` | Cube-only reveal |
| `LOCKUP_CROP/` | Wordmark + cube lockup reveal |
| `END_CARD/` | Video outro (16:9, 9:16, 4:5) |
| `END_CARD_STATIC/` | End card with held final frame |
| `LOADING_ANIMATION/` | Looping loading state |

### Style glossary
- `CLEAN` — flat 2.5D cube, graphic look.
- `PHYSICAL` — rendered 3D cube with soft lighting and materials.
- `COLOR` — full warm-monochrome tonal gradient (still no hue).
- `B_W` — strict two-tone.

## Producing raster assets (tweets, posts, cards)

Author compositions as self-contained HTML and render to PNG with headless Chrome. This keeps everything in vector + real Cursor Gothic until the final raster.

### Canvas sizes
- **X/Twitter single image:** 1600×900 (16:9) — fills the full timeline width. Square (1:1) works but gets padded smaller in-feed.
- Render at `--force-device-scale-factor=2` for crisp @2× output.

### Font embed
`@font-face` loading from `../.agents/skills/cursor-brand/assets/fonts/WEB/WOFF2/*.woff2` works inside Chrome headless via `file://` — confirmed. Set `font-display: block` so the screenshot waits on the font.

### Headless render recipe
```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --window-size=1600,900 \
  --virtual-time-budget=2000 --default-background-color=14120bff \
  --screenshot="out.png" "file:///abs/path/to/composition.html"
```

### Rules when pairing with tweet copy
- **Complement, don't duplicate.** If the tweet already carries the headline, the image should add something the tweet can't — dates, schedule, schema, geography, numbering. Don't re-render the announcement sentence.

## Pre-ship checklist

- [ ] Logo is the official SVG — not redrawn, not recolored.
- [ ] Clear space around the cube is ≥ ⅓ cube width. Logo sized modestly (e.g. ~70–100px tall on a 900px canvas).
- [ ] Background is warm (`#14120b`/`#1b1913` dark; `#f7f7f4`/`#f2f1ed` light), not pure black/white.
- [ ] Text is Cursor Gothic; fall back to a geometric sans only if the font can't load.
- [ ] Sentence case throughout.
- [ ] Accent `#f54e00` used at most once — or not at all.
- [ ] No extra colors beyond the documented palette. No gradients beyond the cube's own.
- [ ] Voice: quiet, direct, no hype.
- [ ] If the asset accompanies tweet/post copy, the image adds info rather than repeating the copy.

## Self-improvement loop

This skill should get sharper every time it's used. As a **final step** after any Cursor-branded deliverable, evaluate whether the interaction produced knowledge worth keeping.

### When to ask
Pause and ask the user if any of these are true:
- They gave feedback, corrected your output, or rejected an approach.
- They shared a reference (post, design, article) that shaped the work.
- You discovered a workflow, pattern, or constraint that isn't already in `SKILL.md`.
- A "don't" surfaced — something that looked brand-safe but wasn't.

Don't ask when the task was routine and the skill covered it — avoid trivial update churn.

### How to ask
One sentence, with clear options. For example:

> "Worth capturing for next time? I could (a) add a rule to `SKILL.md`, (b) save this as an example under `examples/`, (c) add the reference to `references.md`, or (d) skip — it's a one-off."

Distinguish **durable patterns** (capture) from **one-off preferences** (skip).

### Where to capture
- **Inline in `SKILL.md`** — for short, durable rules (one or two lines in the right section: Do/Don't, Voice, Motion, etc.).
- **`examples/<slug>/`** — for finished deliverables worth learning from. Include a one-paragraph `brief.md` (what was asked for, what constraints mattered) next to the final asset(s).
- **`references.md`** — for external links. Each entry: one line of context explaining *why* it's on-brand or instructive.

### How to apply the update
1. Propose the exact edit (diff-style) and get confirmation before writing.
2. Make the smallest change that preserves the lesson — don't rewrite sections.
3. If the user is working inside an installed copy of this skill (e.g. `~/.agents/skills/cursor-brand/`), also offer to open a PR against [`cursorcommunityled/cursor-brand`](https://github.com/cursorcommunityled/cursor-brand) so the learning flows back to the community.
4. Commit message style: `skill: <add|refine|warn> <what> — <one-line why>`.

The goal is a skill that reflects real, accumulated community practice — not a static brand dump.

## Asset map

```
.agents/skills/cursor-brand/
├── SKILL.md                        # you are here
└── assets/
    ├── logos/
    │   ├── General Logos/          # cube, wordmark, lockups (SVG — canonical, embed directly)
    │   ├── Avatars/                # social avatars (PNG only)
    │   └── App Icons/              # app icons (PNG only)
    ├── fonts/
    │   ├── WEB/WOFF2/              # Cursor Gothic for web
    │   └── DESKTOP/OTF/            # Cursor Gothic for design apps
    └── animations-preview/         # stills from the logo animations pack
```
