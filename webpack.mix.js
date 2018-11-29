let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

let RESOURCE_REACT_HOME_PATH = 'resources/js/react/home/';

let PUBLIC_REACT_HOME_PATH = 'public/js/react/home/';

mix.copyDirectory('resources/images', 'public/images');
mix.copyDirectory('resources/js/lang', 'public/lang');

mix.react('resources/js/home.js', 'public/js/home.js')
    .react('resources/js/postScript.js', 'public/js/postScript.js')
    .react(RESOURCE_REACT_HOME_PATH+'index.jsx', PUBLIC_REACT_HOME_PATH)
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/home.scss', 'public/css')
    .copy('resources/sass/vendor/bootstrap-social/bootstrap-social.css', 'public/css');

if (mix.inProduction()) {
    mix.version();
}