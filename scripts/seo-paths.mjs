import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { NON_INDEXABLE_ROUTES, STATIC_INDEXABLE_ROUTES, getBlogPath } from '../src/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BLOG_POSTS_DIR = path.resolve(__dirname, '../src/blog/posts');

export function extractSlugFromFilename(filename) {
  const name = filename.replace(/\.mdx$/, '');
  const parts = name.split('.');
  parts.pop();
  return parts.join('.');
}

export function getCanonicalBlogSlugs() {
  const slugs = new Set();

  for (const filename of fs.readdirSync(BLOG_POSTS_DIR)) {
    if (!filename.endsWith('.mdx')) continue;
    slugs.add(extractSlugFromFilename(filename));
  }

  return [...slugs].sort();
}

export function getIndexableRoutes() {
  return [...STATIC_INDEXABLE_ROUTES, ...getCanonicalBlogSlugs().map(getBlogPath)];
}

export function getPrerenderRoutes() {
  return [...new Set([...getIndexableRoutes(), ...NON_INDEXABLE_ROUTES])];
}
