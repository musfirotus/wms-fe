import Vue from "vue";
import Vuex from "vuex";
import PersistedState from "vuex-persistedstate";

import Auth from "./auth";
import Product from "./product";
import User from "./user";
import In from "./in";
import Out from "./out";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Auth,
        Product,
        User,
        In,
        Out,
    },
    plugins: [PersistedState()],
});