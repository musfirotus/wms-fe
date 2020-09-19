import Vue from 'vue'
import Vuex from 'vuex'
import Api from "./api";
import PersistedState from "vuex-persistedstate";

import router from "../router/index";

Vue.use(Vuex)

const Auth = {
  namespaced: true,
  state: () => ({
    token: "",
    user: {
      id: "",
      fullName: "",
      phone: "",
      role: "",
      username: "",
    },
    isError: false,
    errorMessage: "",
  }),
  mutations: {
    saveLogin(state, payload) {
      state.token = payload.token;
      state.user = {
        id: payload.id,
        fullName: payload.full_name,
        phone: payload.phone_number,
        role: payload.role,
        username: payload.username,
      };
    },
  },
  actions: {
    async reqLogin({ commit }, payload) {
      Api.post("/auth/login", { data: payload })
        .then((res) => {
          const { data: { data } } = res;
          commit("saveLogin", data);
          console.log({
            "ini token": data.token
          })
          localStorage.setItem("token", data.token);
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: data.id,
              fullName: data.full_name,
              phone: data.phone_number,
              role: data.role,
              username: data.username,
            })
          );
          router.push("/main");
        })
        .catch((error) => {
          console.log({
            error
          });
        });
      console.log({
        commit
      });
    },
  },
};

export default new Vuex.Store({
  state: {
    users: [],
    products: [],
    incomes: [],
    outcomes: [],
    postLoading: false,
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
    setBoolean(state, payload) {
      console.log({
        payload
      });
      state[payload.key] = payload.value;
    },
  },
  actions: {
    async registerAction({ commit }, payload) {
      console.log({ "dahaha": payload })
      commit("setBoolean", {
        key: "postLoading",
        value: true
      });
      Api.post("/auth/signup", JSON.stringify({
          "data": {
            "full_name": payload.full_name,
            "username": payload.username,
            "email": payload.email,
            "password": payload.password,
            "phone_number": payload.phone_number
          }
        }))
        .then((res) => {
          console.log({ res });
        })
        .catch((errr) => {
          console.log({
            errr: errr.message
          });
        });
      // console.log({ registerAction: data });
      commit("setBoolean", {
        key: "postLoading",
        value: false
      });
    },
    async getUser({ commit }) {
      Api.get("/user", {
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
      Api.get("/product", {
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
      Api.get("/in", {
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
      Api.get("/out", {
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