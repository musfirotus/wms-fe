import Vue from "vue";
import Vuex from "vuex";
import PersistedState from "vuex-persistedstate";

import modules from "./modules/index"

Vue.use(Vuex);

export default new Vuex.Store({
    modules,
    plugins: [PersistedState()],
});