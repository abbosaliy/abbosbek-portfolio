import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import de from './locales/de.json';

const getSavedLanguage = () => {
  const saved = localStorage.getItem('language');
  return saved && (saved === 'de' || saved === 'en') ? saved : 'de';
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  lng: getSavedLanguage(),
  fallbackLng: 'de',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
