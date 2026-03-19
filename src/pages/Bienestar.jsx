import React from 'react';
import { Link } from 'react-router-dom';
import { NavArrowRight } from 'iconoir-react';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import HeroBlock from '../components/HeroBlock';
import SchemaServiceOrg from '../components/SchemaServiceOrg';
import CTABlock from '../components/CTABlock';
import { ROUTES } from '../routes';

const TIER_CONFIG = {
  essentiel: {
    gradient: 'from-background to-sky-300/25',
    badgeBg: 'bg-sky-100 text-sky-800 border-sky-200',
  },
  advanced: {
    gradient: 'from-background to-orange-300/25',
    badgeBg: 'bg-orange-100 text-orange-800 border-orange-200',
  },
  prestige: {
    gradient: 'from-background to-amber-300/25',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
  },
};

const TIER_THERAPIES = {
  essentiel: ['defensaInmune', 'detoxCelular'],
  advanced: ['energiaTotal', 'neuroRecovery', 'equilibrioMental', 'vitalidadCelular', 'inmunidadPlus'],
  prestige: ['nadLongevity', 'nadVitalBoost', 'performanceSport', 'longevityElite'],
};

const TherapyCard = ({ therapy, gradient, tierBadge, tierBadgeBg, labels, contactPath }) => (
  <div
    className={`relative overflow-hidden rounded-[1.75rem] bg-gradient-to-b ${gradient} border border-white/60 shadow-lg hover:shadow-xl transition-all flex flex-col backdrop-blur-sm`}
  >
    <div className="relative p-6 flex flex-col flex-1 min-h-0">
      <div className="flex items-center gap-2 mb-2">
        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wide border ${tierBadgeBg}`}>
          {tierBadge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-primary leading-tight mb-1">{therapy.name}</h3>
      <p className="text-sm text-secondary leading-snug mb-3">{therapy.subtitle}</p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {therapy.tags?.map((tag, i) => (
          <span
            key={i}
            className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/60 text-primary/90 border border-white/70"
          >
            {tag}
          </span>
        ))}
      </div>

      <ul className="space-y-1.5 mb-3 flex-1">
        {therapy.benefits?.map((benefit, i) => (
          <li key={i} className="flex items-start gap-2">
            <NavArrowRight className="w-3 h-3 text-primary mt-1 shrink-0" strokeWidth={2} />
            <span className="text-text/80 text-sm leading-snug">{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 items-center mb-3">
        {therapy.duration && (
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/5 text-primary border border-primary/10">
            {labels?.duration}: {therapy.duration}
          </span>
        )}
      </div>

      <Link
        to={contactPath}
        className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl text-sm font-medium bg-white/70 hover:bg-white/90 text-primary border border-white/80 hover:shadow-md transition-all"
      >
        <span className="flex items-center gap-2">
          {labels?.cta}
          <NavArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} />
        </span>
      </Link>
    </div>
  </div>
);

const TierSection = ({ tierKey, tiers, therapies, labels, contactPath }) => {
  const tier = tiers[tierKey];
  const config = TIER_CONFIG[tierKey];
  const therapyKeys = TIER_THERAPIES[tierKey];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-8">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border mb-3 ${config.badgeBg}`}>
            {tier.badge}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">{tier.title}</h2>
          <p className="text-text/70 max-w-2xl">{tier.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapyKeys.map((key) => {
            const therapy = therapies[key];
            if (!therapy) return null;
            return (
              <TherapyCard
                key={key}
                therapy={therapy}
                gradient={config.gradient}
                tierBadge={tier.badge}
                tierBadgeBg={config.badgeBg}
                labels={labels}
                contactPath={contactPath}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Bienestar = () => {
  const { t, language } = useLanguageStore();
  const tiers = t('bienestar.tiers', { returnObjects: true });
  const therapies = t('bienestar.therapies', { returnObjects: true });
  const labels = t('bienestar.labels', { returnObjects: true });
  const ctaSection = t('bienestar.ctaSection', { returnObjects: true });
  const indicationsItems = t('bienestar.indications.items', { returnObjects: true });
  const whyUsItems = t('bienestar.editorialWhyUs.items', { returnObjects: true });
  const contactPath = `${ROUTES.CONTACT}?reason=bienestar&language=${language}`;

  return (
    <>
      <SchemaServiceOrg
        name={t('meta.bienestar.title')}
        description={t('meta.bienestar.description')}
        path={ROUTES.BIENESTAR}
      />
      <PageHead
        title={t('meta.bienestar.title')}
        description={t('meta.bienestar.description')}
        path={ROUTES.BIENESTAR}
        keywords={t('meta.bienestar.keywords')}
      />

      <HeroBlock
        imageSrc="/assets/iv_therapy_bg.png"
        h1={t('bienestar.hero.h1')}
        subtitle={t('bienestar.hero.subtitle')}
        text={t('bienestar.hero.text')}
        ctaReason="bienestar"
      />

      {['essentiel', 'advanced', 'prestige'].map((tierKey) => (
        <TierSection
          key={tierKey}
          tierKey={tierKey}
          tiers={tiers}
          therapies={therapies}
          labels={labels}
          contactPath={contactPath}
        />
      ))}

      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {t('bienestar.personalized.title')}
              </h2>
              <p className="text-text/80 leading-relaxed">
                {t('bienestar.personalized.text')}
              </p>
            </article>

            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {t('bienestar.indications.title')}
              </h2>
              <p className="text-text/80 mb-4 leading-relaxed">
                {t('bienestar.indications.text')}
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
                {t('bienestar.process.title')}
              </h2>
              <p className="text-text/80 leading-relaxed">
                {t('bienestar.process.text')}
              </p>
            </article>

            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {t('bienestar.editorialWhyUs.title')}
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

      <section className="py-16 md:py-20 bg-white/50">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            {ctaSection?.title}
          </h2>
          <p className="text-text/80 mb-8 leading-relaxed">
            {ctaSection?.text}
          </p>
          <CTABlock variant="requestConsultation" size="large" reason="bienestar" />
        </div>
      </section>
    </>
  );
};

export default Bienestar;
