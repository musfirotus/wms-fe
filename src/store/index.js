import Vue from "vue";
import Vuex from "vuex";
import PersistedState from "vuex-persistedstate";

// import modules from './modules';
import Auth from "./modules/auth.store";
import Product from "./modules/productall.store";
import User from "./modules/user.store";
import In from "./modules/productin.store";
import Out from "./modules/productout.store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Auth,
        Product,
        User,
        In,
        Out,
    },
    // modules,
    plugins: [PersistedState()],
});