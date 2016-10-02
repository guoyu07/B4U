import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import routes from './routes';
import stores from './stores';

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  routes,
});

const store = new Vuex.Store(stores);

new Vue({
  router,
  store,
  template: '',
}).$mount('#app');
