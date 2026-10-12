# fika.pm — build handoff

Everything needed to build fika.pm as a real Astro site, matching the approved design.

| File | What it is |
|---|---|
| `DESIGN.md` | The spec: principles, colours, type, layout, every page and component. Read first. |
| `STORIES.md` | 13 build stories in order, each with acceptance criteria and an approval gate. |
| `tokens.css` | All design tokens as CSS custom properties, light and dark. Import globally. |
| `content/site-copy.md` | Approved wording for every page, nav, footer, buttons and alt text. |
| `content/lessons/why-roadmaps-lie.md` | The sample lesson, and the Markdown frontmatter shape every lesson follows. |
| `content/lessons-index.json` | The placeholder lesson list and the topic set. |
| `content/work-history.json` | The About page timeline. |
| `assets/` | Hedcut portrait (WebP + transparent PNG), three avatar head views, donut logo (light and dark SVG). |
| `reference/fika-pm-prototype.html` | The working prototype. Open it in a browser: links, dark mode, filter and timeline all work. The visual source of truth. |

## How to use it

- **With Claude Code (or any coding assistant):** put this folder's contents in the repo (DESIGN.md at the root), then work through `STORIES.md` one story per session: "Build S04 nav-bar from STORIES.md."
- **With a developer:** send the folder and the two artifact links (fika.pm Preview, fika.pm Design System).
- **In a Claude project:** upload DESIGN.md, STORIES.md and site-copy.md as project knowledge so every chat starts from the same decisions.

## Rules that matter most

1. Match the prototype; when it and DESIGN.md disagree, ask.
2. Only four fonts. Only one shadow (nav bar and logo). No accent colour.
3. Nothing links to an unbuilt page: About me and Work stay "Coming soon"; no Subscribe until its flow exists.
4. Lessons are Markdown, 500 words or fewer, text only.
