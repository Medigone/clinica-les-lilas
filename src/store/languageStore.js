import { create } from 'zustand';

const loaders = {
  fr: () => import('../locales-data/fr.js'),
  en: () => import('../locales-data/en.js'),
  es: () => import('../locales-data/es.js'),
};

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'es';
  const stored = localStorage.getItem('language');
  return ['fr', 'en', 'es'].includes(stored) ? stored : 'es';
}

function walkTranslation(tree, keys) {
  let value = tree;
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return undefined;
    }
  }
  return value;
}

export const useLanguageStore = create((set, get) => ({
  language: getInitialLanguage(),
  bundles: {},
  isReady: false,

  /** Chargement initial depuis main.jsx (avant le premier render) */
  hydrateFromBundle: (lang, data) => {
    set({
      bundles: { [lang]: data },
      language: lang,
      isReady: true,
    });
  },

  setLanguage: async (lang) => {
    const normalizedLang = lang.toLowerCase().slice(0, 2);
    const validLang = ['fr', 'en', 'es'].includes(normalizedLang) ? normalizedLang : 'es';
    const { bundles } = get();
    if (!bundles[validLang]) {
      const { default: data } = await loaders[validLang]();
      set((s) => ({
        bundles: { ...s.bundles, [validLang]: data },
        language: validLang,
      }));
    } else {
      set({ language: validLang });
    }
    localStorage.setItem('language', validLang);
  },

  t: (key, options = {}) => {
    const { language, bundles } = get();
    const keys = key.split('.');
    let tree = bundles[language];
    let value = tree ? walkTranslation(tree, keys) : undefined;

    if (value === undefined && bundles.es) {
      value = walkTranslation(bundles.es, keys);
    }

    if (value === undefined) {
      return key;
    }

    return value ?? key;
  },
}));

export function loadInitialTranslationBundle() {
  const lang = getInitialLanguage();
  return loaders[lang]().then((m) => {
    useLanguageStore.getState().hydrateFromBundle(lang, m.default);
  });
}
