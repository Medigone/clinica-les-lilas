/**
 * Génère des variantes WebP redimensionnées pour les fonds lourds (LCP / PageSpeed).
 * Exécuter : node scripts/optimize-hero-images.mjs
 */
import sharp from 'sharp';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, '../public/assets');

const jobs = [
  { file: 'bg_hero_2.png', widths: [640, 960, 1280, 1600] },
  { file: 'about-bg.png', widths: [480, 800, 1280, 1600] },
  { file: 'iv_therapy_bg.png', widths: [640, 960, 1280, 1600] },
  { file: 'alicante-3840x1408.jpg', widths: [640, 960, 1280, 1600, 1920] },
];

const quality = 82;

for (const { file, widths } of jobs) {
  const inputPath = join(assetsDir, file);
  const stem = file.replace(/\.[^.]+$/, '');
  for (const w of widths) {
    const outPath = join(assetsDir, `${stem}-${w}.webp`);
    await sharp(inputPath)
      .resize(w, null, { withoutEnlargement: true })
      .webp({ quality, effort: 4 })
      .toFile(outPath);
    console.log('wrote', outPath);
  }
}

console.log('done');
