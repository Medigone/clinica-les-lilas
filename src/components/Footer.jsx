import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'iconoir-react';
import { useLanguageStore } from '../store/languageStore';
import { ROUTES, CONTACT } from '../routes';
import MentionsLegalesModal from './MentionsLegalesModal';

const Footer = () => {
  const { t, language } = useLanguageStore();
  const [mentionsModalOpen, setMentionsModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('mentions') === '1') {
      setMentionsModalOpen(true);
      setSearchParams({}, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const footerLinks = [
    { key: 'home', path: ROUTES.HOME },
    { key: 'notreApproche', path: ROUTES.NOTRE_APPROCHE },
    { key: 'hyperthermie', path: ROUTES.HIPERTERMIA },
    { key: 'sueroterapia', path: ROUTES.SUEROTERAPIA },
    { key: 'aPropos', path: ROUTES.A_PROPOS },
    { key: 'contact', path: ROUTES.CONTACT },
    { key: 'mentionsLegales', isModal: true },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to={ROUTES.HOME} className="inline-block font-semibold text-white mb-4 hover:text-white/90 transition-colors">
              {t('brand.name')}
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-2">
              {t('footer.tagline')}
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {t('footer.subtitle')}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${CONTACT.PHONE.replace(/\s/g, '')}`}
                className="text-white/90 hover:text-white text-sm font-medium flex items-center gap-2"
              >
                <Phone className="w-4 h-4" strokeWidth={2} />
                {CONTACT.PHONE}
              </a>
              <a
                href={`mailto:${CONTACT.EMAIL}`}
                className="text-white/90 hover:text-white text-sm font-medium flex items-center gap-2"
              >
                <Mail className="w-4 h-4" strokeWidth={2} />
                {CONTACT.EMAIL}
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm mb-3 text-white/95">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item.key}>
                  {item.isModal ? (
                    <button
                      type="button"
                      onClick={() => setMentionsModalOpen(true)}
                      className="text-white/75 hover:text-white transition-colors text-sm text-left"
                    >
                      {t(`navigation.${item.key}`)}
                    </button>
                  ) : (
                    <Link
                      to={item.key === 'contact' ? `${item.path}?language=${language}` : item.path}
                      className="text-white/75 hover:text-white transition-colors text-sm"
                    >
                      {t(`navigation.${item.key}`)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold text-sm mb-3 text-white/95">{t('contact.address.title')}</h3>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.ADDRESS.replace(/\n/g, ', '))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white text-sm not-italic leading-relaxed whitespace-pre-line flex items-start gap-2 transition-colors"
            >
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={2} />
              <span>{CONTACT.ADDRESS}</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} {t('brand.name')}. {t('footer.rights')}
          </p>
        </div>
      </div>

      <MentionsLegalesModal isOpen={mentionsModalOpen} onClose={() => setMentionsModalOpen(false)} />
    </footer>
  );
};

export default Footer;
