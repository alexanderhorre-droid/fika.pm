# fika.pm

Bite‑sized product lessons for PMs. Astro static site, deployed to Cloudflare Pages.

- **Spec:** `DESIGN.md` (root). **Build plan:** `docs/STORIES.md`. **Copy:** `docs/site-copy.md`.
- **Visual source of truth:** `reference/fika-pm-prototype.html` (open in a browser).

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

Node 22+ (`.node-version`).

## Layout

| Path | What |
|---|---|
| `src/pages/` | Routes |
| `src/styles/tokens.css` | Design tokens (light + dark) |
| `src/content/lessons/` | Lessons as Markdown (≤ 500 words, text only; build fails otherwise). `draft: true` shows on preview URLs only |
| `src/data/` | Work history (About timeline) |
| `public/images/` | Portrait, avatar head views, donut logos |

## Deploy (Cloudflare Pages)

1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Framework preset **Astro**. Build command `npm run build`. Output directory `dist`. Env var `NODE_VERSION=22`.
4. Production branch `main`; every other branch gets a preview URL.
5. Later (S13): Custom domains → `fika.pm`.

## Progress

- [x] S01 · setup · astro-project (Lighthouse 100/100/100/100 on the placeholder)
- [x] S02 · foundation · tokens-and-base (gate page: `/dev/base`)
- [x] S03 · foundation · layout-shell (gate page: `/dev/shell`)
- [x] S04 · component · nav-bar (gate page: `/dev/nav`)
- [x] S05 · component · footer (gate page: `/dev/footer`)
- [x] S06 · component · small-parts (gate page: `/dev/parts`)
- [x] S07 · page · home
- [x] S08 · content · lessons-collection (8 placeholder lessons are drafts)
- [ ] S09–S13: see `docs/STORIES.md`
