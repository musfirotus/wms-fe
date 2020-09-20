import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from "vuex-persistedstate";

import Api from "./api";
import Auth from "./auth"

// import router from "../router/index";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    products: [],
    incomes: [],
    outcomes: []
  },
  mutations: {
    getUsersList(state, payload) {
      state.users = payload.data;
    },
    getProductsList(state, payload) {
      state.products = payload.data;
    },
    getIncomesList(state, payload) {
      state.incomes = payload.data;
    },
    getOutcomesList(state, payload) {
      state.outcomes = payload.data;
    },
  },
  actions: {
    async getUser({ commit }) {
      Api.get("/user?limit=10000&page=1", {
          headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`
          },
        }).then((response) => {
          commit("getUsersList", response.data)
        })
        .catch((error) => console.log({
          error
        }));
    },
    async getProducts({ commit }) {
      Api.get("/product?limit=10000&page=1", {
          headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`
          },
        }).then((response) => {
          commit("getProductsList", response.data)
        })
        .catch((error) => console.log({
          error
      }));
    },
    async getIncomes({ commit }) {
      Api.get("/in?limit=10000&page=1", {
          headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`
          },
        }).then((response) => {
          commit("getIncomesList", response.data)
        })
        .catch((error) => console.log({
          error
      }));
    },
    async getOutcomes({ commit }) {
      Api.get("/out?limit=10000&page=1", {
          headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`
          },
        }).then((response) => {
          commit("getOutcomesList", response.data)
        })
        .catch((error) => console.log({
          error
      }));
    }
  },
  getters: {},
  modules: {
    Auth
  },
  plugins: [PersistedState()]
})