import React from 'react';
import { Calendar, Heart, List, ShieldCheck } from 'iconoir-react';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import HeroBlock from '../components/HeroBlock';
import CTABlock from '../components/CTABlock';
import { ROUTES } from '../routes';

const CARD_ICONS = [
  (props) => <ShieldCheck {...props} />,
  (props) => <List {...props} />,
  (props) => <Heart {...props} />,
  (props) => <Calendar {...props} />,
];

const MedecineRegenerative = () => {
  const { t } = useLanguageStore();
  const cards = t('medecineRegenerative.cards', { returnObjects: true });

  return (
    <>
      <PageHead
        title={t('meta.medecineRegenerative.title')}
        description={t('meta.medecineRegenerative.description')}
        path={ROUTES.MEDECINE_REGENERATIVE}
      />

      <HeroBlock
        imageSrc="/assets/medecine_regen_bg.png"
        h1={t('medecineRegenerative.hero.h1')}
        subtitle={t('medecineRegenerative.hero.subtitle')}
        text={t('medecineRegenerative.hero.text')}
        ctaReason="medecine-regenerative"
      />

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
                  <p className="text-text/70 leading-relaxed flex-1">{card.text}</p>
                  {card.cta && (
                    <div className="mt-6">
                      <CTABlock variant="requestConsultation" size="default" reason="medecine-regenerative" />
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

export default MedecineRegenerative;
