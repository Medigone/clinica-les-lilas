import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://clinicaleslilas.com';

const PageHead = ({ title, description, path = '', keywords }) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : SITE_URL;
  const canonicalUrl = path ? `${baseUrl}${path}` : baseUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content="Clínica Les Lilas" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default PageHead;
