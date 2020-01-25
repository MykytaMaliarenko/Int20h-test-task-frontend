import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import store from '../store'
import {game} from "../store/all.modules.name";

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

router.beforeEach((to, from, next) => {
  if (store.getters[`${game}/isPlaying`] && (to.name === 'home' || to.name === 'end')) {
    next({
      name: 'input',
    })
  } else if (store.getters[`${game}/roundResults`].length === 0 && to.name === 'end') {
    next({
      name: 'input',
    })
  } else if (!store.getters[`${game}/isPlaying`] && to.name === 'guessPreview') {
    next({
      name: 'home',
    })
  } else {
    next()
  }
});

export default router
