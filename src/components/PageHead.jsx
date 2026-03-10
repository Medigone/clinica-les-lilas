import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://clinicaleslilas.com';
const OG_IMAGE_URL = `${SITE_URL}/assets/og-image.png`;
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

/**
 * Balises hreflang : le site utilise une seule URL par page, la langue change via le store (sans /es/, /fr/, /en/).
 * On indique les variantes linguistiques avec la même URL pour chaque langue.
 * x-default pointe vers la version par défaut (espagnol).
 */
const PageHead = ({ title, description, path = '', keywords }) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : SITE_URL;
  const canonicalUrl = path ? `${baseUrl}${path}` : baseUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* hreflang : variantes linguistiques (es, fr, en) - même URL car langue via store */}
      <link rel="alternate" hrefLang="es" href={canonicalUrl} />
      <link rel="alternate" hrefLang="fr" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
      <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:site_name" content="Clínica Les Lilas" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE_URL} />
      <meta name="twitter:image:width" content={String(OG_IMAGE_WIDTH)} />
      <meta name="twitter:image:height" content={String(OG_IMAGE_HEIGHT)} />
    </Helmet>
  );
};

export default PageHead;
