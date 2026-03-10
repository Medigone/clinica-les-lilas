import React from 'react';
import { NavArrowRight } from 'iconoir-react';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import HeroBlock from '../components/HeroBlock';
import CTABlock from '../components/CTABlock';
import { ROUTES } from '../routes';

const APropos = () => {
  const { t } = useLanguageStore();
  const commitmentItems = t('aPropos.commitment.items', { returnObjects: true });
  const historyParagraphs = t('aPropos.history.paragraphs', { returnObjects: true });
  const historyItems = t('aPropos.history.items', { returnObjects: true });

  return (
    <>
      <PageHead
        title={t('meta.aPropos.title')}
        description={t('meta.aPropos.description')}
        path={ROUTES.A_PROPOS}
        keywords={t('meta.aPropos.keywords')}
      />

      <HeroBlock
        imageSrc="/assets/about-bg.png"
        h1={t('aPropos.hero.h1')}
        subtitle={t('aPropos.hero.subtitle')}
        text={t('aPropos.hero.text')}
        showCta={false}
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            {t('aPropos.history.title')}
          </h2>
          <div className="space-y-4">
            {Array.isArray(historyParagraphs) &&
              historyParagraphs.map((paragraph, index) => (
                <React.Fragment key={index}>
                  <p className="text-lg text-text/80 leading-relaxed">
                    {paragraph}
                  </p>
                  {index === 0 && Array.isArray(historyItems) && (
                    <ul className="list-disc list-inside text-lg text-text/80 leading-relaxed space-y-2 ml-2">
                      {historyItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            {t('aPropos.philosophy.title')}
          </h2>
          <p className="text-lg text-text/80 leading-relaxed">
            {t('aPropos.philosophy.text')}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
            {t('aPropos.commitment.title')}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.isArray(commitmentItems) &&
              commitmentItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <NavArrowRight className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-text/80">{item}</span>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            {t('aPropos.reassuring.title')}
          </h2>
          <p className="text-lg text-text/80 mb-8 leading-relaxed">
            {t('aPropos.reassuring.text')}
          </p>
          <CTABlock variant="bookAppointment" size="large" />
        </div>
      </section>
    </>
  );
};

export default APropos;
