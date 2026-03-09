import React from 'react';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import HeroBlock from '../components/HeroBlock';
import CTABlock from '../components/CTABlock';
import { ROUTES } from '../routes';

const NotreApproche = () => {
  const { t } = useLanguageStore();
  const howWeAccompany = t('notreApproche.howWeAccompany.blocks', { returnObjects: true });
  const stepTitles = t('notreApproche.howWeAccompany.stepTitles', { returnObjects: true });

  return (
    <>
      <PageHead
        title={t('meta.notreApproche.title')}
        description={t('meta.notreApproche.description')}
        path={ROUTES.NOTRE_APPROCHE}
      />

      <HeroBlock
        imageSrc="/assets/approche_bg.png"
        h1={t('notreApproche.hero.h1')}
        subtitle={t('notreApproche.hero.subtitle')}
        text={t('notreApproche.hero.text')}
      />

      {/* Section 2 - Clinique centrée sur le patient */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">
            {t('notreApproche.patientCentered.title')}
          </h2>
          <p className="text-base sm:text-lg text-text/80 leading-relaxed">
            {t('notreApproche.patientCentered.text')}
          </p>
        </div>
      </section>

      {/* Section 3 - Notre manière d'accompagner - Timeline alternée */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-8 sm:mb-12 lg:mb-16">
            {t('notreApproche.howWeAccompany.title')}
          </h2>
          <div className="relative">
            {/* Ligne verticale pointillée (mobile/tablet: gauche, desktop: centre) */}
            <div className="absolute left-5 sm:left-6 lg:left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-primary/25 lg:-translate-x-1/2" />

            {Array.isArray(howWeAccompany) &&
              howWeAccompany.map((item, index) => {
                const isLeft = index % 2 === 0;
                const stepTitle = Array.isArray(stepTitles) ? stepTitles[index] : '';
                const cardContent = (
                  <>
                    <span className="text-primary font-bold text-base sm:text-lg mb-2 block">
                      &gt; {stepTitle}
                    </span>
                    <p className="text-text/80 text-sm sm:text-base leading-relaxed">{item}</p>
                  </>
                );
                const cardClasses =
                  'p-4 sm:p-5 rounded-xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100/80';
                return (
                  <div
                    key={index}
                    className="relative grid grid-cols-[auto_1fr] lg:grid-cols-[1fr_auto_1fr] items-center lg:items-center gap-3 sm:gap-4 lg:gap-6 pb-10 sm:pb-12 lg:pb-16 last:pb-0"
                  >
                    {/* Colonne 1: mobile/tablet = cercle, desktop = carte si isLeft */}
                    <div className="flex items-center justify-center lg:justify-end lg:pr-6 xl:pr-8">
                      <div className="lg:hidden w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 z-10 border-2 sm:border-4 border-[#F5F0E8]">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      {isLeft && (
                        <div className="hidden lg:block w-full max-w-md xl:max-w-lg ml-auto">
                          <div className={cardClasses}>{cardContent}</div>
                        </div>
                      )}
                    </div>

                    {/* Colonne 2: mobile/tablet = carte, desktop = cercle */}
                    <div className="min-w-0 lg:flex lg:justify-center">
                      <div className="lg:hidden">
                        <div className={cardClasses}>{cardContent}</div>
                      </div>
                      <div className="hidden lg:flex justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center shrink-0 z-10 border-4 border-[#F5F0E8]">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>

                    {/* Colonne 3: desktop = carte si !isLeft */}
                    <div className="hidden lg:block lg:pl-6 xl:pl-8">
                      {!isLeft && (
                        <div className="max-w-md xl:max-w-lg">
                          <div className={cardClasses}>{cardContent}</div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* Section 4 - Approche fondée sur la personnalisation */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">
            {t('notreApproche.personalization.title')}
          </h2>
          <p className="text-base sm:text-lg text-text/80 leading-relaxed">
            {t('notreApproche.personalization.text')}
          </p>
        </div>
      </section>

      {/* Section 5 - Première consultation */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">
            {t('notreApproche.firstConsultation.title')}
          </h2>
          <p className="text-base sm:text-lg text-text/80 mb-6 sm:mb-8 leading-relaxed">
            {t('notreApproche.firstConsultation.text')}
          </p>
          <CTABlock variant="bookAppointment" size="large" />
        </div>
      </section>
    </>
  );
};

export default NotreApproche;
