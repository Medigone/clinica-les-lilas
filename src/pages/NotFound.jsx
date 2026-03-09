import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguageStore } from '../store/languageStore';
import { ROUTES } from '../routes';

const NotFound = () => {
  const { t } = useLanguageStore();

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-text/80 mb-8">
        {t('notFound.message')}
      </p>
      <Link
        to={ROUTES.HOME}
        className="px-5 py-2 rounded-xl font-medium text-white bg-primary hover:bg-primary/90 hover:shadow-lg transition-all"
      >
        {t('notFound.backHome')}
      </Link>
    </section>
  );
};

export default NotFound;
