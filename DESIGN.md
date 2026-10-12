# fika.pm — Design System

> Only agreed decisions are recorded here. Updated 12 Oct 2026 to match the fika.pm Preview (version 14).

## Principles

- **Monochrome UI.** Graphite on Oat milk. The only chromatic colours are decorative: the pastel sprinkles and the yellow highlighter. Neither is ever used for text, links or controls.
- **Buttons do things; links go places.** Solid buttons are for actions (copy, share, filter). Links navigate. One deliberate exception: a link may be *styled* as a solid button when it is the main way forward from a section ("View all lessons →", "View Work →"). It stays an `<a>`.
- **Pills are labels or toggles, never buttons.** Topic tags, filter chips and "Coming soon" tags are pills.
- **Bite-sized everywhere.** Short headings, short paragraphs, one idea per block.

### Copy rules

- Headings have no full stops.
- Sentence case for headings ("Recent lessons", "All lessons", "About me"). **Named features keep their capitals:** Product Lessons, The Take Away, Show the Receipts.
- "fika.pm" is plain lowercase text in paragraphs. Bungee (the wordmark face) only in labels, credits, the footer heading and the two hero/About headings that name the site (see *Brand name in text*).
- No companies or industries in short bios; they belong in the About timeline and the Work page.
- "Bite‑sized" always uses a non-breaking hyphen (U+2011) so it never splits across lines.

## Colours

| Role | Name | Light | Dark | Token | Use |
|---|---|---|---|---|---|
| Background | Oat milk / Night | `#f5efe6` | `#15171a` | `--color-bg` | Page background |
| Text | Graphite / Fog | `#1b1e22` | `#f2f3f4` | `--color-text` | Headings, body |
| Muted text | Pewter / Silver | `#555c64` | `#a7adb4` | `--color-text-muted` | Dates, captions, secondary lines |
| Deck & role line | Iron | `#43494f` | `#bdc2c8` | `--color-deck` | Supporting line under an h1; author role line; timeline dates |
| Border | Mist / Shadow | `#dde0e3` | `#2e3238` | `--color-border` | Hairlines only |
| Control border | Graphite / Fog | `#1b1e22` | `#f2f3f4` | `--color-border-strong` | Pill outlines, focus rings |
| Surface | White / Coal | `#ffffff` | `#202327` | `--color-surface` | Cards (author card, sign-off) |
| Button hover | — | `#3a3f46` | `#c9ced3` | `--color-button-hover` | Solid button hover fill |
| Nav bar | Graphite | `#1b1e22` | `#1b1e22` + Shadow outline | `--color-nav-bg` / `--color-nav-fg` | Floating nav, filter panel |
| Take Away card | Espresso / Oat milk | `#1b1e22` | `#f5efe6` | `--color-takeaway` (+ `-fg`, `-muted`) | Inverted card at the end of a lesson |
| Receipts card | Paper | `#fbf8f3` | `#202327` | `--color-receipts` (+ `-border` `#dcd5c9` / `#2e3238`) | Show the Receipts card |

- **Highlighter:** yellow `#f5cf3f` at 75% (dark: mustard `#b8901c` at 55%). Decorative.
- **Sprinkles:** rose `#eaa0b0`, butter `#f1d278`, mint `#8cd2af`, lilac `#b0a2e8`, sky `#8bc0ea` (slightly lighter in dark mode). Decorative.

### Interaction

- **Links:** Graphite, underlined (offset 3px); hover thickens the underline. Nav and list-title links underline on hover only.
- **Solid buttons:** opposite tone of their background, `--radius-button` (12px), no border, Public Sans 600 16px, 46px tall (40px on phones). Hover → `--color-button-hover`; press scales to 0.96. A trailing arrow nudges 3px on hover.
- **Focus:** 2px `--color-border-strong` outline, 2px offset, on everything interactive.
- **Disabled / not yet built:** shown as muted text with a **Coming soon** tag, `aria-disabled="true"`, not a link. Nothing on the site links to an unbuilt page.

### Dark mode

Follows the reader's device by default; the **sun/moon switch** in the nav (and as the last row of the phone menu) overrides it and is remembered per browser. Every token keeps its name; only values change.

## Typography

| Family | Use | Weights | Token |
|---|---|---|---|
| Instrument Serif | Headings, standfirst, deck, card titles | 400, 400 italic | `--font-serif` |
| Public Sans | Body, UI, labels | 400, 500, 600, 700 | `--font-sans` |
| IBM Plex Mono | Role lines, card labels, receipts, timeline dates, soon tags | 500 | — |
| Bungee | Wordmark and "fika.pm" in labels | 400 | `--sub-font` |

