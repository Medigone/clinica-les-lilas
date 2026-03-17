import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NavArrowRight, NavArrowLeft } from 'iconoir-react';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import CTABlock from '../components/CTABlock';
import NotFound from './NotFound';
import { CONTACT, getBlogPath, getCanonicalBlogSlug, ROUTES } from '../routes';
import { getBlogPost, getBlogPosts } from '../blog';

const SITE_URL = 'https://clinicaleslilas.com';

function slugify(text) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

const mdxComponents = {
  h2: ({ children }) => (
    <h2
      id={slugify(String(children))}
      className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-4 scroll-mt-24"
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl md:text-2xl font-semibold text-primary mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-base md:text-lg text-text/80 leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside space-y-2 text-text/80 mb-6 ml-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside space-y-2 text-text/80 mb-6 ml-2">{children}</ol>
  ),
  li: ({ children }) => <li className="text-base md:text-lg leading-relaxed">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-primary">{children}</strong>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary/30 pl-4 py-2 my-6 text-text/70 italic">
      {children}
    </blockquote>
  ),
};

const BlogPost = () => {
  const { slug } = useParams();
  const { t, language } = useLanguageStore();
  const [toc, setToc] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);
  const contentRef = useRef(null);

  const canonicalSlug = getCanonicalBlogSlug(slug);
  const post = getBlogPost(canonicalSlug, language);
  const allPosts = getBlogPosts(language);

  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h2[id]');
      setToc(Array.from(headings).map((h) => ({ id: h.id, title: h.textContent })));
    }
  }, [canonicalSlug, language]);

  if (slug && canonicalSlug !== slug) {
    return <Navigate to={getBlogPath(canonicalSlug)} replace />;
  }

  if (!post) return <NotFound />;

  const { Component, title, description, date, image, faq, category, tags } = post;
  const relatedPosts = allPosts
    .filter((p) => p.slug !== canonicalSlug && p.category === category)
    .slice(0, 2);

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString(
      language === 'fr' ? 'fr-FR' : language === 'en' ? 'en-US' : 'es-ES',
      { year: 'numeric', month: 'long', day: 'numeric' },
    );
  };

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: image ? `${SITE_URL}${image}` : `${SITE_URL}/assets/og-image.png`,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Organization',
      name: 'Clínica Les Lilas',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Clínica Les Lilas',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/Logo_clinica_les_lilas.svg` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${getBlogPath(canonicalSlug)}`,
    },
    keywords: tags?.join(', '),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Clínica Les Lilas', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}${ROUTES.BLOG}` },
      { '@type': 'ListItem', position: 3, name: title, item: `${SITE_URL}${getBlogPath(canonicalSlug)}` },
    ],
  };

  const faqSchema =
    faq?.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }
      : null;

  return (
    <>
      <PageHead
        title={`${title} | Clínica Les Lilas`}
        description={description}
        path={getBlogPath(canonicalSlug)}
        keywords={tags?.join(', ')}
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(blogPostingSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      {/* Breadcrumb */}
      <section className="pt-8 pb-0">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <nav className="flex items-center gap-2 text-sm text-text/50" aria-label="Breadcrumb">
            <Link to={ROUTES.HOME} className="hover:text-primary transition-colors">
              {t('navigation.home')}
            </Link>
            <span>/</span>
            <Link to={ROUTES.BLOG} className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-primary/70 truncate max-w-[200px] sm:max-w-none">{title}</span>
          </nav>
        </div>
      </section>

      {/* Article header */}
      <section className="pt-8 pb-6">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-primary/60 bg-primary/5 px-3 py-1 rounded-full">
              {category}
            </span>
            <time className="text-sm text-text/50" dateTime={date}>
              {t('blog.publishedOn')} {formatDate(date)}
            </time>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg text-text/70 leading-relaxed">{description}</p>
        </div>
      </section>

      {/* Image */}
      {image && (
        <section className="pb-8">
          <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="rounded-[1.75rem] overflow-hidden aspect-[2/1] bg-primary/5">
              <img src={image} alt={title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      )}

      {/* TOC + Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Table of contents */}
          {toc.length > 0 && (
            <nav className="mb-12 p-6 bg-white rounded-[1.75rem] border border-gray-200 shadow-sm">
              <h2 className="text-lg font-bold text-primary mb-4">{t('blog.tableOfContents')}</h2>
              <ol className="space-y-2">
                {toc.map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="flex items-center gap-2 text-sm text-text/70 hover:text-primary transition-colors"
                    >
                      <span className="text-primary/40 font-medium">{i + 1}.</span>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* MDX Content */}
          <article ref={contentRef} className="prose-custom">
            <Component components={mdxComponents} />
          </article>
        </div>
      </section>

      {/* FAQ */}
      {faq?.length > 0 && (
        <section className="py-16 bg-white/60">
          <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              {t('blog.faqTitle')}
            </h2>
            <div className="space-y-3">
              {faq.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="font-medium text-primary pr-4">{item.question}</span>
                    <span
                      className={`shrink-0 text-primary/40 text-xl transition-transform ${
                        openFaq === i ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-text/70 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <CTABlock variant="requestConsultation" size="default" reason="blog" />
        </div>
      </section>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white/60">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              {t('blog.relatedArticles')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  to={getBlogPath(rp.slug)}
                  className="group bg-white rounded-[1.75rem] border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-primary/5">
                    {rp.image ? (
                      <img
                        src={rp.image}
                        alt={rp.title}
                        loading="lazy"
                        decoding="async"
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
                    <time className="text-xs text-text/50" dateTime={rp.date}>
                      {formatDate(rp.date)}
                    </time>
                    <h3 className="text-lg font-bold text-primary mt-2 mb-2 group-hover:text-primary/80 transition-colors">
                      {rp.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      {t('blog.readArticle')}
                      <NavArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to blog */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <Link
            to={ROUTES.BLOG}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/70 transition-colors"
          >
            <NavArrowLeft className="w-4 h-4" />
            {t('blog.backToBlog')}
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
