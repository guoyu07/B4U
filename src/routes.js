/* eslint global-require: 0 */

module.exports = [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['./views/index.vue'], resolve),
  },
];
