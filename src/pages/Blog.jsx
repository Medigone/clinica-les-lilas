import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavArrowRight } from 'iconoir-react';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import HeroBlock from '../components/HeroBlock';
import { ROUTES } from '../routes';
import { getBlogPosts } from '../blog';

const CATEGORY_MAP = {
  fr: { Traitements: 'categoryTraitements', 'Médecine intégrative': 'categoryMedecineIntegrative' },
  en: { Treatments: 'categoryTraitements', 'Integrative medicine': 'categoryMedecineIntegrative' },
  es: { Tratamientos: 'categoryTraitements', 'Medicina integrativa': 'categoryMedecineIntegrative' },
};

const Blog = () => {
  const { t, language } = useLanguageStore();
  const [activeCategory, setActiveCategory] = useState(null);
  const posts = getBlogPosts(language);

  const categories = [...new Set(posts.map((p) => p.category))];
  const filteredPosts = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'fr' ? 'fr-FR' : language === 'en' ? 'en-US' : 'es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <PageHead
        title={t('meta.blog.title')}
        description={t('meta.blog.description')}
        path={ROUTES.BLOG}
        keywords={t('meta.blog.keywords')}
      />

      <HeroBlock
        imageSrc="/assets/about-bg.png"
        h1={t('blog.heroTitle')}
        subtitle={t('blog.heroSubtitle')}
        text={t('blog.heroText')}
        showCta={false}
        compact
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === null
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-primary/80 border border-gray-200 hover:border-primary/30'
              }`}
            >
              {t('blog.allCategories')}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-primary/80 border border-gray-200 hover:border-primary/30'
                }`}
              >
                {CATEGORY_MAP[language]?.[cat]
                  ? t(`blog.${CATEGORY_MAP[language][cat]}`)
                  : cat}
              </button>
            ))}
          </div>

          {filteredPosts.length === 0 ? (
            <p className="text-center text-text/60 py-12">{t('blog.noArticles')}</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`${ROUTES.BLOG}/${post.slug}`}
                  className="group bg-white rounded-[1.75rem] border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-primary/5">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-primary/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-primary/60 bg-primary/5 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <time className="text-xs text-text/50" dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                    </div>
                    <h2 className="text-lg font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-text/70 leading-relaxed line-clamp-3 mb-4">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                      {t('blog.readArticle')}
                      <NavArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
