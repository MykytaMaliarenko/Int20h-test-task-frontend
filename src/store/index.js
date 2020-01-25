import Vue from "vue";
import Vuex from "vuex";

import modules from "./all.modules.name";

import game from "./modules/game"

Vue.use(Vuex);

let store = new Vuex.Store({});
store.registerModule(modules.game, game);

export default store;