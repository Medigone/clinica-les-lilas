import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CONTACT } from '../routes';

const SITE_URL = 'https://clinicaleslilas.com';

/**
 * Schema.org Service pour les pages de traitements (hyperthermie, sueroterapia, etc.)
 * À utiliser en complément du SchemaOrg principal (MedicalClinic) dans Layout.
 */
const SchemaServiceOrg = ({ name, description, path }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      '@type': 'MedicalClinic',
      name: 'Clínica Les Lilas',
      telephone: CONTACT.PHONE,
      email: CONTACT.EMAIL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: "Avinguda de la Diagonal, 4",
        addressLocality: "Sant Joan d'Alacant",
        postalCode: '03550',
        addressRegion: 'Alicante',
        addressCountry: 'ES',
      },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SchemaServiceOrg;
