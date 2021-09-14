import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './i18n/en.json';
import jp from './i18n/jp.json';
import tw from './i18n/tw.json'

const resources = {
  en: {
    translation: en,
  },
  jp: {
    translation: jp,
  },
  tw: {
    translation: tw,
  },
};

i18n
.use(initReactI18next)
.init({
  resources,
  lng: 'tw',
  fallbackLng: 'tw',
  interpolation: {
    escapeValue: false,
  }
});

export default i18n;