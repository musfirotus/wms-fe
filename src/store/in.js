import Api from './api';
import router from '../router/index'

export default {
    namespaced: true,
    state: () => ({
        incomes: [],
    }),
    mutations: {
        getIncomesList(state, payload) {
            state.incomes = payload.data;
        },
    },
    actions: {
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
        async addIn(_, payload) {
            try {
                await Api.post("/in", JSON.stringify({ data: payload }), {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
                .then((res) => {
                    alert(res.data.message)
                    router.go({name: "Ins"})
                })
                .catch((err) => {
                    alert(err.response.data.message)
                });
            } catch (err) {
                console.log(err);
            }
        },
    }
}