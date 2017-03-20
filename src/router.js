import Vue from 'vue';
import VueRouter from 'vue-router';

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter);

// 2. Define route components
import subject from './views/subject/index.vue';
import student from './views/student/index.vue';

// 3. Create the router
export default new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: subject },
    { path: '/subject', component: subject },
    { path: '/student', component: student },

    // catch all redirect
    { path: '*', redirect: '/' }
  ]
});