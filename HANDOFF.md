# UA Lawyers — React/Next.js rebuild: handoff notes

Status as of 2026-07-13. **The site is built.** All 28 pages prerender, lint and build are clean.
What remains is content, not code — see "Open items" below.

## What this project is

A 1:1 rebuild of the live WordPress site `ualawyers.com.au` as a Next.js app, so the firm has a
modern, git-managed codebase. Next.js (App Router) was chosen over a Vite SPA specifically so pages
are server-rendered/statically generated and stay SEO-crawlable — that's the whole point of leaving
WordPress without losing search ranking. Verified: every route ships its real content in the
server-rendered HTML, not just after hydration.

The public site is behind WordPress **maintenance mode**. Logging in at `/wp-login.php` as an admin
bypasses it — that's how the content was extracted. `wp-content/uploads` is served publicly even
under maintenance mode, so images could be fetched without auth.

## Stack

- Next.js 16.2.10, React 19.2.4, TypeScript 5
- Tailwind CSS 4 — **CSS-first**: brand tokens live in the `@theme` block in `src/app/globals.css`,
  there is no `tailwind.config.js`
- Brand colours were sampled from the live stylesheet: `--color-brand: #b81a22` (the red band),
  accent `#f00002`, section grey `#f1f5f6`, ink `#161922`

## Layout

```
src/data/          services.ts · people.ts · posts.ts · site.ts   ← all content lives here
src/components/    Header · Footer · PageHero · ServiceDetail · PostDetail · PeopleGrid · ContactForm
src/app/           routes (see below)
public/images/     brand/ · people/ · posts/
```

**Editing content = editing `src/data/*.ts`.** No component changes needed.

## Routes

| Route | Notes |
|---|---|
| `/` | Home |
| `/our-services` | Services landing |
| `/[slug]` | **Services AND posts share this one route.** WordPress serves both as flat top-level permalinks (`/family-law`, `/gun-control-in-australia`), and two dynamic segments can't coexist at the same level in the App Router — so `[slug]` resolves a service first, then a post. Preserves the live URLs. |
| `/our-people` | Team grid + practice-area filter tabs (`PeopleGrid` is the client island) |
| `/portfolio-item/[slug]` | 7 lawyer bios |
| `/blog` | Insights listing |
| `/contact-us` | Static form UI, no backend (see below) |

Practice areas on a person's page are **derived** from each service's `contacts` list
(`practiceAreasFor` in `people.ts`) rather than duplicated, so a lawyer and the services listing
them can't drift apart.

## Things the earlier crawl got wrong — now fixed

These were real defects in the source data. Worth knowing about, because two of them are bugs on
the **live WordPress site** that still need fixing there.

1. **Four service pages were crawled at the wrong URLs and came back as 404s.** The earlier notes
   read this as "thinner content on those pages" — it wasn't. The home page links to
   `/will-estates/`, `/criminal-law/`, `/public-notary/`, `/employment-labour/`, all of which 404.
   The real pages are:

   | Broken link on live home page | Real, working slug |
   |---|---|
   | `/will-estates/` | **`/will-probate/`** |
   | `/criminal-law/` | **`/criminal-defence/`** |
   | `/public-notary/` | **`/notary-public/`** |
   | `/employment-labour/` | **`/employment-law/`** |

   All four were re-crawled with full content (overview, sub-service tiles, contact lawyers) and are
   complete in `services.ts`. This rebuild uses the **working** slugs.
   → **Live-site bug:** the WordPress home page's service links are broken and should be repointed.

2. **The live Property Law page displays migration-law copy** in its Overview block. Confirmed
   against the authenticated live page — not a crawl artifact. `services.ts` uses the correct
   property-law copy from `/our-services` instead, with a `NOTE:` comment at the site.
   → **Live-site bug.** Also: confirm the intended long-form property overview, since the correct
   text we have is only the short summary.

3. **Five of the seven lawyer bios contain the wrong person.** The WordPress portfolio items appear
   to have been renamed as staff changed, leaving the previous lawyer's body copy in place:

   | Slug (listed as) | Bio body actually contains |
   |---|---|
   | `james-xi` (James Xi) | Wuhao Wang — wuhao.wang@, (03) 8840 6565 |
   | `qinyi-li` (Ada Yin) | Qinyi Li, but the vCard/CV downloads are *Elijah Feng*'s |
   | `jingjing-luan` (Jingjing Luan) | Chia-Chin Ho — justin.ho@ |
   | `annie-rao` (Annie Rao) | Chia-Chin Ho — *byte-identical to Jingjing's page* |
   | `wilson-zhang` (Wilson Zhang) | Zenan Yu — zenan.yu@ |

   Those pages also still carry the WP theme's default meta description ("BeCongress | Best
   WordPress theme…"), i.e. they were never re-authored. Only **Shen Li** and **Louis Xu** are
   self-consistent, and their real bios are in `people.ts`.

   Per Louis: **the names in the team listings are correct; the bio bodies are stale.** So the five
   affected people carry correct name/role/photo/practice-areas and are marked
   `bioStatus: "needs-content"`. Their pages render the verified facts plus a contact CTA — no
   invented biography, and no wrong lawyer's phone number or admissions.

## Open items

1. **Fill in the five bios** — in `people.ts`, populate `about` / `qualifications` / `education` /
   `phone` / `email` and flip `bioStatus` to `"complete"`. The About/Qualifications/Education
   sections appear automatically; no layout work needed.
2. **Contact form has no backend** — `ContactForm.tsx` validates and shows a success state but makes
   no network request, by design. Wire up Formspree/EmailJS/a route handler in `handleSubmit`.
3. **Fix the two live-WordPress content bugs** above (broken home-page service links; migration copy
   on the Property Law page), so the old site isn't contradicting the new one.
4. **Two blog posts were never captured** — the live `/blog/` lists five posts, but only three were
   crawled. Missing: `how-to-handle-a-car-accident-in-australia` and
   `understanding-the-six-month-eviction-ban-in-nsw`. (The latter is the "Featured Insight" the live
   Property Law page points at.) Re-crawl them the same way if you want them.
5. **Push the repo** — not yet created. Decision was private, under the `ualawyers` GitHub account:
   `gh repo create ualawyers/ua-lawyers-website --private --source=. --push`

## Housekeeping

- `.content-cache/` is gitignored scratch data; it has been **updated** so the four service records
  are keyed by their real slugs. Keep it locally.
- Imagery: the firm confirmed rights to reuse the site's photography. Re-check stock-image licences
  if this repo ever goes public or the site moves domain — a WP licence usually covers only the
  original install. Logo and team headshots are the firm's own.
- Original plan doc: `~/.claude/plans/prancy-mapping-llama.md`
