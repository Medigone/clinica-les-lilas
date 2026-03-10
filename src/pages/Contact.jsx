import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Clock, Mail, MapPin, Phone } from 'iconoir-react';
import { useLanguageStore } from '../store/languageStore';
import PageHead from '../components/PageHead';
import HeroBlock from '../components/HeroBlock';
import { ROUTES, CONTACT } from '../routes';

const VALID_REASONS = ['consultation', 'information', 'hyperthermie', 'sueroterapia', 'medecine-regenerative', 'soutien-immunitaire', 'other'];
const VALID_LANGUAGES = ['fr', 'en', 'es'];

const Contact = () => {
  const { t } = useLanguageStore();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    language: '',
    message: '',
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const reasons = t('contactPage.reasons', { returnObjects: true });
  const languages = t('contactPage.languages', { returnObjects: true });

  useEffect(() => {
    const reasonParam = searchParams.get('reason');
    const languageParam = searchParams.get('language');
    setFormData((prev) => ({
      ...prev,
      ...(reasonParam && VALID_REASONS.includes(reasonParam) && { reason: reasonParam }),
      ...(languageParam && VALID_LANGUAGES.includes(languageParam) && { language: languageParam }),
    }));
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Nouveau message - ${formData.reason || 'Contact'}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          reason: formData.reason,
          language: formData.language,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (res.ok && (data.success === true || data.success === 'true')) {
        navigate(ROUTES.CONTACT_MERCI);
      } else {
        throw new Error(data.message || 'Erreur');
      }
    } catch (err) {
      setSubmitError(t('contactPage.form.submitError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <>
      <PageHead
        title={t('meta.contact.title')}
        description={t('meta.contact.description')}
        path={ROUTES.CONTACT}
        keywords={t('meta.contact.keywords')}
      />

      <HeroBlock
        imageSrc="/assets/about-bg.png"
        h1={t('contactPage.hero.h1')}
        subtitle={t('contactPage.hero.subtitle')}
        text={t('contactPage.hero.text')}
        showCta={false}
        compact
      />

      <section className="pt-6 md:pt-8 pb-24 md:pb-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6 md:p-8">
                <h2 className="text-xl font-bold text-primary mb-6">
                  {t('contactPage.form.title')}
                </h2>
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    {t('contactPage.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contactPage.form.namePlaceholder')}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    {t('contactPage.form.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t('contactPage.form.phonePlaceholder')}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    {t('contactPage.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contactPage.form.emailPlaceholder')}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    {t('contactPage.form.reason')}
                  </label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none select-arrow"
                  >
                    <option value="">{t('contactPage.form.reasonPlaceholder')}</option>
                    {Array.isArray(reasons) && reasons.map((r) => (
                      <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    {t('contactPage.form.language')}
                  </label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none select-arrow"
                  >
                    <option value="">{t('contactPage.form.languagePlaceholder')}</option>
                    {Array.isArray(languages) && languages.map((l) => (
                      <option key={l.value} value={l.value}>{l.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    {t('contactPage.form.message')}
                  </label>
                  <textarea
                    name="message"
                    placeholder={t('contactPage.form.messagePlaceholder')}
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                  />
                </div>
                {submitError && (
                  <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg">
                    {submitError}
                  </p>
                )}
                <p className="text-sm text-text/70">
                  {t('contactPage.form.privacy')}
                </p>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacy"
                    id="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1 rounded border-primary/20"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-text/70">
                    {t('contactPage.form.rgpd')}
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-5 py-2.5 rounded-xl font-medium text-white bg-primary hover:bg-primary/90 hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('contactPage.form.submitLoading') : t('contactPage.form.submit')}
                </button>
              </form>
              </div>
            </div>

            <div>
              <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6 md:p-8">
                <h2 className="text-xl font-bold text-primary mb-6">
                  {t('contact.title')}
                </h2>
                <div className="space-y-4">
                  <a
                    href={`tel:${CONTACT.PHONE.replace(/\s/g, '')}`}
                    className="block py-3 px-4 rounded-xl bg-white/80 hover:bg-white transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="w-3 h-3 text-primary" strokeWidth={2} />
                      </div>
                      <p className="font-medium text-primary text-sm">{CONTACT.PHONE}</p>
                    </div>
                    <p className="text-xs text-text/60 mt-1 ml-8">{t('cta.call')}</p>
                  </a>
                  <a
                    href={`mailto:${CONTACT.EMAIL}`}
                    className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white/80 hover:bg-white transition-colors"
                  >
                    <div className="w-5 h-5 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-3 h-3 text-primary" strokeWidth={2} />
                    </div>
                    <p className="font-medium text-primary text-sm truncate min-w-0">{CONTACT.EMAIL}</p>
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.ADDRESS.replace(/\n/g, ', '))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 px-4 rounded-xl bg-white/80 hover:bg-white transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 shrink-0 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <MapPin className="w-3 h-3 text-primary" strokeWidth={2} />
                      </div>
                      <h3 className="font-medium text-primary text-sm">{t('contact.address.title')}</h3>
                    </div>
                    <address className="text-text/80 text-sm not-italic whitespace-pre-line leading-tight mt-1 ml-8">
                      {CONTACT.ADDRESS}
                    </address>
                  </a>
                  <div className="py-3 px-4 rounded-xl bg-white/80">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="w-3 h-3 text-primary" strokeWidth={2} />
                      </div>
                      <h3 className="font-medium text-primary text-sm">{t('contact.hours.title')}</h3>
                    </div>
                    <p className="text-text/80 text-sm leading-tight mt-1 ml-8">{t('contact.hours.text')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
