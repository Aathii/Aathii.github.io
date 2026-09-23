// Renders public/og-image.png (1200x630) from tools/og-template.html using the site's own fonts.
// Needs `playwright-core` and a local Edge/Chrome:  npm i -D playwright-core && node tools/make-og.mjs
// Text comes from src/config/site.ts (read with a small regex so no build step is needed).
import { chromium } from 'playwright-core';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const cfg = readFileSync(join(root, 'src/config/site.ts'), 'utf8');
const pick = (key) => (cfg.match(new RegExp(`\\b${key}:\\s*'((?:[^'\\\\]|\\\\.)*)'`)) ?? [])[1]?.replace(/\\'/g, "'") ?? '';

const fonts = join(root, 'node_modules/@fontsource-variable');
const url = (p) => pathToFileURL(p).href;
const html = readFileSync(join(root, 'tools/og-template.html'), 'utf8')
  .replace('FONT_HERO', url(join(fonts, 'bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2')))
  .replace('FONT_BODY', url(join(fonts, 'geist/files/geist-latin-wght-normal.woff2')))
  .replace('FONT_MONO', url(join(fonts, 'geist-mono/files/geist-mono-latin-wght-normal.woff2')))
  .replace('PILL_TEXT', pick('availability') || 'Portfolio')
  .replace('HERO_NAME', pick('heroName'))
  .replace('ROLE_TEXT', `${pick('name')} · ${pick('role')}`)
  .replace('TAGLINE_TEXT', pick('headline'))
  .replace('INITIALS', pick('initials'));
const tmp = join(root, 'tools/.og-render.html');
writeFileSync(tmp, html);

const candidates = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
];
const { existsSync } = await import('node:fs');
const executablePath = candidates.find(existsSync);
const browser = await chromium.launch({ executablePath, headless: true });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(url(tmp));
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);
await page.screenshot({ path: join(root, 'public/og-image.png') });
await browser.close();
console.log('wrote public/og-image.png');
