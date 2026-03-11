import React from 'react';
import { NavArrowRight } from 'iconoir-react';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import HeroBlock from '../components/HeroBlock';
import CTABlock from '../components/CTABlock';
import SchemaServiceOrg from '../components/SchemaServiceOrg';
import { ROUTES } from '../routes';

const Hyperthermie = () => {
  const { t } = useLanguageStore();
  const forWhoItems = t('hyperthermie.forWho.items', { returnObjects: true });
  const benefitsItems = t('hyperthermie.benefits.items', { returnObjects: true });
  const sessionSteps = t('hyperthermie.session.steps', { returnObjects: true });
  const beforeTreatmentItems = t('hyperthermie.beforeTreatment.items', { returnObjects: true });
  const followUpItems = t('hyperthermie.followUp.items', { returnObjects: true });
  const faqItems = t('hyperthermie.faq.items', { returnObjects: true });

  return (
    <>
      <SchemaServiceOrg
        name={t('meta.hyperthermie.title')}
        description={t('meta.hyperthermie.description')}
        path={ROUTES.HIPERTERMIA}
      />
      <PageHead
        title={t('meta.hyperthermie.title')}
        description={t('meta.hyperthermie.description')}
        path={ROUTES.HIPERTERMIA}
        keywords={t('meta.hyperthermie.keywords')}
      />

      <HeroBlock
        imageSrc="/assets/about-bg.png"
        h1={t('hyperthermie.hero.h1')}
        subtitle={t('hyperthermie.hero.subtitle')}
        text={t('hyperthermie.hero.text')}
        ctaReason="hyperthermie"
      />

      {/* Définition + Approche */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col gap-6 lg:gap-8">
            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all overflow-hidden">
              <img
                src="/assets/page_hypertermia.png"
                alt="Séance d'hyperthermie oncologique en clinique"
                className="w-full h-auto rounded-xl object-cover shadow-md mb-6"
              />
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {t('hyperthermie.whatIs.title')}
              </h2>
              <p className="text-text/80 leading-relaxed">
                {t('hyperthermie.whatIs.text')}
              </p>
            </article>

            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {t('hyperthermie.ourApproach.title')}
              </h2>
              <p className="text-text/80 leading-relaxed">
                {t('hyperthermie.ourApproach.text')}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Séance (pleine largeur) + Cas d'utilisation + Bénéfices */}
      <section className="py-16 md:py-20 bg-gray-50/60">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all md:col-span-2">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">
                {t('hyperthermie.session.title')}
              </h2>
              <p className="text-text/80 leading-relaxed mb-4">
                {t('hyperthermie.session.text')}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {Array.isArray(sessionSteps) &&
                  sessionSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <NavArrowRight className="w-3.5 h-3.5 text-primary mt-1 shrink-0" strokeWidth={2} />
                      <span className="text-text/80 text-sm">{step}</span>
                    </li>
                  ))}
              </ul>
            </article>

            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {t('hyperthermie.forWho.title')}
              </h2>
              <p className="text-text/80 mb-4 leading-relaxed">
                {t('hyperthermie.forWho.text')}
              </p>
              <ul className="space-y-2">
                {Array.isArray(forWhoItems) &&
                  forWhoItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <NavArrowRight className="w-3.5 h-3.5 text-primary mt-1 shrink-0" strokeWidth={2} />
                      <span className="text-text/80 text-sm">{item}</span>
                    </li>
                  ))}
              </ul>
            </article>

            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {t('hyperthermie.benefits.title')}
              </h2>
              <p className="text-text/80 mb-4 leading-relaxed">
                {t('hyperthermie.benefits.text')}
              </p>
              <ul className="space-y-2">
                {Array.isArray(benefitsItems) &&
                  benefitsItems.map((item, index) => (
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

      {/* Evidencia científica */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
              {t('hyperthermie.evidence.title')}
            </h2>
            <p className="text-text/80 leading-relaxed mb-4">
              {t('hyperthermie.evidence.text')}
            </p>
            <p className="text-text/60 text-sm italic leading-relaxed border-t border-gray-100 pt-4">
              {t('hyperthermie.evidence.disclaimer')}
            </p>
          </article>
        </div>
      </section>

      {/* Préparation + suivi */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {t('hyperthermie.beforeTreatment.title')}
              </h2>
              <p className="text-text/80 mb-4 leading-relaxed">
                {t('hyperthermie.beforeTreatment.text')}
              </p>
              <ul className="space-y-2">
                {Array.isArray(beforeTreatmentItems) &&
                  beforeTreatmentItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <NavArrowRight className="w-3.5 h-3.5 text-primary mt-1 shrink-0" strokeWidth={2} />
                      <span className="text-text/80 text-sm">{item}</span>
                    </li>
                  ))}
              </ul>
            </article>

            <article className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {t('hyperthermie.followUp.title')}
              </h2>
              <p className="text-text/80 mb-4 leading-relaxed">
                {t('hyperthermie.followUp.text')}
              </p>
              <ul className="space-y-2">
                {Array.isArray(followUpItems) &&
                  followUpItems.map((item, index) => (
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

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gray-50/60">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
            {t('hyperthermie.faq.title')}
          </h2>
          <div className="space-y-4">
            {Array.isArray(faqItems) &&
              faqItems.map((item, index) => (
                <article key={index} className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
                  <h3 className="text-base md:text-lg font-bold text-primary mb-2">
                    {item.q}
                  </h3>
                  <p className="text-text/80 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            {t('hyperthermie.seriousFramework.title')}
          </h2>
          <p className="text-lg text-text/80 leading-relaxed mb-8">
            {t('hyperthermie.seriousFramework.text')}
          </p>
          <CTABlock variant="requestConsultation" size="large" reason="hyperthermie" />
        </div>
      </section>
    </>
  );
};

export default Hyperthermie;
