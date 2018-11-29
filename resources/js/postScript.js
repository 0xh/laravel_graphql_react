// import { useT } from 'react-i18next/hooks';
// const [t, i18n] = useT();
// window.t = t;
// window.useT = useT;

window.axios.defaults.headers.common['LOCALE'] = i18n.language;