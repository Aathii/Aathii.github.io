# Aathii Rakurakavan — portfolio

One-page personal portfolio. Astro + Tailwind CSS v4 + Lenis smooth scroll. Static output, no CMS, no backend.
Dark theme, one lime accent, Bricolage Grotesque for the big name moments and Geist for everything else.

```bash
npm install
npm run dev        # http://localhost:4322
npm run build      # static site in dist/
npm run preview    # serve the production build
npm run check      # type-check
```

## Where things live

| To change | Edit |
| :-- | :-- |
| Name, role, headline, availability, email, résumé, photo, social links | `src/config/site.ts` |
| Projects, experience, skills, intro statement, about copy | `src/data/content.ts` |
| Colors, type, spacing, radii, motion tokens | `@theme` block in `src/styles/global.css` |

Everything gracefully hides when left empty (no photo → monogram card, no résumé → no résumé buttons, no LinkedIn → no icon).

## Status and next steps

The site is public and indexable (`live: true` in `site.ts`; set it to `false` to hide it from search engines again).
Everything personal is filled in. Worth doing next:

1. **Résumé** — put the PDF in `public/` and set `resumeUrl: '/resume.pdf'` in `site.ts` (buttons appear automatically).
2. **Custom domain** (optional) — set `site` in `astro.config.mjs` and add the domain under Settings → Pages.
3. A graduation year / major on the Education entry, and a location (`location` in `site.ts`, `facts` in `content.ts`).
4. `www.makeitirl.ca` returns a 404 while `makeitirl.ca` works. Add the `www` record in Cloudflare so both resolve.
5. The Coco Shack card says "Preview · pending client launch". Update its `status`/`liveUrl` once it moves to the real domain.

The portrait was cropped with `node tools/process-photo.mjs <photo> 185,0,717,896` (x,y,width,height of the framing you want).

## Project screenshots

The project cards use real captures of the live sites. `tools/process-shots.mjs` converts raw PNGs to WebP; the tall
"scroll-through" captures behind the hover effect are plain full-page screenshots (1440 px wide, top ~2,900 px) saved as
`public/projects/<name>-tall.webp`. To add a project: add an entry to `projects`, drop `<name>-tall.webp` and
`<name>-mobile.webp` into `public/projects/`, and set `images` (with `pan: true` for tall captures).
Projects without `images` get a generated cover using `coverWord`.

## Social preview image

`node tools/make-og.mjs` re-renders `public/og-image.png` from `tools/og-template.html` and your config text
(needs `playwright-core`, already a dev dependency, and a local Edge/Chrome).

## Deploying

This repo (`Aathii/Aathii.github.io`) deploys itself: every push to `main` runs `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages at https://aathii.github.io.

It is a plain static site, so any other host works too. Build with `npm run build` and publish `dist/`:

- **Cloudflare Pages / Netlify / Vercel** — connect the repo, build command `npm run build`, output `dist`.
- **GitHub Pages** — set `site` to `https://<user>.github.io` and, for a project page, add `base: '/<repo>/'` in `astro.config.mjs`.

## Design notes

Decisions come from the research brief this build followed: Linear/Vercel-style restraint (tight display type in generous space),
a single accent used sparingly, borders instead of shadows, three radii only (8 px, 16 px, pill), 4 px spacing scale,
motion 600–800 ms with `cubic-bezier(0.23, 1, 0.32, 1)`, hero name always painted (only its transform animates) for fast LCP,
no preloader, full `prefers-reduced-motion` and no-JS support, and a 44 px minimum touch height.
