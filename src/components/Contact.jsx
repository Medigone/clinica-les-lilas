import React from 'react';
import { Mail, MapPin, Phone } from 'iconoir-react';
import { useLanguageStore } from '../store/languageStore';
import { CONTACT } from '../routes';

const Contact = () => {
  const { t } = useLanguageStore();

  return (
    <section id="contact" className="bg-surface py-24 md:py-32 px-8 md:px-16 relative overflow-hidden">
      {/* Cell Pattern Background */}
      <div className="absolute inset-0 bg-cell-pattern pointer-events-none"></div>

      {/* Warm Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            {t('contact.title')}
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/30 to-transparent flex-grow ml-8 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Email */}
          <div className="text-center group cursor-default p-8 rounded-2xl hover:bg-white/80 hover:backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-primary/10 hover:shadow-lg">
            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail width={32} height={32} className="text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">
              {t('contact.email.title')}
            </h3>
            <p className="text-base text-text/70 mb-4">
              {t('contact.email.description')}
            </p>
            <a
              href="mailto:info@clinicaleslilas.com"
              className="text-base text-primary font-medium hover:text-primary/80 transition-colors inline-block border-b border-transparent hover:border-primary/50"
            >
              info@clinicaleslilas.com
            </a>
          </div>

          {/* Téléphone */}
          <div className="text-center group cursor-default p-8 rounded-2xl hover:bg-white/80 hover:backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-primary/10 hover:shadow-lg">
            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone width={32} height={32} className="text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">
              {t('contact.phone.title')}
            </h3>
            <p className="text-base text-text/70 mb-4">
              {t('contact.phone.description')}
            </p>
            <a
              href={`tel:${CONTACT.PHONE.replace(/\s/g, '')}`}
              className="text-base text-primary font-medium hover:text-primary/80 transition-colors inline-block border-b border-transparent hover:border-primary/50"
            >
              {CONTACT.PHONE}
            </a>
          </div>

          {/* Adresse */}
          <div className="text-center group cursor-default p-8 rounded-2xl hover:bg-white/80 hover:backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-primary/10 hover:shadow-lg">
            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MapPin width={32} height={32} className="text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">
              {t('contact.address.title')}
            </h3>
            <p className="text-base text-text/70 mb-4">
              {t('contact.address.description')}
            </p>
            <address className="text-base text-primary font-medium not-italic whitespace-pre-line">
              {t('contact.address.full')}
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

