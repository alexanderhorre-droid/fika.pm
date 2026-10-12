# fika.pm — Design System

> Only agreed decisions are recorded here. Updated 12 Oct 2026 to match the live site at https://fika.pm (built from the fika.pm Preview, version 14, plus the decisions made while building it).

### What changed while building (12 Oct 2026)

- **Topics come from the lessons.** No fixed topic list: tags and filter chips are whatever published lessons list under `topics:`.
- **Sprinkles on every page**, behind the top section, at the home masthead's density; brighter colour set for the page sprinkles.
- **Home headline always two lines** on every screen; its size follows its column.
- **Fonts self-hosted** (same Google Fonts files) with size-matched fallbacks: no layout shift.
- **Real routes** (`/`, `/lessons`, `/lessons/<slug>`), a **404 page**, and **preview-only pages** (About, drafts, test pages never reach the live site).
- **Footer bio** rewritten. **Dates** read "7 Oct 2026". **Receipts** show the site's host only.
- **Share button** copies the link of the site it's on. **Filter** keeps its selection in the address.
- **Accessibility:** one header landmark, phone menu focus order fixed, 44px tap areas everywhere.
- **Search and sharing:** sharing image and tags, sitemap, RSS, robots.txt. **Domains:** fika.pm, with www and http forwarding to https://fika.pm.

## Principles

- **Monochrome UI.** Graphite on Oat milk. The only chromatic colours are decorative: the pastel sprinkles and the yellow highlighter. Neither is ever used for text, links or controls.
- **Buttons do things; links go places.** Solid buttons are for actions (copy, share, filter). Links navigate. One deliberate exception: a link may be *styled* as a solid button when it is the main way forward from a section ("View all lessons →", "View Work →"). It stays an `<a>`.
- **Pills are labels or toggles, never buttons.** Topic tags, filter chips and "Coming soon" tags are pills. Topic tags and filter chips are sentence case ("Roadmap"), never uppercase, even beside the uppercase date label; only the Coming soon tag is uppercase.
- **Bite-sized everywhere.** Short headings, short paragraphs, one idea per block.
- **Nothing links to an unbuilt page, and nothing unapproved is public.** Unbuilt items are "Coming soon"; unapproved pages exist on preview links only (see *Publishing*).

### Copy rules

- Headings have no full stops.
- Sentence case for headings ("Recent lessons", "All lessons", "About me"). **Named features keep their capitals:** Product Lessons, The Take Away, Show the Receipts.
- "fika.pm" is plain lowercase text in paragraphs. Bungee (the wordmark face) only in labels, credits, the footer heading and the two hero/About headings that name the site (see *Brand name in text*).
- No companies or industries in short bios; they belong in the About timeline and the Work page.
- "Bite‑sized" always uses a non-breaking hyphen (U+2011) so it never splits across lines.
- **Dates:** day, three-letter month, year: "7 Oct 2026" (never "Sept").

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
| Filter chip | White / Night | `#ffffff` | `#15171a` | `--color-chip` | Chip fill (transparent inside the dark filter panel) |

