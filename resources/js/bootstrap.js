import 'babel-polyfill';
window._ = require('lodash');
window.Popper = require('popper.js').default;

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;

} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo'

window.Pusher = require('pusher-js');

//window.io = require('socket.io-client');

let echoConfig = {
    broadcaster: 'pusher',
    cluster: 'ap1'
    // broadcaster: 'socket.io',
    // host: 'example.local:6001',
};

let hostname = window.location.hostname;
if(hostname === 'example.local') {
    // development
    echoConfig.key = '';
    echoConfig.encrypted = true;
} else {
    // production
    echoConfig.key = '';
    echoConfig.encrypted = true;
}

window.Echo = new Echo(echoConfig);

import React, {Component, useContext} from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';
import {Link, Route} from 'react-router-dom';

window.React = React;
window.Component = Component;
window.ReactDOM = ReactDOM;
window.useContext = useContext;
window.update = update;
window.Link = Link;
window.Route = Route;

import NProgress from "nprogress";
window.NProgress = NProgress;

require('./apolloClient');
