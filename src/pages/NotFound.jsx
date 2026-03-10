import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import { ROUTES } from '../routes';

const NotFound = () => {
  const { t } = useLanguageStore();

  return (
    <>
      <PageHead
        title={t('meta.notFound.title')}
        description={t('meta.notFound.description')}
        path="/404"
      />
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-8xl md:text-9xl font-bold text-primary/20 mb-4 select-none">
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-3">
          {t('notFound.title')}
        </h1>
        <p className="text-lg text-text/70 mb-10 max-w-md">
          {t('notFound.message')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to={ROUTES.HOME}
            className="px-6 py-3 rounded-xl font-medium text-white bg-primary hover:bg-primary/90 hover:shadow-lg transition-all"
          >
            {t('notFound.backHome')}
          </Link>
          <Link
            to={ROUTES.CONTACT}
            className="px-6 py-3 rounded-xl font-medium text-primary bg-white border border-gray-200 hover:border-primary/20 hover:bg-gray-50 transition-all"
          >
            {t('notFound.contactUs')}
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
