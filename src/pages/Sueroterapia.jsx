import React from 'react';
import { Link } from 'react-router-dom';
import { NavArrowRight } from 'iconoir-react';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import HeroBlock from '../components/HeroBlock';
import SchemaServiceOrg from '../components/SchemaServiceOrg';
import { ROUTES } from '../routes';

const CARD_GRADIENTS = [
  'from-background to-orange-300/25',
  'from-background to-sky-300/25',
  'from-background to-teal-300/25',
  'from-background to-amber-300/25',
  'from-background to-rose-300/25',
];

const Sueroterapia = () => {
  const { t, language } = useLanguageStore();
  const cards = t('sueroterapia.cards', { returnObjects: true });
  const labels = t('sueroterapia.cardsLabels', { returnObjects: true });
  const moreCard = t('sueroterapia.moreProtocolsCard', { returnObjects: true });
  const indicationsItems = t('sueroterapia.indications.items', { returnObjects: true });
  const whyUsItems = t('sueroterapia.whyUs.items', { returnObjects: true });

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

      {/* Protocoles de sueroterapia */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
            {t('sueroterapia.protocolsTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {Array.isArray(cards) &&
              cards.map((card, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-[1.75rem] bg-gradient-to-b ${CARD_GRADIENTS[index]} border border-white/60 shadow-lg hover:shadow-xl transition-all flex flex-col backdrop-blur-sm h-[440px]`}
                >
                  <div className="relative p-6 flex flex-col flex-1 min-h-0">
                    {/* Titre : hauteur fixe 2 lignes */}
                    <div className="h-[2.75rem] flex flex-col justify-center mb-1 overflow-hidden">
                      <h3 className="text-xl font-bold text-primary leading-tight line-clamp-2" title={card.title}>{card.title}</h3>
                    </div>
                    {/* Sous-titre : hauteur fixe 2 lignes */}
                    <div className="h-[2.5rem] flex flex-col justify-start mb-3 overflow-hidden">
                      <p className="text-sm text-secondary leading-snug line-clamp-2" title={card.subtitle || ''}>
                        {card.subtitle || '\u00A0'}
                      </p>
                    </div>
                    {/* Tags : hauteur fixe 2 lignes (4rem pour afficher les 2 lignes de badges sans chevauchement avec Sérums) */}
                    <div className="flex flex-wrap gap-2 mb-3 h-[4rem] overflow-hidden content-start items-start">
                      {card.tags?.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/60 text-primary/90 border border-white/70 shrink-0"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Sérums : 2 lignes max */}
                    <div className="mb-2 h-[2.75rem] text-sm overflow-hidden line-clamp-2" title={card.serums?.join(' · ') || ''}>
                      <span className="font-semibold text-primary">{labels?.serums || 'Sérums'}: </span>
                      <span className="text-primary/90">{card.serums?.join(' · ') || ''}</span>
                    </div>
                    {/* Glutathion : 1 ligne fixe */}
                    <div className="mb-2 h-[1.5rem] text-sm flex items-center overflow-hidden">
                      {card.glutathion && (
                        <span className="truncate">
                          <span className="font-semibold text-primary">{labels?.glutathion || 'Glutathion'}: </span>
                          <span className="text-text/70 text-xs">{card.glutathion}</span>
                        </span>
                      )}
                    </div>
                    {/* Durée · Séances (badges) */}
                    <div className="flex flex-wrap gap-2 gap-y-1 items-center text-sm mb-2 min-h-[1.75rem] overflow-hidden">
                      {card.duration && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/5 text-primary border border-primary/10 shrink-0">
                          {labels?.duration || 'Durée'}: {card.duration}
                        </span>
                      )}
                      {card.sessions && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary/10 text-primary border border-secondary/20 shrink-0">
                          {labels?.sessions || 'Séances'}: {card.sessions}
                        </span>
                      )}
                    </div>
                    {/* Disclaimer / Note : 1 ligne fixe */}
                    <div className="h-[1.25rem] text-xs text-primary/80 italic flex items-center overflow-hidden shrink-0" title={card.disclaimer || card.note || ''}>
                      {(card.disclaimer || card.note) && (
                        <span className="truncate">{card.disclaimer || card.note}</span>
                      )}
                    </div>
                    {card.ctaLabel && (
                      <Link
                        to={`${ROUTES.CONTACT}?reason=sueroterapia&language=${language}`}
                        className="cta-btn mt-auto pt-4 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl text-sm font-medium leading-[1.2] bg-white/70 hover:bg-white/90 text-primary border border-white/80 hover:shadow-md transition-all shrink-0"
                      >
                        <span className="flex items-center gap-2 -translate-y-0.5">
                          {card.ctaLabel}
                          <NavArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} />
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            {moreCard?.title && (
              <div
                className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-background to-stone-300/30 border border-white/60 shadow-lg hover:shadow-xl transition-all flex flex-col backdrop-blur-sm h-[440px]"
              >
                <div className="relative p-6 flex flex-col flex-1 min-h-0">
                  <div className="h-[2.75rem] flex flex-col justify-center mb-1 overflow-hidden">
                    <h3 className="text-xl font-bold text-primary leading-tight line-clamp-2" title={moreCard.title}>{moreCard.title}</h3>
                  </div>
                  <div className="h-[2.5rem] flex flex-col justify-start mb-3 overflow-hidden">
                    <p className="text-sm text-secondary leading-snug line-clamp-2" title={moreCard.subtitle || ''}>
                      {moreCard.subtitle || '\u00A0'}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3 h-[4rem] overflow-hidden content-start items-start">
                    {moreCard.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/60 text-primary/90 border border-white/70 shrink-0"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mb-2 h-[2.75rem] text-sm overflow-hidden line-clamp-2" title={moreCard.serums || ''}>
                    <span className="font-semibold text-primary">{labels?.serums || 'Sérums'}: </span>
                    <span className="text-primary/90">{moreCard.serums || ''}</span>
                  </div>
                  <div className="mb-2 h-[1.5rem] flex items-center overflow-hidden" />
                  <div className="flex flex-wrap gap-2 gap-y-1 items-center text-sm mb-2 min-h-[1.75rem] overflow-hidden">
                    {moreCard.duration && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/5 text-primary border border-primary/10 shrink-0">
                        {labels?.duration || 'Durée'}: {moreCard.duration}
                      </span>
                    )}
                    {moreCard.sessions && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary/10 text-primary border border-secondary/20 shrink-0">
                        {labels?.sessions || 'Séances'}: {moreCard.sessions}
                      </span>
                    )}
                  </div>
                  <div className="h-[1.25rem] flex items-center overflow-hidden shrink-0" />
                  {moreCard.ctaLabel && (
                    <Link
                      to={`${ROUTES.CONTACT}?reason=sueroterapia&language=${language}`}
                      className="cta-btn mt-auto pt-4 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl text-sm font-medium leading-[1.2] bg-white/70 hover:bg-white/90 text-primary border border-white/80 hover:shadow-md transition-all shrink-0"
                    >
                      <span className="flex items-center gap-2 -translate-y-0.5">
                        {moreCard.ctaLabel}
                        <NavArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} />
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blocs éditoriaux : approche, indications, déroulement, différenciation */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {t('sueroterapia.personalized.title')}
              </h2>
              <p className="text-text/80 leading-relaxed">
                {t('sueroterapia.personalized.text')}
              </p>
            </article>

            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {t('sueroterapia.indications.title')}
              </h2>
              <p className="text-text/80 mb-4 leading-relaxed">
                {t('sueroterapia.indications.text')}
              </p>
              <ul className="space-y-2">
                {Array.isArray(indicationsItems) &&
                  indicationsItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <NavArrowRight className="w-3.5 h-3.5 text-primary mt-1 shrink-0" strokeWidth={2} />
                      <span className="text-text/80 text-sm">{item}</span>
                    </li>
                  ))}
              </ul>
            </article>

            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {t('sueroterapia.process.title')}
              </h2>
              <p className="text-text/80 leading-relaxed">
                {t('sueroterapia.process.text')}
              </p>
            </article>

            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {t('sueroterapia.whyUs.title')}
              </h2>
              <ul className="space-y-2">
                {Array.isArray(whyUsItems) &&
                  whyUsItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <NavArrowRight className="w-3.5 h-3.5 text-primary mt-1 shrink-0" strokeWidth={2} />
                      <span className="text-text/80 text-sm">{item}</span>
                    </li>
                  ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sueroterapia;
