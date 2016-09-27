/* eslint global-require: 0 */

module.exports = function routerMap(router) {
  router.map({
    '/': {
      name: 'index',
      component(resolve) {
        require(['./views/index.vue'], resolve);
      },
      title: 'hello world',
    },
  });
};