Loaded from Google Fonts — only these four families.

- **Bold serif:** Instrument Serif has no bold, so headings that need weight use `-webkit-text-stroke: ~0.028–0.03em currentColor; paint-order: stroke fill`. Used on: every h1, section titles, lesson h2s, card titles.
- **Scale:** h2 `clamp(1.5rem, 1.25rem + 1.25vw, 2rem)`; body 1.125rem / 1.6–1.7; small 0.9375rem; label 0.75rem uppercase +0.08em.
- **Hero h1:** desktop size `max(42px, min(99px, 7.83vw))` (`--hero-size-n: 99`), 42px below 64rem, line-height 1.05, −0.01em.
- **Deck:** Instrument Serif in Iron, 50% of the h1 size (min 20px), 12px below the h1 (`--deck-scale: 50`, `--deck-gap: 12px`).

## Spacing, layout, radius

- Spacing: 8px base — `--space-1` 8 · `-2` 16 · `-3` 24 · `-4` 32 · `-5` 48 · `-6` 64 · `-7` 96; `--space-section` `clamp(3rem, 2rem + 4vw, 6rem)`.
- **One content edge:** every section, the nav bar and the footer share the `--wide` container (72rem / 1152px) with `--gutter` `clamp(1rem, 5vw, 2rem)`. Right edges line up.
- **Reading width:** `--post-w` 44.75rem (716px) for lesson text, post titles and About body.
- **Feature card width:** `--feature-card-w` 27rem (432px) — the footer author card.
- Breakpoints: 40rem and 64rem (plus 64–80rem where the nav tightens its gaps to 20px).
- Radius: `--radius-button` 12px · `--radius-card` 16px · `--radius-pill` 100px · `--radius-nav` 999px · `--radius-sm` 4px.

### Shadows

No shadows, with one exception: the **floating nav bar** (`--nav-shadow`) and the **donut logo** (`--logo-shadow`, a `filter: drop-shadow` so no halo) carry a soft shadow so they read as floating over scrolling content. Stronger in dark mode.

## Icons and marks

Text glyphs, no icon font: **→** navigate onward · **←** back · **↗** opens another site in a new tab · **↓/↑** expand/collapse · **✓** selected filter chip · sun/moon in the dark mode switch · **■** end-of-text tombstone.

## Pages

| Page | Route | In nav | Status |
|---|---|---|---|
| Home | `#home` | Home | Live |
| Product Lessons | `#writing` | Product Lessons | Live |
| A lesson | `#lesson` | — | Sample: "Why roadmaps lie" |
| About me | `#about` | About me · Coming soon | Built, not linked |
| Work (full CV) | — | Work · Coming soon | Not built |

Secondary pages (Product Lessons, lesson, About) hide the curved FIKA.PM label. Product Lessons and lessons also hide the portrait; About keeps it.

## Header & navigation

- Donut logo (spins every 20.5s, stops with reduced motion) on the left; floating Graphite pill on the right, right edge aligned with the content.
- Desktop: **Home · Product Lessons · About me (Coming soon) · Work (Coming soon) · dark mode switch.** Current page underlined (`aria-current`).
- Below 64rem: the pill shows **Menu**; the panel lists the same items with **Dark mode** as the last row.
- Sticky 24px from the top, `--z-header` 100, soft nav shadow.
- **Subscribe:** removed until the sign-up flow exists. It returns as the solid Fog button at the end of the bar.

## Home

1. **Masthead:** curved FIKA.PM (Bungee on an arc) · h1 **"Bite‑sized product lessons for PMs"** (bold) · hedcut portrait. Sprinkles drift behind; text and portrait stay clear of them. 32px (`--hero-bottom`) to the next section.
2. **Standfirst:** full content width, hairline above. "**FIKA.PM** is a growing collection of bite‑sized product lessons. Drawn from years of leading empowered product teams, they cover craft, frameworks, first principles and industry insight." Opening fika.pm in Bungee at 0.71em with the highlighter.
3. **Recent lessons:** highlighted section title, the three newest lessons (date label + serif title), then **"View all lessons →"** (link styled as a solid button).

## Product Lessons page

- h1 **"Bite‑sized Product Lessons"** (bold). No deck.
- Section row: **"All lessons"** (highlighted) on the left, **Filter by topic** on the right.
- **The heading follows the filter:** All lessons → "Roadmap lessons" → "Roadmap and Framework lessons" → "Lessons on 3 topics".
- **Filter by topic:** a solid Graphite button that expands like the nav menu into a panel of chips (All, Roadmap, Framework, Retention, Onboarding, Payments, Claude). Multi-select; selected chips invert and show ✓; a count badge appears on the button; **Close** sits on the right when open. No result count. Empty state: "No lessons on … yet."
- List: all lessons, full width, hairlines between; titles at reading width.

