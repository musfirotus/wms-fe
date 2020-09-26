import Api from './api';
import router from '../router/index'

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
            await Api.get("/out?limit=10000&page=1", {
                headers: {
                  Authorization: `bearer ${localStorage.getItem("token")}`
                },
              }).then((response) => {
                commit("getOutcomesList", response.data)
              })
              .catch((error) => console.log({
                error
            }));
        },
        async addOut(_, payload) {
            try {
                await Api.post("/out", JSON.stringify({ data: payload }), {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
                .then((res) => {
                    alert(res.data.message)
                    router.go({name: "Outs"})
                }).catch((err) => {
                    alert(err.response.data.message)
                });
            } catch (err) {
                alert(err.response.data.message)
            }
        },
        async delOutcome(_, payload){
            try {
                await Api.delete("/out/" + payload, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
                .then(() => {
                    router.go({name: "Outs"})
                }).catch((err) => {
                    alert(err.response.data.message)
                    router.push({name: "Outs"})
                });
            } catch (err) {
                alert(err.response.data.message)
                router.push({name: "Outs"})
            }
        }
    }
}