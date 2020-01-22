import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/input',
    name: 'input',
    component: () => import(/* webpackChunkName: "input" */"../views/Input")
  },
  {
    path: '/result',
    name: 'result',
    component: () => import(/* webpackChunkName: "result" */"../views/Result")
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
