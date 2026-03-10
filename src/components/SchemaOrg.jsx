import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CONTACT } from '../routes';

const SchemaOrg = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Clínica Les Lilas',
    description: 'Clínica Les Lilas - Clinique privée de médecine intégrative à Alicante. Consultation personnalisée, hyperthermie oncologique, sueroterapia, médecine régénérative.',
    url: typeof window !== 'undefined' ? window.location.origin : '',
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.3985,
      longitude: -0.4356,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '18:00' },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SchemaOrg;
