import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ClipboardCheck, Clock, NavArrowRight, Plus, Star, User } from 'iconoir-react';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import HeroBlock from '../components/HeroBlock';
import CTABlock from '../components/CTABlock';
import SchemaServiceOrg from '../components/SchemaServiceOrg';
import { ROUTES } from '../routes';

const CARD_ICONS = [
  (props) => <User {...props} />,
  (props) => <ClipboardCheck {...props} />,
  (props) => <Clock {...props} />,
  (props) => <Star {...props} />,
  (props) => <Calendar {...props} />,
];

const Sueroterapia = () => {
  const { t, language } = useLanguageStore();
  const cards = t('sueroterapia.cards', { returnObjects: true });

  return (
    <>
      <SchemaServiceOrg
        name={t('meta.sueroterapia.title')}
        description={t('meta.sueroterapia.description')}
        path={ROUTES.SUEROTERAPIA}
      />
      <PageHead
        title={t('meta.sueroterapia.title')}
        description={t('meta.sueroterapia.description')}
        path={ROUTES.SUEROTERAPIA}
        keywords={t('meta.sueroterapia.keywords')}
      />

      <HeroBlock
        imageSrc="/assets/iv_therapy_bg.png"
        h1={t('sueroterapia.hero.h1')}
        subtitle={t('sueroterapia.hero.subtitle')}
        text={t('sueroterapia.hero.text')}
        ctaReason="sueroterapia"
      />

      {/* Sérums */}
      {(() => {
        const serums = t('sueroterapia.serums.items', { returnObjects: true });
        const serumImages = [
          '/assets/vitamine_c.png',
          '/assets/Vitamina_B12.png',
          '/assets/Curcumina.png',
          '/assets/NAC.png',
          '/assets/NAD.png',
        ];
        const serumGradients = [
          'from-background to-orange-300/25',
          'from-background to-sky-300/25',
          'from-background to-amber-300/25',
          'from-background to-rose-300/25',
          'from-background to-teal-300/25',
        ];
        return Array.isArray(serums) && serums.length > 0 ? (
          <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
              <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
                {t('sueroterapia.serums.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serums.map((serum, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-[1.75rem] bg-gradient-to-b ${serumGradients[index]} border border-white/60 shadow-lg hover:shadow-xl transition-all flex flex-col backdrop-blur-sm`}
                  >
                    <div className="relative p-6 flex flex-col flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden bg-white/80 border-2 border-white/90 shadow-md flex items-center justify-center">
                          <img
                            src={serumImages[index]}
                            alt={serum.title}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xl font-bold text-primary">{serum.title}</h3>
                          <p className="text-sm text-secondary mt-0.5">{serum.subtitle}</p>
                        </div>
                      </div>
                      {serum.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {serum.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/60 text-primary/90 border border-white/70"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center gap-4 py-4 border-y border-white/40 my-auto">
                        <div className="flex-1 text-center">
                          <span className="block text-lg font-bold text-primary">
                            {serum.benefits?.length ?? 0}
                          </span>
                          <span className="text-xs text-secondary">{t('sueroterapia.serums.benefitsLabel')}</span>
                        </div>
                        <div className="w-px h-8 bg-white/50" />
                        <div className="flex-1 text-center">
                          <span className="block text-sm font-semibold text-primary">
                            {t('sueroterapia.serums.sessionDuration')}
                          </span>
                          <span className="text-xs text-secondary">{t('sueroterapia.serums.sessionLabel')}</span>
                        </div>
                      </div>
                      <Link
                        to={`${ROUTES.CONTACT}?reason=sueroterapia&language=${language}`}
                        className="mt-4 w-full inline-flex items-center justify-center px-4 py-2.5 rounded-2xl text-sm font-medium bg-white/70 hover:bg-white/90 text-primary border border-white/80 hover:shadow-md transition-all"
                      >
                        {t('sueroterapia.serums.ctaLabel')}
                      </Link>
                    </div>
                  </div>
                ))}
                {/* Carte "Et bien plus encore" */}
                <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-background to-gray-300/25 border border-white/60 shadow-lg hover:shadow-xl transition-all flex flex-col backdrop-blur-sm">
                  <div className="relative p-6 flex flex-col flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden bg-white/80 border-2 border-white/90 shadow-md flex items-center justify-center">
                        <Plus className="w-8 h-8 text-primary" strokeWidth={2} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-bold text-primary">{t('sueroterapia.serums.moreCard.title')}</h3>
                        <p className="text-sm text-secondary mt-0.5">{t('sueroterapia.serums.moreCard.subtitle')}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {t('sueroterapia.serums.moreCard.tags', { returnObjects: true })?.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/60 text-primary/90 border border-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 py-4 border-y border-white/40 my-auto">
                      <div className="flex-1 text-center">
                        <span className="block text-lg font-bold text-primary">
                          {t('sueroterapia.serums.moreCard.stat1Value')}
                        </span>
                        <span className="text-xs text-secondary">{t('sueroterapia.serums.moreCard.stat1Label')}</span>
                      </div>
                    </div>
                    <Link
                      to={`${ROUTES.CONTACT}?reason=sueroterapia&language=${language}`}
                      className="mt-4 w-full inline-flex items-center justify-center px-4 py-2.5 rounded-2xl text-sm font-medium bg-white/70 hover:bg-white/90 text-primary border border-white/80 hover:shadow-md transition-all"
                    >
                      {t('sueroterapia.serums.ctaLabel')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null;
      })()}

      {/* Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.isArray(cards) &&
              cards.map((card, index) => (
                <div
                  key={index}
                  className="block p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="shrink-0 w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center text-primary/60">
                      {CARD_ICONS[index] && CARD_ICONS[index]({ className: 'w-5 h-5' })}
                    </span>
                    <h3 className="text-xl font-bold text-primary">{card.title}</h3>
                  </div>
                  <div className="flex-1">
                    {card.text && (
                      <p className="text-text/70 leading-relaxed">{card.text}</p>
                    )}
                    {card.items && (
                      <ul className={`space-y-2 ${card.text ? 'mt-4' : ''}`}>
                        {card.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <NavArrowRight className="w-3.5 h-3.5 text-primary mt-1 shrink-0" strokeWidth={2} />
                            <span className="text-text/70 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {card.cta && (
                    <div className="mt-6">
                      <CTABlock variant="requestConsultation" size="default" reason="sueroterapia" />
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sueroterapia;
