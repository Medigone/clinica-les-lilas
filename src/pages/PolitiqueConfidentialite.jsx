import React from 'react';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import HeroBlock from '../components/HeroBlock';
import { ROUTES } from '../routes';

const PolitiqueConfidentialite = () => {
  const { t } = useLanguageStore();
  const content = t('mentionsLegales.content', { returnObjects: true });

  return (
    <>
      <PageHead
        title={t('meta.politiqueConfidentialite.title')}
        description={t('meta.politiqueConfidentialite.description')}
        path={ROUTES.POLITIQUE_CONFIDENTIALITE}
      />

      <HeroBlock
        imageSrc="/assets/about-bg.png"
        h1={t('mentionsLegales.h1')}
        subtitle={t('mentionsLegales.lastUpdate')}
        showCta={false}
        compact
      />

      <section className="pt-6 md:pt-8 pb-24 md:pb-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 md:p-10">
            {content && typeof content === 'object' && (
              <div className="divide-y divide-gray-100">
                {Object.values(content).map((section, index) => (
                  <div key={index} className="py-6 first:pt-0">
                    <h2 className="text-lg font-semibold text-primary mb-3">
                      {section.title}
                    </h2>
                    {section.text && (
                      <p className="text-text/70 leading-relaxed text-[15px] mb-3">
                        {section.text}
                      </p>
                    )}
                    {Array.isArray(section.items) && (
                      <ul className="space-y-1.5 mt-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-[15px] text-text/70">
                            <span className="mt-2 w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-text/40 leading-relaxed">
              Clínica Les Lilas — Avinguda de la Diagonal, 4, 03550 Sant Joan d'Alacant, Alicante, España
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PolitiqueConfidentialite;
