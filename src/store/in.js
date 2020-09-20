import Api from './api';

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
    }
}