import React from 'react';
import { Calendar, ClipboardCheck, Clock, NavArrowRight, Star, User } from 'iconoir-react';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import HeroBlock from '../components/HeroBlock';
import CTABlock from '../components/CTABlock';
import { ROUTES } from '../routes';

const CARD_ICONS = [
  (props) => <User {...props} />,
  (props) => <ClipboardCheck {...props} />,
  (props) => <Clock {...props} />,
  (props) => <Star {...props} />,
  (props) => <Calendar {...props} />,
];

const Sueroterapia = () => {
  const { t } = useLanguageStore();
  const cards = t('sueroterapia.cards', { returnObjects: true });

  return (
    <>
      <PageHead
        title={t('meta.sueroterapia.title')}
        description={t('meta.sueroterapia.description')}
        path={ROUTES.SUEROTERAPIA}
      />

      <HeroBlock
        imageSrc="/assets/iv_therapy_bg.png"
        h1={t('sueroterapia.hero.h1')}
        subtitle={t('sueroterapia.hero.subtitle')}
        text={t('sueroterapia.hero.text')}
        ctaReason="sueroterapia"
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
