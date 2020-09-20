import Api from './api';
import router from '../router/index'

export default {
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
      async register({ commit }, payload) {
        Api.post("/auth/signup", JSON.stringify({
            data: payload
          }))
          .then((res) => {
            const { data: { data } } = res
            console.log({ data });
            router.push("/login")
            console.log(commit);
          })
          .catch((errr) => {
            console.log({
              errr: errr.message
            });
          });
      },
      logout() {
        let keysToRemove = ["vuex", "user","token","randid"];
        for (let key of keysToRemove) {
          localStorage.removeItem(key);
        }
        router.push("/login");
      },
    },
};