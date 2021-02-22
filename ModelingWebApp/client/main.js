/************************
 *         RAB
 ************************/

import Vue from 'vue';
import App from './App.vue';
import './main.html';
import router from './routes';

import Quasar from 'quasar';

window.$ = require('jquery');
window.joint = require('jointjs');


Meteor.startup(() => {
    Vue.use(Quasar, {});
    new Vue({
        router,
        el: '#app',
        ...App,
    });
});




