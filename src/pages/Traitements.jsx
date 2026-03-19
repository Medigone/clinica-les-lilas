import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'iconoir-react';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import HeroBlock from '../components/HeroBlock';
import ResponsiveCoverImage, {
  SIZES_TRAITEMENTS_GRID,
} from '../components/ResponsiveCoverImage';
import { ROUTES } from '../routes';

const CARE_HERO_IMAGES = {
  [ROUTES.HIPERTERMIA]: '/assets/about-bg.png',
  [ROUTES.ONCOLOGIA]: '/assets/blog_suero_1.png',
  [ROUTES.BIENESTAR]: '/assets/iv_therapy_bg.png',
};

const Traitements = () => {
  const { t } = useLanguageStore();
  const cards = t('traitements.cards', { returnObjects: true });

  return (
    <>
      <PageHead
        title={t('meta.traitements.title')}
        description={t('meta.traitements.description')}
        path={ROUTES.TRAITEMENTS}
        keywords={t('meta.traitements.keywords')}
      />

      <HeroBlock
        imageSrc="/assets/traitements_bg.png"
        h1={t('traitements.hero.h1')}
        subtitle={t('traitements.hero.subtitle')}
        text={t('traitements.hero.text')}
      />

      {/* Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(cards) &&
              cards.map((card, index) => (
                <Link
                  key={index}
                  to={card.path}
                  className="block overflow-hidden bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all"
                >
                  <div className="h-44 overflow-hidden">
                    <ResponsiveCoverImage
                      pngSrc={CARE_HERO_IMAGES[card.path] || '/assets/traitements_bg.png'}
                      sizes={SIZES_TRAITEMENTS_GRID}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-2">{card.title}</h3>
                    <p className="text-text/70 mb-4">{card.text}</p>
                    <span className="text-primary font-medium inline-flex items-center gap-2">
                      {t('cta.seePage')}
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Traitements;