- **Highlighter:** yellow `#f5cf3f` at 75% (dark: mustard `#b8901c` at 55%). Decorative.
- **Sprinkles, page (every page's top section):** `#f0899f`, `#f6cc4a`, `#5fcf98`, `#9d86f0`, `#5fb2f0` (dark: `#f59ab0`, `#f8d465`, `#74dba8`, `#ad99f4`, `#78c0f4`). Decorative.
- **Sprinkles, soft (sign-off card):** rose `#eaa0b0`, butter `#f1d278`, mint `#8cd2af`, lilac `#b0a2e8`, sky `#8bc0ea` (slightly lighter in dark mode; tokens `--sprinkle-*`). Decorative.

### Interaction

- **Links:** Graphite, underlined (offset 3px); hover thickens the underline. Nav and list-title links underline on hover only.
- **Solid buttons:** opposite tone of their background, `--radius-button` (12px), no border, Public Sans 600 16px, 46px tall (40px on phones). Hover → `--color-button-hover`; press scales to 0.96. A trailing arrow nudges 3px on hover.
- **Tap targets:** every control catches a tap at least 44px tall on phones. Controls drawn smaller (40px buttons, 38px filter button, 32px topic tags, list titles) get an invisible hit area beyond their edges; nothing looks different.
- **Focus:** 2px `--color-border-strong` outline, 2px offset, on everything interactive.
- **Disabled / not yet built:** shown as muted text with a **Coming soon** tag, `aria-disabled="true"`, not a link. Nothing on the site links to an unbuilt page.

### Dark mode

Follows the reader's device by default; the **sun/moon switch** in the nav (and as the last row of the phone menu) overrides it and is remembered per browser. Every token keeps its name; only values change. The choice is applied before the first paint, so there is no flash.

## Typography

| Family | Use | Weights | Token |
|---|---|---|---|
| Instrument Serif | Headings, standfirst, deck, card titles | 400, 400 italic | `--font-serif` |
| Public Sans | Body, UI, labels | 400, 500, 600, 700 | `--font-sans` |
| IBM Plex Mono | Role lines, card labels, receipts, timeline dates, soon tags | 500 | `--font-mono` |
| Bungee | Wordmark and "fika.pm" in labels | 400 | `--font-wordmark` |

Google Fonts files, downloaded at build time and served from fika.pm itself (Astro's font loader), with size-matched fallbacks so text never jumps when the fonts arrive. Instrument Serif, Public Sans and Bungee are preloaded; visitors' browsers never contact Google. Only these four families.

- **Bold serif:** Instrument Serif has no bold, so headings that need weight use `-webkit-text-stroke: ~0.028–0.03em currentColor; paint-order: stroke fill`. Used on: every h1, section titles, lesson h2s, card titles.
- **Scale:** h2 `clamp(1.5rem, 1.25rem + 1.25vw, 2rem)`; body 1.125rem / 1.6–1.7; small 0.9375rem; label 0.75rem uppercase +0.08em.
- **Hero h1:** desktop size `max(42px, min(99px, 7.83vw))` (`--hero-size-n: 99`), 42px below 64rem, line-height 1.05, −0.01em.
- **Home h1:** always two lines, "Bite‑sized product / lessons for PMs", on every screen. Its size follows the headline column so the first line fills it, capped at 99px: about 31px on a 390px phone, 63px on a tablet, 74px at 1024px, 99px on desktop.
- **Deck:** Instrument Serif in Iron, 50% of the h1 size (min 20px), 12px below the h1 (`--deck-scale: 50`, `--deck-gap: 12px`).

## Spacing, layout, radius

- Spacing: 8px base — `--space-1` 8 · `-2` 16 · `-3` 24 · `-4` 32 · `-5` 48 · `-6` 64 · `-7` 96; `--space-section` `clamp(3rem, 2rem + 4vw, 6rem)`.
- **One content edge:** every section, the nav bar and the footer share the `--wide` container (72rem / 1152px) with `--gutter` `clamp(1rem, 5vw, 2rem)`. Right edges line up.
- **Reading width:** `--post-w` 44.75rem (716px) for lesson text, post titles and About body.
- **Feature card width:** `--feature-card-w` 27rem (432px) — the footer author card.
- Breakpoints: 40rem and 64rem (plus 64–80rem where the nav tightens its gaps to 20px).
- Radius: `--radius-button` 12px · `--radius-card` 16px · `--radius-pill` 100px · `--radius-nav` 999px · `--radius-sm` 4px.

### Shadows

No shadows, with one exception: the **floating nav bar** (`--nav-shadow`) and the **donut logo** (`--logo-shadow`, a `filter: drop-shadow` so no halo) carry a soft shadow so they read as floating over scrolling content. Stronger in dark mode. The open filter panel uses the nav shadow too.

## Icons and marks

Text glyphs, no icon font: **→** navigate onward · **←** back · **↗** opens another site in a new tab · **↓/↑** expand/collapse · **✓** selected filter chip · sun/moon in the dark mode switch · **■** end-of-text tombstone.

## Pages

| Page | Route | In nav | Status |
|---|---|---|---|
| Home | `/` | Home | Live |
| Product Lessons | `/lessons` (filtered: `/lessons?topic=roadmap,framework`) | Product Lessons | Live |
| A lesson | `/lessons/<file name>` | — | Live: sample "Why roadmaps lie" |
| Page not found | any unknown address | — | Live |
| About me | `/about` | About me · Coming soon | Preview links only; to be redone |
| Work (full CV) | — | Work · Coming soon | Not built |

Secondary pages (Product Lessons, lesson, About, 404) hide the curved FIKA.PM label. Product Lessons, lessons and 404 also hide the portrait; About keeps it.

## Header & navigation

- Donut logo (spins every 20.5s, stops with reduced motion) on the left; floating Graphite pill on the right, right edge aligned with the content. Logo and pill together are the page's one header landmark.
- Desktop: **Home · Product Lessons · About me (Coming soon) · Work (Coming soon) · dark mode switch.** Current page underlined (`aria-current`).
- Below 64rem: the pill shows **Menu**; the panel lists the same items with **Dark mode** as the last row. Keyboard order on phones: Menu → panel items → Dark mode. Escape closes it and returns focus to Menu; a tap outside or a link also closes it.
- Bar height 56px on phones, 68px from 40rem (spec values; the prototype's tuner showed 68px everywhere).
- Sticky 24px from the top, `--z-header` 100, soft nav shadow.
- Without JavaScript the links show and the theme follows the device.
- **Subscribe:** removed until the sign-up flow exists. It returns as the solid Fog button at the end of the bar.

## Sprinkles

Pastel sprinkles drift slowly upward behind the top section of **every page**: the masthead on Home (and About), the header on Product Lessons, lessons and the 404 page.

- 5.5px long, 3.5px thick, rounded; page colour set (see *Colours*).
- **Depth matches the home masthead:** on every page the sprinkles reach at least as low as the homepage's at the same width (about 45% of the width + 100px, up to 605px), even when the page's header is shorter (Product Lessons). Longer headers (404) go further.
- **Density matches too:** 100 sprinkles in the home masthead; other depths get proportionally fewer or as many (never below 35%).
- **Clear of the text:** sprinkles go faint (20%) behind any text they cross. On Home and About that's the whole headline block; elsewhere only the actual text lines (headline, deck, back link, meta, "All lessons", list items) and the filter button, so sprinkles still show beside short lines.
- Never over the portrait: its silhouette is cut out of the sprinkle layer.
- Paused when scrolled out of view or in a background tab; drawn once and still with reduced motion. They sit outside the layout, so they never shift anything.
- The lesson sign-off card has its own faint sprinkles in the soft colour set.

## Home

1. **Masthead:** curved FIKA.PM (Bungee on an arc) · h1 **"Bite‑sized product / lessons for PMs"** (bold, always two lines) · hedcut portrait. Sprinkles drift behind; text and portrait stay clear of them. Never stacks. 32px (`--hero-bottom`) to the next section.
2. **Standfirst:** full content width, hairline above. "**FIKA.PM** is a growing collection of bite‑sized product lessons. Drawn from years of leading empowered product teams, they cover craft, frameworks, first principles and industry insight." Opening fika.pm in Bungee at 0.71em with the highlighter.
3. **Recent lessons:** highlighted section title, the three newest lessons (date label + serif title), then **"View all lessons →"** (link styled as a solid button).

## Lessons and topics

- **One Markdown file per lesson** in `src/content/lessons/`. The file name is the address: `why-roadmaps-lie.md` → `/lessons/why-roadmaps-lie`.
- **Frontmatter:** title, deck, date, topics, takeaway (title + text), receipts (title, author, url), draft.
- **House rules, enforced by the build:** the body is 500 words or fewer and text only. A longer body or any image stops the build with a message naming the file.
- **Topics are free-form.** Whatever a published lesson lists under `topics:` becomes a topic tag on that lesson and a filter chip on Product Lessons. Capitalisation doesn't matter ("roadmap", "Roadmap" are one topic); labels show with a capital first letter. Chips are listed A–Z. A topic used only by drafts has no chip on the live site.
- **Drafts** (`draft: true`) show on preview links only, never on fika.pm.
- **Content plan:** the sample lesson stays live until the first real lesson; then the sample and all eight placeholder drafts are deleted and the real lesson is the only one.

## Product Lessons page

- h1 **"Bite‑sized Product Lessons"** (bold). No deck. No hairline between the h1 and the list.
- Section row: **"All lessons"** (highlighted) on the left, **Filter by topic** on the right.
- **The heading follows the filter:** All lessons → "Roadmap lessons" → "Roadmap and Framework lessons" → "Lessons on 3 topics".
- **Filter by topic:** a Graphite bar that expands like the nav menu into a panel of chips: All, then one chip per topic used by the published lessons, A–Z. Multi-select (a lesson shows if it has any selected topic); selected chips invert and show ✓; a count badge appears on the button; **Close** sits on the right when open; Escape or a click outside closes it. No result count.
- **Shareable:** the address follows the selection (`/lessons?topic=roadmap,framework`), and such links open pre-filtered. Topic tags on lessons link here.
- **Empty state:** "No lessons on … yet." Only reachable from a link to a topic with no lessons, since every chip has at least one.
- Without JavaScript the full list shows and the filter is hidden.
- List: all lessons, newest first, full width, hairlines between; titles at reading width.

## Lesson page

1. **← Back to Product Lessons**
2. h1 (bold) + deck in Iron.
3. **Meta:** date · topic tag pill(s). Tags link to Product Lessons pre-filtered.
4. **Body:** hairline above; h2 + paragraphs at reading width; 18px / 1.7. **500 words or fewer, text only, no images.** Ends with a ■ tombstone after the last word.
5. **The Take Away:** one inverted card (Espresso in light, Oat milk in dark), no section heading. Mono label "THE TAKE AWAY", serif title, one or two sentences.
6. **Show the Receipts:** Paper card; each source as a CLI line — `$ open` + underlined title + ↗, then `# author, publisher · host` (the site's name only, e.g. `basecamp.com`). Opens in a new tab.
7. **Sign-off:** surface card with faint drifting sprinkles; "*Until the next fika…*" (italic serif, highlighted); "Share this lesson with a colleague or friend."; solid **Copy link to this lesson** button (becomes **Share this lesson** with the native share sheet on touch devices). Confirms "Link copied ✓". The link is the lesson's address on whichever site it's opened from (fika.pm when live).

## Page not found (404)

- Shown for any address that doesn't exist, with a real "not found" status.
- Mono label "404 · Page not found"; h1 **"Nothing brewing here"**; deck "This page doesn't exist, or it has moved. Try the lessons instead."; **View all lessons →** (link styled as a solid button) and a plain **Go to the homepage** link. Usual nav and footer.

## About page (preview links only; to be redone)

- Masthead: h1 **"Hi, I'm Alex"** + deck "I've been working in tech as a product manager for 15 years. Building in Stockholm, Sweden via San Francisco, California." Portrait on the right; on phones it sits above the text, smaller (44%).
- **What is FIKA.PM about?** — fika.pm in Bungee with the highlighter (the one highlight on the page body). Then, at reading width, with key phrases in plain bold:
  - intro paragraph;
  - **Product Lessons** / **These topics** paragraph, then three topic pills (Roadmap, Framework, Retention) linking to the filtered list. When About is published, these should come from the published lessons too;
  - **body of each lesson** paragraph (500 words, text only);
  - **At the end** paragraph, then three dark format cards: Bite‑sized · The Take Away · Show the Receipts. On phones the cards scroll sideways one at a time (keyboard-scrollable).
- **About me** + **View Work** shown as "Coming soon" (not a link) until the Work page exists: a vertical timeline — dot per role joined by a line; mono date, serif title, company in bold, area of work in muted text. First three roles, then the line fades and **Show 5 more roles ↓** expands (and **Show fewer roles** collapses). All roles show without JavaScript.
- **Sign-off:** "Until the next fika…" + "Say hej. I'd love to hear what you're working on." No buttons; contact is in the footer directly below.

## Footer (every page)

- Hairline on top of the content edge; tall and airy (128px above, 160px below on desktop).
- **Column 1:** FIKA.PM (Bungee) heading; Home, Product Lessons, About me (Coming soon), Work (Coming soon).
- **Column 2:** "Contact"; solid **Copy my email: alex@fika.pm** button (→ "Email copied ✓" for 2 seconds; if copying is blocked the button shows the address to select); **LinkedIn ↗** link to the profile, new tab.
- **Column 3:** the **author card** — animated avatar (head turns left/forward/right on a 12s loop, pauses on hover), "Alexander Horré", role line in Iron mono ("AUTHOR OF FIKA.PM / SENIOR PRODUCT MANAGER"), bio: "15 years in product management, distilled into short lessons on strategy, craft, and building better products. Best enjoyed with a fika." 27rem wide on desktop.
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

All motion stops or becomes static with `prefers-reduced-motion`: logo spin, page and sign-off sprinkles, highlighters, avatar head turn, filter and menu panels, timeline expand, button nudges.

## Accessibility

- Automated scan (axe, WCAG 2.2 AA) clean on every page, desktop and phone, light and dark, with menus open.
- Skip link first; one header landmark (logo + nav); visible focus everywhere; 44px tap areas (see *Interaction*).
- Contrast as in the colour table; decorative colours never carry meaning.

## Publishing, search and sharing

- **Live site:** https://fika.pm, built from the `main` branch on Cloudflare Pages. `www.fika.pm` and every `http://` address forward permanently to `https://fika.pm`, keeping the page and any `?topic=`.
- **Preview links:** every other branch builds at `<branch>.fika-pm.pages.dev` for review. Previews include drafts, the About page and the `/dev` test pages, and ask search engines to stay away. None of these exist on the live site.
- **Sharing:** every page has Open Graph and Twitter card tags; lessons are marked as articles with their date. Sharing image: 1200×630 — FIKA.PM, the headline, the portrait and sprinkles (`/og-image.png`).
- **Search:** clean addresses (no `.html`), a sitemap of public pages only, robots.txt pointing to it, and an RSS feed of lessons at `/rss.xml`.

## Open items

- Work page (full CV), Subscribe flow, first real lesson (replaces the sample and placeholders).
- About page: to be redone, then published (move out of preview-only, link it, topic pills from published lessons).
- Email: DKIM record sits on `fika.pm` instead of its selector name; move it, then tighten DMARC from `p=none` once reports are clean.
