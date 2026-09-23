// Turns raw headless-browser screenshots into optimised WebP files for the project cards.
// Usage: node tools/process-shots.mjs <input-dir> [name ...]   (names default to every *-desktop.png found)
import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'public', 'projects');
const input = process.argv[2];
if (!input) throw new Error('Pass the screenshots directory as the first argument.');
mkdirSync(out, { recursive: true });

const names = process.argv.length > 3
  ? process.argv.slice(3)
  : readdirSync(input).filter((f) => f.endsWith('-desktop.png')).map((f) => f.replace('-desktop.png', ''));

for (const name of names) {
  // Desktop: 1440x900 source, keep full width for retina crispness.
  const d = await sharp(join(input, `${name}-desktop.png`))
    .resize({ width: 1440 })
    .webp({ quality: 80, effort: 6 })
    .toFile(join(out, `${name}-desktop.webp`));
  // Mobile: 390x844 source, kept at native width (rendered small inside a phone frame).
  const m = await sharp(join(input, `${name}-mobile.png`))
    .resize({ width: 390 })
    .webp({ quality: 82, effort: 6 })
    .toFile(join(out, `${name}-mobile.webp`));
  console.log(name, `desktop ${d.width}x${d.height} ${(d.size / 1024).toFixed(0)}KB`, `mobile ${m.width}x${m.height} ${(m.size / 1024).toFixed(0)}KB`);
}
