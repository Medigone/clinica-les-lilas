import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NavArrowRight, NavArrowLeft } from 'iconoir-react';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import CTABlock from '../components/CTABlock';
import WhatsAppButton from '../components/WhatsAppButton';
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
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith('http');
    const className = 'text-primary underline underline-offset-2 hover:text-primary/80 font-medium';
    if (!isExternal && href?.startsWith('/')) {
      return (
        <Link to={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={className}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    );
  },
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

  const { Component, title, description, date, image, faq, category, tags, disclaimer, metaTitle, relatedSlugs } = post;
  const relatedPosts = relatedSlugs?.length
    ? allPosts.filter((p) => relatedSlugs.includes(p.slug)).slice(0, 2)
    : allPosts.filter((p) => p.slug !== canonicalSlug && p.category === category).slice(0, 2);

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

  const alicanteSchemas =
    canonicalSlug === 'hipertermia-oncologica-alicante'
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'MedicalClinic',
            name: 'Clínica Les Lilas',
            url: SITE_URL,
            telephone: '+34614067537',
            email: 'info@clinicaleslilas.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Avinguda de la Diagonal, 4',
              addressLocality: "Sant Joan d'Alacant",
              postalCode: '03550',
              addressRegion: 'Alicante',
              addressCountry: 'ES',
            },
            geo: { '@type': 'GeoCoordinates', latitude: 38.4012, longitude: -0.4321 },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '19:00',
            },
            medicalSpecialty: 'Oncology',
            availableService: {
              '@type': 'MedicalTherapy',
              name: 'Hipertermia oncológica electromodulada',
              description:
                'Tratamiento complementario al tratamiento oncológico convencional que aplica calor localizado para potenciar la eficacia de la quimioterapia y la radioterapia.',
            },
            areaServed: ['Alicante', 'Elche', 'Torrevieja', 'Benidorm', 'Costa Blanca', 'Murcia'],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Es Clínica Les Lilas el único centro de hipertermia en Alicante?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí. Clínica Les Lilas es el único centro especializado en hipertermia oncológica electromodulada en la provincia de Alicante y en toda la Costa Blanca.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Necesito una derivación de mi oncólogo para acceder al tratamiento?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Los pacientes pueden contactar directamente con la clínica. En la primera consulta se valora la indicación y se coordina con el oncólogo de referencia del paciente.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuánto cuesta la hipertermia oncológica en Alicante?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La sesión individual tiene un precio de 200 €. Existen packs de 3 y 6 sesiones. El precio incluye la sesión completa de 60-90 minutos con monitorización médica.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Puedo hacer la primera consulta por videollamada si vengo de fuera de Alicante?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí. La primera valoración puede realizarse online para evaluar la indicación antes de planificar los desplazamientos.',
                },
              },
              {
                '@type': 'Question',
                name: '¿La hipertermia es compatible con la quimioterapia actual?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'En la mayoría de los casos, sí. La coordinación con el oncólogo del paciente es parte del protocolo de la clínica. La primera consulta permite verificar la compatibilidad.',
                },
              },
            ],
          },
        ]
      : null;

  return (
    <>
      <PageHead
        title={metaTitle || `${title} | Clínica Les Lilas`}
        description={description}
        path={getBlogPath(canonicalSlug)}
        keywords={tags?.join(', ')}
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(blogPostingSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {alicanteSchemas
          ? alicanteSchemas.map((schema, i) => (
              <script key={i} type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            ))
          : faqSchema && (
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
        <section id="blog-faq" className="py-16 bg-white/60 scroll-mt-24">
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
          {(canonicalSlug === 'hipertermia-oncologica' ||
            canonicalSlug === 'sueroterapia-micronutrientes' ||
            canonicalSlug === 'hipertermia-oncologica-alicante') ? (
            (() => {
              const ctaConfigs = {
                'hipertermia-oncologica': {
                  reason: 'hipertermia',
                  es: {
                    intro: '¿Tienes preguntas sobre la hipertermia oncológica o quieres saber si es adecuada para tu situación?',
                    whatsapp: 'Escríbenos por WhatsApp',
                    contact: 'Solicitar consulta inicial',
                    waText: 'Hola%2C%20me%20gustar%C3%ADa%20informarme%20sobre%20la%20hipertermia%20oncol%C3%B3gica%20electromodulada',
                  },
                  fr: {
                    intro: "Des questions sur l'hyperthermie oncologique ou souhaitez-vous savoir si elle convient à votre situation ?",
                    whatsapp: 'Écrivez-nous sur WhatsApp',
                    contact: 'Demander une consultation initiale',
                    waText: "Bonjour%2C%20je%20souhaiterais%20m%27informer%20sur%20l%27hyperthermie%20oncologique%20%C3%A9lectromodul%C3%A9e",
                  },
                  en: {
                    intro: 'Do you have questions about oncological hyperthermia or would you like to know if it is suitable for your situation?',
                    whatsapp: 'Contact us on WhatsApp',
                    contact: 'Request initial consultation',
                    waText: 'Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20electromodulated%20oncological%20hyperthermia',
                  },
                },
                'hipertermia-oncologica-alicante': {
                  reason: 'hipertermia-alicante',
                  es: {
                    intro: 'Clínica Les Lilas — San Juan de Alicante. Único centro especializado en hipertermia oncológica electromodulada en la Costa Blanca.',
                    whatsapp: 'Escríbenos por WhatsApp',
                    contact: 'Solicitar consulta inicial',
                    waText: 'Hola%2C%20me%20gustar%C3%ADa%20informarme%20sobre%20la%20hipertermia%20oncol%C3%B3gica%20en%20Alicante',
                  },
                  fr: {
                    intro: "Clínica Les Lilas — San Juan de Alicante. Seul centre spécialisé en hyperthermie oncologique électromodulée sur la Costa Blanca.",
                    whatsapp: 'Écrivez-nous sur WhatsApp',
                    contact: 'Demander une consultation initiale',
                    waText: "Bonjour%2C%20je%20souhaiterais%20m'informer%20sur%20l'hyperthermie%20oncologique%20%C3%A0%20Alicante",
                  },
                  en: {
                    intro: 'Clínica Les Lilas — San Juan de Alicante. The only centre specialised in electromodulated oncological hyperthermia on the Costa Blanca.',
                    whatsapp: 'Contact us on WhatsApp',
                    contact: 'Request initial consultation',
                    waText: 'Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20oncological%20hyperthermia%20in%20Alicante',
                  },
                },
                'sueroterapia-micronutrientes': {
                  reason: 'sueroterapia',
                  es: {
                    intro: '¿Quieres saber qué protocolo de sueroterapia es el más adecuado para ti?',
                    whatsapp: 'Escríbenos por WhatsApp',
                    contact: 'Solicitar valoración personalizada',
                    waText: 'Hola%2C%20quiero%20informarme%20sobre%20la%20sueroterapia%20intravenosa%20en%20Alicante',
                  },
                  fr: {
                    intro: 'Vous voulez savoir quel protocole de suerothérapie vous convient le mieux ?',
                    whatsapp: 'Écrivez-nous sur WhatsApp',
                    contact: 'Demander une évaluation personnalisée',
                    waText: "Bonjour%2C%20je%20souhaite%20m'informer%20sur%20la%20sueroth%C3%A9rapie%20intraveineuse%20%C3%A0%20Alicante",
                  },
                  en: {
                    intro: 'Would you like to know which sueroterapia protocol is most suitable for you?',
                    whatsapp: 'Contact us on WhatsApp',
                    contact: 'Request personalised assessment',
                    waText: 'Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20intravenous%20sueroterapia%20in%20Alicante',
                  },
                },
              };
              const config = ctaConfigs[canonicalSlug];
              const cta = config[language] || config.es;
              return (
                <div>
                  <p className="text-base md:text-lg leading-relaxed text-text/80 mb-6">{cta.intro}</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/34614067537?text=${cta.waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium text-sm text-white bg-[#25D366] hover:bg-[#1ebe5a] hover:shadow-lg transition-all"
                    >
                      {cta.whatsapp}
                    </a>
                    <Link
                      to={`${ROUTES.CONTACT}?reason=${config.reason}&language=${language}`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium text-sm text-white bg-primary hover:bg-primary/90 hover:shadow-lg transition-all"
                    >
                      {cta.contact}
                    </Link>
                  </div>
                </div>
              );
            })()
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <WhatsAppButton shortLabel className="!px-4 !py-2 !rounded-lg !text-sm" />
              <Link
                to={`${ROUTES.CONTACT}?reason=blog&language=${language}`}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium text-sm text-white bg-primary hover:bg-primary/90 hover:shadow-lg transition-all"
              >
                {t('cta.requestConsultation')}
              </Link>
            </div>
          )}
        </div>
      </section>

      {disclaimer && (
        <section className="pb-8">
          <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
            <p className="text-sm text-text/60 leading-relaxed italic">{disclaimer}</p>
          </div>
        </section>
      )}

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
