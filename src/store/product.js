import Api from './api';
// import router from '../router/index'

export default {
    namespaced: true,
    state: () => ({
        products: []
    }),
    mutations: {
        getProductsList(state, payload) {
            state.products = payload.data;
        },
    },
    actions: {
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
    }
}