## Lesson page

1. **← Back to Product Lessons**
2. h1 (bold) + deck in Iron.
3. **Meta:** date · topic tag pill(s). Tags link to Product Lessons pre-filtered.
4. **Body:** hairline above; h2 + paragraphs at reading width; 18px / 1.7. **500 words or fewer, text only, no images.** Ends with a ■ tombstone after the last word.
5. **The Take Away:** one inverted card (Espresso in light, Oat milk in dark), no section heading. Mono label "THE TAKE AWAY", serif title, one or two sentences.
6. **Show the Receipts:** Paper card; each source as a CLI line — `$ open` + underlined title + ↗, then `# author, publisher · domain`. Opens in a new tab.
7. **Sign-off:** surface card with faint drifting sprinkles; "*Until the next fika…*" (italic serif, highlighted); "Share this lesson with a colleague or friend."; solid **Copy link to this lesson** button (becomes **Share this lesson** with the native share sheet on touch devices). Confirms "Link copied ✓".

## About page (built, not yet linked)

- Masthead: h1 **"Hi, I'm Alex"** + deck "I've been working in tech as a product manager for 15 years. Building in Stockholm, Sweden via San Francisco, California." Portrait on the right; on phones it sits above the text, smaller.
- **What is FIKA.PM about?** — fika.pm in Bungee with the highlighter (the one highlight on the page body). Then, at reading width, with key phrases in plain bold:
  - intro paragraph;
  - **Product Lessons** / **These topics** paragraph, then three topic pills (Roadmap, Framework, Retention) linking to the filtered list;
  - **body of each lesson** paragraph (500 words, text only);
  - **At the end** paragraph, then three dark format cards: Bite‑sized · The Take Away · Show the Receipts.
- **About me** + **View Work →** on the right: a vertical timeline — dot per role joined by a line; mono date, serif title, company in bold, area of work in muted text. First three roles, then the line fades and **Show 5 more roles ↓** expands (and **Show fewer roles** collapses).
- **Sign-off:** "Until the next fika…" + "Say hej. I'd love to hear what you're working on." No buttons; contact is in the footer directly below.

## Footer (every page)

- Hairline on top of the content edge; tall and airy (128px above, 160px below on desktop).
- **Column 1:** FIKA.PM (Bungee) heading; Home, Product Lessons, About me (Coming soon), Work (Coming soon).
- **Column 2:** "Contact"; solid **Copy my email: alex@fika.pm** button (→ "Email copied ✓"); **LinkedIn ↗** link to the profile.
- **Column 3:** the **author card** — animated avatar (head turns left/forward/right on a 12s loop), "Alexander Horré", role line in Iron mono ("AUTHOR OF FIKA.PM / SENIOR PRODUCT MANAGER"), bio: "After 15 years as a PM, I'm sharing how I think about the craft. Each lesson pairs hands-on experience with the industry's evolving thinking on strategic and tactical product management." 27rem wide on desktop.
- All three column headings share one 36px line box so they align.
- **Legal row:** "© 2026 Alexander Horré" left · "Stockholm, Sweden · San Francisco, California" right.
- Below 64rem the columns stack: navigation, contact, author card.

## Brand name in text

- **Labels and credits:** "fika.pm" in Bungee via `.brand-inline`, inheriting size and colour.
- **Paragraphs:** plain text.
- **Standfirst and About heading:** Bungee (0.71em in the standfirst, 0.82em in the About h2) plus the highlighter. These are the only places the brand font sits inside running text or a heading.

## Highlighter

Hand-drawn marker swipe behind the lower part of the text; draws in once, left to right, when it scrolls into view (static with reduced motion). **At most one per section:** the standfirst's fika.pm, section titles (Recent lessons / All lessons), the About heading's fika.pm, and "Until the next fika…".

## Coming soon tag

IBM Plex Mono 500, 10px, uppercase +0.08em, 20px tall pill with a 1px currentColor outline at 75% opacity. Sits after a disabled item's label.

## Motion

All motion stops or becomes static with `prefers-reduced-motion`: logo spin, masthead and sign-off sprinkles, highlighters, avatar head turn, filter and menu panels, timeline expand, button nudges.

## Open items

- Work page (full CV), Subscribe flow, real lesson pages beyond the sample.
- Real URLs for each lesson (the share button currently uses the sample's).
