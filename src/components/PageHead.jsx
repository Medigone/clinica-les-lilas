import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://clinicaleslilas.com';
const OG_IMAGE_URL = `${SITE_URL}/assets/og-image.png`;
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

const PageHead = ({ title, description, path = '', keywords, robots, noindex = false, includeCanonical = true }) => {
  const canonicalUrl = typeof path === 'string' ? (path ? `${SITE_URL}${path}` : SITE_URL) : null;
  const robotsContent = robots ?? (noindex ? 'noindex, follow' : null);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {robotsContent && <meta name="robots" content={robotsContent} />}
      {includeCanonical && canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
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
