import Vue from "vue";
import Vuex from "vuex";
import PersistedState from "vuex-persistedstate";

// import Api from "./api";
import Auth from "./auth";
import Product from "./product";
import User from "./user";
import In from "./in";
import Out from "./out";

// import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        Auth,
        Product,
        User,
        In,
        Out,
    },
    plugins: [PersistedState()],
});
