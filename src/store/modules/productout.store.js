// import Api from '../service/api';
import OutApi from '../service/productout.api'
import router from '@/router/index'

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
            await OutApi.all()
              .then((response) => {
                commit("getOutcomesList", response.data)
              })
              .catch((error) => console.log({
                error
            }));
        },
        async addOut(_, payload) {
            try {
                await OutApi.new(payload)
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
                await OutApi.del(payload)
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