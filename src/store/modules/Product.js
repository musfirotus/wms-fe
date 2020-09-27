import AllApi from "@/service/Product";
import router from "@/router/index";

export default {
    namespaced: true,
    state: () => ({
        products: [],
        detail: [],
    }),
    mutations: {
        getProductsList(state, payload) {
            state.products = payload.data;
        },
        setDetail(state, payload) {
            state.detail = payload;
        },
    },
    actions: {
        async getProducts({ commit }) {
            try {
                await AllApi.all()
                    .then((response) => {
                        commit("getProductsList", response.data);
                    })
                    .catch((err) => {
                        console.log(err.response.data.message);
                    });
            } catch (err) {
                console.log(err);
            }
        },
        async newProducts(_, payload) {
            try {
                await AllApi.new(payload)
                    .then((res) => {
                        alert(res.data.message);
                        router.go({ name: "Products" });
                    })
                    .catch((err) => {
                        alert(err.response.data.message);
                    });
            } catch (err) {
                alert(err.response.data.message);
                router.go({ name: "Products" });
            }
        },
        async delProduct(_, id) {
            try {
                await AllApi.del(id)
                    .then((res) => {
                        alert(res.data.message);
                        router.go({ name: "Products" });
                    })
                    .catch((err) => {
                        alert(err.response.data.message);
                        router.go({ name: "Products" });
                    });
            } catch (err) {
                alert(err.response.data.message);
                router.go({ name: "Products" });
            }
        },
        async getById({ commit }, payload) {
            try {
                await AllApi.get(payload)
                    .then((res) => {
                        const {
                            data: { data },
                        } = res;
                        commit("setDetail", data);
                    })
                    .catch((err) => {
                        alert(err.response.data.message);
                    });
            } catch (error) {
                alert("There's no such product");
                router.push({ name: "Products", query: { page: 1 } });
            }
        },
        async updateProducts(_, payload) {
            try {
                await AllApi.update(payload)
                    .then(() => {
                        alert("Success Update");
                        router.push({ name: "Products", query: { page: 1 } });
                    })
                    .catch((err) => {
                        alert(err.response.data.message);
                    });
            } catch (err) {
                alert("There's no such product");
                router.go({ name: "Products"});
            }
        },
    },
};
