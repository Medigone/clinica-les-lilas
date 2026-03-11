// Route paths - canonical SEO paths used across app, prerender, sitemap and redirects.
export const ROUTES = {
  HOME: '/',
  NOTRE_APPROCHE: '/medicina-integrativa',
  TRAITEMENTS: '/tratamientos',
  HIPERTERMIA: '/tratamientos/hipertermia-oncologica',
  SUEROTERAPIA: '/tratamientos/sueroterapia',
  MEDECINE_REGENERATIVE: '/tratamientos/medicina-regenerativa',
  SOUTIEN_IMMUNITAIRE: '/tratamientos/soporte-inmunologico',
  A_PROPOS: '/sobre-nosotros',
  CONTACT: '/contacto',
  MENTIONS_LEGALES: '/aviso-legal',
  POLITIQUE_CONFIDENTIALITE: '/aviso-legal',
  CONTACT_MERCI: '/contacto/gracias',
  BLOG: '/blog',
};

export const BLOG_SLUG_REDIRECTS = {
  'hyperthermie-oncologique': 'hipertermia-oncologica',
  'sueroterapia-micronutriments': 'sueroterapia-micronutrientes',
  'medecine-regenerative-cellules': 'medicina-regenerativa-reparacion-celular',
};

export const STATIC_INDEXABLE_ROUTES = [
  ROUTES.HOME,
  ROUTES.NOTRE_APPROCHE,
  ROUTES.TRAITEMENTS,
  ROUTES.HIPERTERMIA,
  ROUTES.SUEROTERAPIA,
  ROUTES.MEDECINE_REGENERATIVE,
  ROUTES.SOUTIEN_IMMUNITAIRE,
  ROUTES.A_PROPOS,
  ROUTES.CONTACT,
  ROUTES.POLITIQUE_CONFIDENTIALITE,
  ROUTES.BLOG,
];

export const NON_INDEXABLE_ROUTES = [ROUTES.CONTACT_MERCI];

export function getBlogPath(slug) {
  return `${ROUTES.BLOG}/${slug}`;
}

export function getCanonicalBlogSlug(slug) {
  return BLOG_SLUG_REDIRECTS[slug] || slug;
}

export function toRoutePath(path) {
  return path.replace(/^\/+/, '');
}

export const LEGACY_REDIRECTS = [
  { from: '/notre-approche', to: ROUTES.NOTRE_APPROCHE },
  { from: '/traitements', to: ROUTES.TRAITEMENTS },
  { from: '/traitements/hyperthermie-oncologique', to: ROUTES.HIPERTERMIA },
  { from: '/traitements/sueroterapia', to: ROUTES.SUEROTERAPIA },
  { from: '/traitements/medecine-regenerative', to: ROUTES.MEDECINE_REGENERATIVE },
  { from: '/traitements/soutien-immunitaire', to: ROUTES.SOUTIEN_IMMUNITAIRE },
  { from: '/a-propos', to: ROUTES.A_PROPOS },
  { from: '/contact', to: ROUTES.CONTACT },
  { from: '/contact/merci', to: ROUTES.CONTACT_MERCI },
  { from: '/mentions-legales', to: ROUTES.POLITIQUE_CONFIDENTIALITE },
  { from: '/politique-confidentialite', to: ROUTES.POLITIQUE_CONFIDENTIALITE },
  { from: '/hipertermia-oncologica', to: ROUTES.HIPERTERMIA },
  { from: '/sueroterapia', to: ROUTES.SUEROTERAPIA },
  { from: '/medicina-regenerativa', to: ROUTES.MEDECINE_REGENERATIVE },
  { from: '/soporte-inmunologico', to: ROUTES.SOUTIEN_IMMUNITAIRE },
  { from: '/faq', to: ROUTES.HOME },
  { from: '/consulta-inicial', to: ROUTES.CONTACT },
  { from: '/tu-recorrido', to: ROUTES.NOTRE_APPROCHE },
];

export const BLOG_LEGACY_REDIRECTS = Object.entries(BLOG_SLUG_REDIRECTS).map(([oldSlug, newSlug]) => ({
  from: getBlogPath(oldSlug),
  to: getBlogPath(newSlug),
}));

export const ALL_REDIRECTS = [...LEGACY_REDIRECTS, ...BLOG_LEGACY_REDIRECTS];

// Contact info
export const CONTACT = {
  PHONE: '+34 614 067 537',
  WHATSAPP: '34614067537',
  EMAIL: 'info@clinicaleslilas.com',
  ADDRESS: "Avinguda de la Diagonal, 4\n03550 Sant Joan d'Alacant\nAlicante, España",
};
