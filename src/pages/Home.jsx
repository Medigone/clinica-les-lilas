import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building,
  ChatBubble,
  Eye,
  Globe,
  Healthcare,
  Refresh,
  Search,
  Settings,
  ShieldCheck,
} from 'iconoir-react';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import HeroBlock from '../components/HeroBlock';
import CTABlock from '../components/CTABlock';
import { ROUTES } from '../routes';

const CARE_HERO_IMAGES = {
  '/traitements/hyperthermie-oncologique': '/assets/about-bg.png',
  '/traitements/sueroterapia': '/assets/iv_therapy_bg.png',
  '/traitements/medecine-regenerative': '/assets/traitements_bg.png',
  '/traitements/soutien-immunitaire': '/assets/soutien_immunitaire_bg.png',
};

const VALUE_BLOCK_ICONS = [
  (props) => <Search {...props} />,
  (props) => <Eye {...props} />,
  (props) => <ShieldCheck {...props} />,
  (props) => <Refresh {...props} />,
];

const WHY_US_ICONS = [
  (props) => <Healthcare {...props} />,
  (props) => <Settings {...props} />,
  (props) => <Globe {...props} />,
  (props) => <Building {...props} />,
  (props) => <ChatBubble {...props} />,
];

const CARD_BG = 'bg-white';

const Home = () => {
  const { t } = useLanguageStore();
  const valueBlocks = t('home.valueProposition.blocks', { returnObjects: true });
  const careCards = t('home.careAxes.cards', { returnObjects: true });
  const whyUsItems = t('home.whyUs.items', { returnObjects: true });

  return (
    <>
      <PageHead
        title={t('meta.home.title')}
        description={t('meta.home.description')}
        path={ROUTES.HOME}
        keywords={t('meta.home.keywords')}
      />

      <HeroBlock
        imageSrc="/assets/bg_hero_2.png"
        h1={t('home.hero.h1')}
        text={t('home.hero.text')}
      />

      <div>
        <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            {t('home.valueProposition.title')}
          </h2>
          <p className="text-lg text-text/80 mb-12 max-w-2xl leading-relaxed">
            {t('home.valueProposition.text')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {Array.isArray(valueBlocks) &&
              valueBlocks.map((block, index) => (
                <div
                  key={index}
                  className={`group p-8 rounded-[1.75rem] ${CARD_BG} border border-gray-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="shrink-0 w-7 h-7 rounded-full overflow-hidden bg-white border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.06)] flex items-center justify-center text-primary/80">
                      {VALUE_BLOCK_ICONS[index] && VALUE_BLOCK_ICONS[index]({ className: 'w-4 h-4' })}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-primary leading-snug tracking-tight">
                      {block.title}
                    </h3>
                  </div>
                  <p className="text-secondary text-sm md:text-[15px] font-normal leading-relaxed">
                    {block.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('home.careAxes.title')}
          </h2>
          <p className="text-lg text-text/80 mb-12 max-w-2xl">
            {t('home.careAxes.text')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.isArray(careCards) &&
              careCards.map((card, index) => (
                <Link
                  key={index}
                  to={card.path}
                  className={`block overflow-hidden rounded-[1.75rem] ${CARD_BG} border border-gray-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all`}
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={CARE_HERO_IMAGES[card.path] || '/assets/traitements_bg.png'}
                      alt=""
                      className="w-full h-full object-cover object-left"
                      aria-hidden
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-2">{card.title}</h3>
                    <p className="text-text/70 mb-4">{card.text}</p>
                    <span className="text-primary font-medium inline-flex items-center gap-2">
                      {card.cta}
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            {t('home.whyUs.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.isArray(whyUsItems) &&
              whyUsItems.map((item, index) => (
                <div
                  key={index}
                  className={`group p-6 rounded-[1.75rem] ${CARD_BG} border border-gray-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 flex items-start gap-2`}
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full overflow-hidden bg-white border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.06)] flex items-center justify-center text-primary/80">
                    {WHY_US_ICONS[index] && WHY_US_ICONS[index]({ className: 'w-4 h-4' })}
                  </div>
                  <p className="text-base text-text/80 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            {t('home.ctaConsultation.title')}
          </h2>
          <p className="text-lg text-text/80 mb-8 leading-relaxed">
            {t('home.ctaConsultation.text')}
          </p>
          <CTABlock variant="bookAppointment" size="large" />
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
