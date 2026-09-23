// Creates the smaller responsive copies the page serves to phones:
//   public/portrait.webp          -> public/portrait-480.webp
//   public/projects/*-tall.webp   -> public/projects/*-tall-720.webp
// Re-run after replacing the portrait or adding a project screenshot:  node tools/make-variants.mjs
import sharp from 'sharp';
import { readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const pub = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');

const make = async (src, out, width, quality) => {
  const info = await sharp(src).resize({ width }).webp({ quality, effort: 6 }).toFile(out);
  console.log(out.replace(pub, 'public'), `${info.width}x${info.height}`, `${Math.round(info.size / 1024)}KB`);
};

await make(join(pub, 'portrait.webp'), join(pub, 'portrait-480.webp'), 480, 80);
for (const f of readdirSync(join(pub, 'projects')).filter((n) => n.endsWith('-tall.webp'))) {
  await make(join(pub, 'projects', f), join(pub, 'projects', f.replace('-tall.webp', '-tall-720.webp')), 720, 70);
}
