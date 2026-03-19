import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROUTES } from '../src/routes.js';
import { getIndexableRoutes } from './seo-paths.mjs';

const SITE_URL = 'https://clinicaleslilas.com';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../dist/sitemap.xml');
const publicPath = path.resolve(__dirname, '../public/sitemap.xml');
const lastmod = new Date().toISOString().slice(0, 10);

function getMetadata(route) {
  if (route === ROUTES.HOME) return { changefreq: 'monthly', priority: '1.0' };
  if (route === ROUTES.BLOG) return { changefreq: 'weekly', priority: '0.8' };
  if (route.startsWith(`${ROUTES.BLOG}/`)) return { changefreq: 'monthly', priority: '0.7' };
  if (route === ROUTES.POLITIQUE_CONFIDENTIALITE) return { changefreq: 'yearly', priority: '0.4' };
  if (route === ROUTES.CONTACT) return { changefreq: 'monthly', priority: '0.8' };
  return { changefreq: 'monthly', priority: '0.9' };
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${getIndexableRoutes()
  .map((route) => {
    const { changefreq, priority } = getMetadata(route);
    return `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>
`;

// Écrit dans dist/ (build) et public/ (dev)
fs.writeFileSync(publicPath, xml, 'utf8');
if (fs.existsSync(path.dirname(distPath))) {
  fs.writeFileSync(distPath, xml, 'utf8');
}
