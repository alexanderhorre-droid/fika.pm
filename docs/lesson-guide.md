# fika.pm lesson guide

Every lesson on fika.pm is one Markdown file: a frontmatter block at the top fills the page's header, The Take Away and Show the Receipts, and the text below it is the lesson body. Start from `docs/lesson-template.md`.

## The file

- **Folder:** `src/content/lessons/`. **Name:** lowercase words joined by hyphens, ending in `.md`: `why-roadmaps-lie.md` → `fika.pm/lessons/why-roadmaps-lie`.
- Once published and shared, don't rename it, or old links break. Plain UTF-8; curly quotes and the non-breaking hyphen in "Bite‑sized" are fine.

## The frontmatter

All fields required except `receipts` and `draft`; the build stops with a message if one is missing or malformed.

| Field | Shows as | Rules | Example |
| --- | --- | --- | --- |
| `title` | Headline, browser tab, link previews | Sentence case, no full stop, 2–8 words | `"Why roadmaps lie"` |
| `deck` | Line under the headline; search/link-preview description | One or two sentences, full stop | `"A roadmap is a forecast dressed up as a promise. …"` |
| `date` | "7 Oct 2026"; sets the order (newest first) | `YYYY-MM-DD`, no quotes | `2026-10-07` |
| `topics` | Topic tags; filter chips on Product Lessons | One or more in `[ ]`; free-form; case doesn't matter | `[roadmap, framework]` |
| `takeaway.title` | Title on the dark Take Away card | The one thing to remember, no full stop | `"A roadmap is a forecast, not a promise"` |
| `takeaway.text` | Text under it | One or two sentences | `"Dates signal a certainty you don't have yet…"` |
| `receipts` | Show the Receipts, one line per source | List of `title`, `author` ("Name, Publisher"), `url` (https://…); omit for none | see template |
| `draft` | Nothing; `true` = preview links only | `true`/`false`, default `false` | `false` |

Quote text values that contain a colon or `#` or start with a quote mark; quoting all text values is the safe habit. Keep the two-space indents under `takeaway:` and `receipts:`.

## The body

500 words or fewer, text only; the build counts words and refuses images.
- Use: `## Section heading` (2–3 per lesson), short paragraphs (≤ 3 sentences), `**bold**`, `*italic*`, `[links](https://…)`, `- ` / `1. ` lists, `> ` quotes.
- Don't use: a `# ` heading (title comes from the frontmatter), images/`<img>`/SVG/embeds, the title, deck, Take Away or sources in the body, a ■ (the page adds it after the last paragraph, so end on a paragraph).
- Counts: words a reader reads, headings included; Markdown symbols, link addresses and `<!-- comments -->` don't count.

## Copy rules

First person to one product person; practical, plain, a little warm. Sentence-case headings, no full stops. Named features keep capitals: Product Lessons, The Take Away, Show the Receipts. "fika.pm" lowercase in text. "Bite‑sized" with a non-breaking hyphen (U+2011). One coffee or baking metaphor per section at most. No emoji.

## Writing in iA Writer

iA Writer saves plain `.md` files, which is exactly what the site reads. Lessons live in the `lessons` folder inside your fika.pm folder in iCloud Drive.

**Set up once**
- [ ] In iA Writer's Library, add the `fika.pm/lessons` folder in iCloud Drive as a location.
- [ ] Keep `_template.md` there as the blank lesson; `product-led-growth-starts-after-sign-up.md` is a finished example.

**For each lesson**
- [ ] Duplicate `_template.md`; rename the copy to the lesson's address (lowercase, hyphens, `.md`: `say-no-with-a-date.md` → `fika.pm/lessons/say-no-with-a-date`).
- [ ] Fill the frontmatter between the two `---` lines; keep the quotes and two-space indents.
- [ ] Write the body under the second `---`: `##` headings, short paragraphs, `**bold**`, `*italics*`, links. No `#` heading, no images.
- [ ] Length: iA Writer's counter includes the frontmatter, so aim for about 560 there; Claude checks the exact body count (≤ 500).
- [ ] Set `draft: false` when it's ready to go live.
- [ ] Save; iCloud syncs it.

**Hand it to Claude**
- [ ] Open the Claude desktop app on your Mac and start a chat in the fika.pm project, so Claude can read your fika.pm folder.
- [ ] Say "publish `lessons/say-no-with-a-date.md`" (away from the Mac: attach the file).
- [ ] Claude checks it, fixes small things, and replies with a preview link.
- [ ] Check the preview on laptop and phone, light and dark; ask for changes or edit in iA Writer and say "update it".
- [ ] Say "approve": it goes live on fika.pm.

iA Writer's own preview won't look like fika.pm; the preview link is the real check.

## Publishing

1. Write the lesson from the template.
2. Hand it to Claude (attach the file, paste it, or save it in the fika.pm folder) and say "publish this lesson".
3. Claude checks the build rules, copy rules and source links, and puts it on a preview link.
4. Say "approve": it goes live on fika.pm, in Recent lessons, Product Lessons, RSS and the sitemap; its topics become tags and chips.

The first real lesson also removes the sample and the eight placeholder drafts. `draft: true` keeps a lesson on previews only. To change a published lesson, send the updated file and approve the preview.
