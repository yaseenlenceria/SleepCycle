import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';
import frTranslations from './locales/fr.json';
import deTranslations from './locales/de.json';
import zhTranslations from './locales/zh.json';
import jaTranslations from './locales/ja.json';
import ptTranslations from './locales/pt.json';
import itTranslations from './locales/it.json';
import ruTranslations from './locales/ru.json';
import arTranslations from './locales/ar.json';

const resources = {
  en: {
    translation: enTranslations
  },
  es: {
    translation: esTranslations
  },
  fr: {
    translation: frTranslations
  },
  de: {
    translation: deTranslations
  },
  zh: {
    translation: zhTranslations
  },
  ja: {
    translation: jaTranslations
  },
  pt: {
    translation: ptTranslations
  },
  it: {
    translation: itTranslations
  },
  ru: {
    translation: ruTranslations
  },
  ar: {
    translation: arTranslations
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'sleepcycle-language',
      caches: ['localStorage'],
    },
    
    react: {
      useSuspense: false
    }
  });

export default i18n;