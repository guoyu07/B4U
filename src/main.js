import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import routerMap from './router';

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  hashbang: false,
  history: true,
});

routerMap(router);

const app = Vue.extend({});

router.start(app, 'html');
