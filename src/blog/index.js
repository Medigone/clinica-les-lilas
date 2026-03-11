const modules = import.meta.glob('./posts/**/*.mdx', { eager: true });

function parsePath(filePath) {
  const filename = filePath.split('/').pop().replace('.mdx', '');
  const parts = filename.split('.');
  const lang = parts.pop();
  const slug = parts.join('.');
  return { slug, lang };
}

export function getBlogPosts(language) {
  const posts = [];
  for (const [path, mod] of Object.entries(modules)) {
    const { slug, lang } = parsePath(path);
    if (lang !== language) continue;
    const fm = mod.frontmatter || {};
    posts.push({
      slug,
      title: fm.title,
      description: fm.description,
      date: fm.date,
      category: fm.category,
      tags: fm.tags || [],
      image: fm.image,
      faq: fm.faq || [],
      Component: mod.default,
    });
  }
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getBlogPost(slug, language) {
  return getBlogPosts(language).find((p) => p.slug === slug) || null;
}

export function getAllSlugs() {
  const slugs = new Set();
  for (const path of Object.keys(modules)) {
    slugs.add(parsePath(path).slug);
  }
  return [...slugs];
}
