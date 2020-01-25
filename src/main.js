import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faMicrophone, faQuestion, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store'

import ApiService from "./api";

library.add(faSearch, faQuestion, faMicrophone, faMicrophoneSlash);
Vue.component('font-awesome-icon', FontAwesomeIcon);

ApiService.init("http://localhost:5000");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
