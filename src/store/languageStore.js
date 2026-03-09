import { create } from 'zustand';
import { translations } from '../translations';

export const useLanguageStore = create((set, get) => ({
  language: typeof window !== 'undefined' ? localStorage.getItem('language') || 'es' : 'es',

  setLanguage: (lang) => {
    const normalizedLang = lang.toLowerCase().slice(0, 2);
    const validLang = ['fr', 'en', 'es'].includes(normalizedLang) ? normalizedLang : 'es';
    set({ language: validLang });
    localStorage.setItem('language', validLang);
  },

  t: (key, options = {}) => {
    const { language } = get();
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        value = translations.es;
        for (const k2 of keys) {
          if (value && typeof value === 'object' && k2 in value) {
            value = value[k2];
          } else {
            return key;
          }
        }
        break;
      }
    }

    return value ?? key;
  },
}));
