// Turns a personal photo into the 4:5 portrait the site uses.
// Usage: node tools/process-photo.mjs path/to/photo.jpg [x,y,width,height]
//   Optional crop box (pixels, in the photo's own orientation) picks the framing; without it the crop follows
//   the most "interesting" region. Writes public/portrait.webp; set `photo: '/portrait.webp'` in src/config/site.ts.
import sharp from 'sharp';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const [input, crop] = process.argv.slice(2);
if (!input) throw new Error('Usage: node tools/process-photo.mjs path/to/photo.jpg [x,y,width,height]');
const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'portrait.webp');

let img = sharp(input).rotate(); // respect the phone's EXIF orientation
if (crop) {
  const [left, top, width, height] = crop.split(',').map(Number);
  img = sharp(await img.toBuffer()).extract({ left, top, width, height });
}
const info = await img
  .resize({ width: 800, height: 1000, fit: 'cover', position: sharp.strategy.attention })
  .webp({ quality: 84, effort: 6 })
  .toFile(out);
console.log(`wrote public/portrait.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB`);
