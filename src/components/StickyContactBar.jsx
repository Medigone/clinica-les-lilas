import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguageStore } from '../store/languageStore';
import { ROUTES, CONTACT } from '../routes';
import WhatsAppButton from './WhatsAppButton';

const StickyContactBar = () => {
  const { t, language } = useLanguageStore();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex w-full">
        <a
          href={`tel:${CONTACT.PHONE.replace(/\s/g, '')}`}
          className="flex-1 flex items-center justify-center py-3 text-primary bg-primary/5 hover:bg-primary/10 transition-colors border-r border-gray-200/60"
          aria-label={t('cta.call')}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
        <WhatsAppButton iconOnly className="!flex-1 !rounded-none !py-3 !bg-[#25D366] !text-white [&>svg]:!w-6 [&>svg]:!h-6 !border-r !border-white/30" />
        <Link
          to={`${ROUTES.CONTACT}?language=${language}`}
          className="flex-1 flex items-center justify-center py-3 text-white bg-primary hover:bg-primary/90 transition-colors"
          aria-label={t('cta.bookAppointment')}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default StickyContactBar;
