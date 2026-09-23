# Aathii Rakurakavan — portfolio

One-page personal portfolio. Astro + Tailwind CSS v4, static output, no CMS, no backend, native scrolling.
Light, print-inspired look: a cool paper sheet inside a white frame, navy ink, Newsreader for headings and Geist for text.

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
| Name, availability line, email, résumé, photo, social links | `src/config/site.ts` |
| Projects, experience, education, toolkit, about copy | `src/data/content.ts` |
| Colours, fonts, motion curves | `@theme` block in `src/styles/global.css` |

The résumé lives at `public/Aathii_Rakurakavan_Resume.pdf` and is linked from the header, hero, menu and contact
section. To update it, replace that file (same name) and push. **Keep `content.ts` in step with the résumé**: the
site's roles, dates and claims are taken from it.

## Next steps

1. **Custom domain** (optional) — set `site` in `astro.config.mjs` and add the domain under Settings → Pages.
2. `www.makeitirl.ca` returns a 404 while `makeitirl.ca` works. Add the `www` record in Cloudflare so both resolve.
3. The public résumé PDF includes a phone number. Swap in a copy without it if you'd rather not publish it.

The site is public and indexable (`live: true` in `site.ts`; set it to `false` to hide it from search engines).
The portrait was cropped with `node tools/process-photo.mjs <photo> 185,0,717,896` (x,y,width,height of the framing).

## Project screenshots

Project rows use real captures of the live sites. Each `public/projects/<name>-tall.webp` is a tall "scroll-through"
screenshot (1100 px wide): the top shows at rest and it pans slowly through the site on hover. To add a project, add an
entry to `projects` with `image` pointing at its capture; a project without one can use an `illustration` instead.

## Social preview image

`node tools/make-og.mjs` re-renders `public/og-image.png` from `tools/og-template.html`, your config text and the portrait
(needs `playwright-core`, already a dev dependency, and a local Edge/Chrome).

## Deploying

This repo (`Aathii/Aathii.github.io`) deploys itself: every push to `main` runs `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages at https://aathii.github.io.

## Design notes

Inspired by the restraint of robbowen.digital, adapted with its own palette and type:

- **Colour:** paper `#f4f6fb` framed in white, navy ink `#111a3a` instead of black, ultramarine `#3b37e3` for everything
  clickable, periwinkle `#d9dffb` for hatching and offset shapes, and a vermilion full stop and rule.
- **Type:** Newsreader headings (regular with one bold phrase), Geist body text at 17–18 px, tracked uppercase labels.
- **Layout:** left-aligned text column (~38rem) in a 1200 px container, generous section spacing, hairline dividers.
- **Motion:** one-shot fade-ups as sections enter, an accent rule that shoots in under each heading, a panel that wipes off
  images, offset "misregistered print" shapes that drift a few pixels with the cursor, a colour-wipe mobile menu, and
  screenshots that pan on hover. No loading screen, no scroll hijacking, and all of it switches off under reduced motion.
