import Api from './api';
import router from '../router/index'
// import Vue from 'vue'

export default {
    namespaced: true,
    state: () => ({
        products: [],
        detail: []
    }),
    mutations: {
        getProductsList(state, payload) {
            state.products = payload.data;
        },
        setDetail(state, payload) {
            state.detail = payload
        }
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
                    .then((res) => {
                        alert(res.data.message)
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
          try {
            await Api.delete("/product/" + id)
              .then((res) => {
                alert(res.data.message)
                router.go({name: "Products"})
              })
              .catch((err) => {
                alert(err.response.data.message)
                router.go({name: "Products"})
              });
          } catch (err) {
            alert(err.response.data.message)
            router.go({name: "Products"})
          }
            
        },
        async getById({ commit }, payload) {
            try {
                await Api.get("product/" + payload, {
                    headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                })
                .then((res) => {
                    const { data : { data } } = res
                    commit("setDetail", data)
                })
                .catch((err) => {
                  alert(err.response.data.message)
                })
            } catch(error) {
                alert("There's no such product")
                router.push({ name: "Products", query: { page: 1 }})
            }
        },
        async updateProducts(_, payload) {
            Api.put('product/' + payload.id, payload.data, {
              headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
              }
            })
              .then(() => {
                alert("Success Update")
                router.push({ name: "Products", query: { page: 1 } })
              })
              .catch((err) => {
                alert(err.response.data.message)
              })
          },
    }
}