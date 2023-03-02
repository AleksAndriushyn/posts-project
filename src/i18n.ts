import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/en.json';
import ua from './locales/ua/ua.json';

const item = window.localStorage.getItem('language');
const lang = JSON.parse(item ?? 'null') ?? 'en';

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: en,
		},
		ua: {
			translation: ua,
		},
	},
	lng: lang,
	fallbackLng: 'en',

	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
