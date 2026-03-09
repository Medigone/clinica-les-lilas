import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguageStore } from '../store/languageStore';
import { ROUTES } from '../routes';

const CTABlock = ({ variant = 'requestConsultation', size = 'default', to, reason }) => {
  const { t, language } = useLanguageStore();

  const variantConfig = {
    requestConsultation: { ctaKey: 'cta.requestConsultation', path: ROUTES.CONTACT, isPrimary: true },
    bookAppointment: { ctaKey: 'cta.bookAppointment', path: ROUTES.CONTACT, isPrimary: true },
    contactTeam: { ctaKey: 'cta.contactTeam', path: ROUTES.CONTACT, isPrimary: false },
    contactClinic: { ctaKey: 'cta.contactClinic', path: ROUTES.CONTACT, isPrimary: false },
    discoverApproach: { ctaKey: 'cta.discoverApproach', path: ROUTES.NOTRE_APPROCHE, isPrimary: false },
    learnMore: { ctaKey: 'cta.learnMore', path: null, isPrimary: false },
    seeTreatments: { ctaKey: 'cta.seeTreatments', path: ROUTES.TRAITEMENTS, isPrimary: false },
    seePage: { ctaKey: 'cta.seePage', path: null, isPrimary: false },
    discover: { ctaKey: 'cta.discover', path: null, isPrimary: false },
  };

  const config = variantConfig[variant] || variantConfig.requestConsultation;
  let path = to ?? config.path;

  // Pour les liens vers contact : ajouter reason et language en query params
  if (path === ROUTES.CONTACT) {
    const params = new URLSearchParams();
    if (reason) params.set('reason', reason);
    params.set('language', language);
    path = `${ROUTES.CONTACT}?${params.toString()}`;
  }
  const isPrimary = config.isPrimary;

  const baseClass = 'inline-flex items-center justify-center font-medium rounded-xl transition-all';
  const sizeClass = size === 'large' ? 'px-6 py-2.5 text-base' : 'px-4 py-2 text-sm';
  const variantClass = isPrimary
    ? 'text-white bg-primary hover:bg-primary/90 hover:shadow-lg transition-all'
    : 'text-primary bg-white border border-gray-200 hover:bg-gray-50 hover:border-primary/20 hover:shadow-md transition-all';

  if (!path) {
    return (
      <span className={`${baseClass} ${sizeClass} ${variantClass} cursor-default`}>
        {t(config.ctaKey)}
      </span>
    );
  }

  return (
    <Link to={path} className={`${baseClass} ${sizeClass} ${variantClass}`}>
      {t(config.ctaKey)}
    </Link>
  );
};

export default CTABlock;
