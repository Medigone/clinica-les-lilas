import React from 'react';
import { NavArrowRight } from 'iconoir-react';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import HeroBlock from '../components/HeroBlock';
import CTABlock from '../components/CTABlock';
import { ROUTES } from '../routes';

const Hyperthermie = () => {
  const { t } = useLanguageStore();
  const forWhoItems = t('hyperthermie.forWho.items', { returnObjects: true });

  return (
    <>
      <PageHead
        title={t('meta.hyperthermie.title')}
        description={t('meta.hyperthermie.description')}
        path={ROUTES.HIPERTERMIA}
        keywords={t('meta.hyperthermie.keywords')}
      />

      <HeroBlock
        imageSrc="/assets/about-bg.png"
        h1={t('hyperthermie.hero.h1')}
        subtitle={t('hyperthermie.hero.subtitle')}
        text={t('hyperthermie.hero.text')}
        ctaReason="hyperthermie"
      />

      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {t('hyperthermie.whatIs.title')}
              </h2>
              <p className="text-text/80 leading-relaxed">
                {t('hyperthermie.whatIs.text')}
              </p>
            </article>

            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {t('hyperthermie.ourApproach.title')}
              </h2>
              <p className="text-text/80 leading-relaxed">
                {t('hyperthermie.ourApproach.text')}
              </p>
            </article>

            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {t('hyperthermie.forWho.title')}
              </h2>
              <p className="text-text/80 mb-4 leading-relaxed">
                {t('hyperthermie.forWho.text')}
              </p>
              <ul className="space-y-2">
                {Array.isArray(forWhoItems) &&
                  forWhoItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <NavArrowRight className="w-3.5 h-3.5 text-primary mt-1 shrink-0" strokeWidth={2} />
                      <span className="text-text/80 text-sm">{item}</span>
                    </li>
                  ))}
              </ul>
            </article>

            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {t('hyperthermie.consultationEssential.title')}
              </h2>
              <p className="text-text/80 leading-relaxed">
                {t('hyperthermie.consultationEssential.text')}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            {t('hyperthermie.seriousFramework.title')}
          </h2>
          <p className="text-lg text-text/80 leading-relaxed mb-8">
            {t('hyperthermie.seriousFramework.text')}
          </p>
          <CTABlock variant="requestConsultation" size="large" reason="hyperthermie" />
        </div>
      </section>
    </>
  );
};

export default Hyperthermie;
