import Vue from 'vue';
import App from './App.vue';
import './main.html';

window.$ = require('jquery');
window.joint = require('jointjs');

Meteor.startup(() => {
    new Vue({
        el: '#app',
        ...App,
    });
});


