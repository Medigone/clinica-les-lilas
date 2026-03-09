import React from 'react';
import { useLanguageStore } from '../store/languageStore';

const Hyperthermie = () => {
  const { t } = useLanguageStore();

  return (
    <section id="hyperthermie" className="bg-background py-24 md:py-32 px-8 md:px-16 relative overflow-hidden">
      {/* Cell Pattern Background */}
      <div className="absolute inset-0 bg-cell-pattern pointer-events-none"></div>

      {/* Warm Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Button/Action Side */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-primary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-12 py-6 bg-white ring-1 ring-gray-900/5 rounded-full leading-none flex items-center justify-center space-x-6">
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  {t('hyperthermie.button')}
                </span>
              </div>
            </div>
            <div className="mt-12 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 max-w-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Innovation Thérapeutique</h3>
              <p className="text-text/70">Une approche complémentaire qui utilise la chaleur pour renforcer l'efficacité des traitements.</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              L'Hyperthermie : <span className="text-primary">Une Force Naturelle</span>
            </h2>
            <p className="text-lg md:text-xl text-text/80 leading-relaxed">
              {t('hyperthermie.paragraph1')}
            </p>
            <p className="text-lg md:text-xl text-text/80 leading-relaxed">
              {t('hyperthermie.paragraph2')}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group text-lg"
            >
              {t('hyperthermie.learnMore')}
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hyperthermie;

