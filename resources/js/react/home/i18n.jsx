import i18n from 'i18next';
//import { initReactI18n } from 'react-i18next/hooks';
import { reactI18nextModule } from "react-i18next";
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
// load translation using xhr -> see /public/locales
// learn more: https://github.com/i18next/i18next-xhr-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    //.use(initReactI18n)
    .use(reactI18nextModule)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: 'en',
        debug: false,
        fallbackNS: true,
        ns: 'home',
        defaultNS: 'home',
        backend: {
            loadPath: '/lang/{{lng}}/{{ns}}.json',
        },
        keySeparator: '::',
        nsSeparator: '$$',
        initImmediate: false,
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    }
});

export default i18n;