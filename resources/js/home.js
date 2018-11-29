require('./bootstrap');
import i18n from './react/home/i18n';
window.i18n = i18n;
window.t = i18n.t.bind(i18n);

