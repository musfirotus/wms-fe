import Api from './api';

export default {
    namespaced: true,
    state: () => ({
        outcomes: []
    }),
    mutations: {
        getOutcomesList(state, payload) {
            state.outcomes = payload.data;
        },
    },
    actions: {
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
    }
}