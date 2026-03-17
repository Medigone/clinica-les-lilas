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
  support: {
    gradient: 'from-background to-sky-300/25',
    badgeBg: 'bg-sky-100 text-sky-800 border-sky-200',
  },
  protocolo: {
    gradient: 'from-background to-teal-300/25',
    badgeBg: 'bg-teal-100 text-teal-800 border-teal-200',
  },
  avanzado: {
    gradient: 'from-background to-rose-300/25',
    badgeBg: 'bg-rose-100 text-rose-800 border-rose-200',
  },
};

const TIER_THERAPIES = {
  support: ['soporteInmune', 'soporteNeurologico', 'vitaminaCOnco'],
  protocolo: ['neuroSupportOnco', 'antioxidanteOnco', 'inmunidadIntensivaOnco', 'curcuminaOnco', 'equilibrioEmocionalOnco'],
  avanzado: ['antioxidanteOncoPremium', 'cardioProtectOnco', 'mitoSupportOnco', 'inmunomodulacionOnco', 'cardioDefenseOnco'],
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

      {therapy.note && (
        <p className="text-xs text-primary/70 italic mb-3 leading-snug">⚕ {therapy.note}</p>
      )}

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

const Oncologia = () => {
  const { t, language } = useLanguageStore();
  const tiers = t('oncologia.tiers', { returnObjects: true });
  const therapies = t('oncologia.therapies', { returnObjects: true });
  const labels = t('oncologia.labels', { returnObjects: true });
  const ctaSection = t('oncologia.ctaSection', { returnObjects: true });
  const contactPath = `${ROUTES.CONTACT}?reason=oncologia&language=${language}`;

  return (
    <>
      <SchemaServiceOrg
        name={t('meta.oncologia.title')}
        description={t('meta.oncologia.description')}
        path={ROUTES.ONCOLOGIA}
      />
      <PageHead
        title={t('meta.oncologia.title')}
        description={t('meta.oncologia.description')}
        path={ROUTES.ONCOLOGIA}
        keywords={t('meta.oncologia.keywords')}
      />

      <HeroBlock
        imageSrc="/assets/about-bg.png"
        h1={t('oncologia.hero.h1')}
        subtitle={t('oncologia.hero.subtitle')}
        text={t('oncologia.hero.text')}
        ctaReason="oncologia"
      />

      {['support', 'protocolo', 'avanzado'].map((tierKey) => (
        <TierSection
          key={tierKey}
          tierKey={tierKey}
          tiers={tiers}
          therapies={therapies}
          labels={labels}
          contactPath={contactPath}
        />
      ))}

      <section className="py-16 md:py-20 bg-white/50">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            {ctaSection?.title}
          </h2>
          <p className="text-text/80 mb-8 leading-relaxed">
            {ctaSection?.text}
          </p>
          <CTABlock variant="requestConsultation" size="large" reason="oncologia" />
        </div>
      </section>
    </>
  );
};

export default Oncologia;
