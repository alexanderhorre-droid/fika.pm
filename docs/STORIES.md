# fika.pm — build stories

Build in this order. Each story is small enough for one session and ends at an approval gate: compare against `reference/fika-pm-prototype.html` (open it in a browser; links and dark mode work) at 1440px and 390px, in light and dark, then approve before starting the next.

Stack: **Astro**, deployed to **Cloudflare Pages**. Specs: `DESIGN.md`. Values: `tokens.css`. Words: `content/site-copy.md`.

Story types: **setup** (project plumbing), **foundation** (shared styles and layout), **component**, **page**, **content**, **polish**.

---

## Epic 1 — Foundation

### S01 · setup · `astro-project`
**As** Alex, **I want** an Astro project deploying to Cloudflare Pages **so that** every story ships to a real URL.
- [ ] Astro project, static output; Cloudflare Pages builds on push to `main`, previews on branches.
- [ ] `DESIGN.md` at the repo root; assets from `assets/` in `public/` (or `src/assets/` for optimised images).
- [ ] Lighthouse 95+ on the empty page.
**Gate:** preview URL loads.

### S02 · foundation · `tokens-and-base`
**As** a reader, **I want** the right colours, fonts and spacing in both themes **so that** every page feels like fika.pm.
- [ ] `tokens.css` imported globally; Google Fonts: Instrument Serif (400, italic), Public Sans 400–700, IBM Plex Mono 500, Bungee — nothing else, `display=swap`.
- [ ] Base styles: body Oat milk / Graphite, Public Sans 18px; links underlined; 2px focus ring; `prefers-reduced-motion` respected.
- [ ] Dark mode follows the device; `data-theme` on `<html>` overrides it.
**Gate:** a test page shows text, a link and a button correctly in light and dark.

### S03 · foundation · `layout-shell`
**As** a reader, **I want** every page on one content edge **so that** the site feels calm and aligned.
- [ ] `BaseLayout.astro`: skip link, header slot, `<main>` in `--wide` with `--gutter`, footer slot, per-page `<title>`.
- [ ] Breakpoints 40rem and 64rem.
**Gate:** an empty page with the shell at three widths.

## Epic 2 — Global components

### S04 · component · `nav-bar`
- [ ] Spinning donut logo (20.5s, stops with reduced motion, `--logo-shadow`) linking home.
- [ ] Floating Graphite pill, sticky 24px from the top, right edge on the content edge, `--nav-shadow`.
- [ ] Home · Product Lessons · About me + Coming soon · Work + Coming soon (disabled, not links) · sun/moon switch (`role="switch"`, remembered in localStorage).
- [ ] Below 64rem: Menu/Close panel growing downward, Dark mode as the last row; closes on Escape, outside tap or link; focus returns to Menu.
- [ ] Current page underlined via `aria-current`.
**Gate:** keyboard-only walk-through on desktop and phone.

### S05 · component · `footer`
- [ ] Three columns (1fr · 1fr · 27rem) from 64rem, stacked below; headings share one 36px line box.
- [ ] Copy my email button (clipboard, fallback, `aria-live`, "Email copied ✓" for 2s); LinkedIn ↗ in a new tab.
- [ ] Author card with the three-view avatar head turn (12s loop, pauses on hover, still with reduced motion).
- [ ] Legal row.
**Gate:** email copies on desktop Safari, Chrome and iPhone.

### S06 · component · `small-parts`
- [ ] Solid Button (as `<button>` and as a styled `<a>`), Pill (topic tag, filter chip, Coming soon tag), Highlighter (draws in once on scroll), SectionHeading.
**Gate:** a kitchen-sink page of all four in both themes.

## Epic 3 — Pages

### S07 · page · `home`
- [ ] Masthead: curved FIKA.PM (SVG textPath), bold h1, portrait over its silhouette fill; never stacks.
- [ ] Standfirst full width with the Bungee fika.pm and highlighter.
- [ ] Recent lessons: three newest from the content collection, then View all lessons →.
**Gate:** matches the prototype home at 1440 and 390.

### S08 · content · `lessons-collection`
- [ ] Astro content collection for lessons with the schema in `content/lessons/why-roadmaps-lie.md` (title, deck, date, topics, takeaway, receipts, draft).
- [ ] Build fails if a body is over 500 words or contains an image.
- [ ] Each lesson at `/lessons/<slug>`.
**Gate:** adding a Markdown file publishes a lesson.

### S09 · page · `lesson`
- [ ] Back link, bold h1 + deck, date and topic tags (linking to the filtered list).
- [ ] Body at 716px, 18px / 1.7, ■ end mark after the last paragraph.
- [ ] The Take Away card, Show the Receipts (CLI lines, new tab), sign-off with the share/copy button and faint sprinkles.
**Gate:** "Why roadmaps lie" matches the prototype.

### S10 · page · `product-lessons`
- [ ] h1, "All lessons" + Filter by topic, full list.
- [ ] Filter panel: multi-select chips, badge count, Close; heading follows the selection; empty state; works from a `?topic=` link.
- [ ] Without JavaScript the full list shows.
**Gate:** topic tags on a lesson land on the right filtered list.

### S11 · page · `about` (build, keep unlinked)
- [ ] Masthead with portrait (above the text on phones), the four paragraphs, three topic pills, format cards.
- [ ] Timeline from `content/work-history.json`: first three, fade, Show 5 more roles / Show fewer roles.
- [ ] Sign-off without buttons. Not in the nav or footer until approved.
**Gate:** reachable only by URL.

## Epic 4 — Polish and launch

### S12 · polish · `motion`
- [ ] Masthead sprinkles canvas (drift, pastels, kept clear of text, cut out of the portrait, paused off-screen); sign-off sprinkles.
- [ ] Every animation off with reduced motion.
**Gate:** no layout shift; 60fps on a mid-range phone.

### S13 · polish · `launch-checks`
- [ ] Accessibility: axe clean, contrast as in DESIGN.md, 44px tap targets.
- [ ] SEO: meta descriptions, Open Graph image, sitemap, RSS for lessons.
- [ ] 404 page in the site's style.
- [ ] Verify every receipt URL.
**Gate:** Alex approves go-live; point fika.pm at Cloudflare Pages.

---

## Later (design first, then add stories)

- Work page (full CV) → enables About me and View Work.
- Subscribe flow → Subscribe button returns to the nav.
- Links between related lessons ("see how topics build on each other").
