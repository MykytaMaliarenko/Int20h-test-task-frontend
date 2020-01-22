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
    path: '/guessPreview',
    name: 'guessPreview',
    component: () => import(/* webpackChunkName: "result" */"../views/GuessPreview")
  },
  {
    path: '/result',
    name: 'result',
    component: () => import(/* webpackChunkName: "result" */"../views/Result")
  },
  {
    path: '/end',
    name: 'end',
    component: () => import(/* webpackChunkName: "result" */"../views/End")
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
