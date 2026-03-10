import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import HeroBlock from '../components/HeroBlock';
import { ROUTES } from '../routes';

const ContactMerci = () => {
  const { t } = useLanguageStore();

  return (
    <>
      <PageHead
        title={t('contactMerci.meta.title')}
        description={t('contactMerci.meta.description')}
        path={ROUTES.CONTACT_MERCI}
      />

      <HeroBlock
        imageSrc="/assets/about-bg.png"
        h1={t('contactMerci.hero.h1')}
        subtitle={t('contactMerci.hero.subtitle')}
        text={t('contactMerci.hero.text')}
        showCta={false}
        compact
      />

      <section className="pt-6 md:pt-8 pb-24 md:pb-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-2xl bg-primary/5 border border-primary/10 p-8 md:p-12">
            <p className="text-text/80 leading-relaxed mb-8">
              {t('contactMerci.body')}
            </p>
            <Link
              to={ROUTES.HOME}
              className="inline-block px-6 py-3 rounded-xl font-medium text-white bg-primary hover:bg-primary/90 hover:shadow-lg transition-all"
            >
              {t('contactMerci.cta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMerci;
