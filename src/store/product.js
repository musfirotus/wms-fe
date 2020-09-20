import Api from './api';
import router from '../router/index'

export default {
    namespaced: true,
    state: () => ({
        products: [],
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
        async newProducts(_, payload) {
            try {
                await Api.post("/product", payload, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                      "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                  })
                    .then(() => {
                        // alert(res.data.message)
                        router.go({name: "Products"})
                    })
                    .catch((err) => {
                        alert(err.response.data.message)
                    });
            } catch (error) {
                error
            }
        },
        async delProduct(_, id) {
            Api.delete("/product/" + id)
              .then(() => {
                router.go({name: "Products"})
              })
              .catch((errr) => {
                console.log({ errr: errr.message });
              });
        },
    }
}