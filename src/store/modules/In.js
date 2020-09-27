import InApi from '@/service/In'
import router from '@/router/index'

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
            InApi.all().then((response) => {
                commit("getIncomesList", response.data)
              })
              .catch((error) => console.log({
                error
            }));
        },
        async addIn(_, payload) {
            try {
                await InApi.new(payload)
                .then((res) => {
                    alert(res.data.message)
                    router.go({name: "Ins"})
                })
                .catch((err) => {
                    alert(err.response.data.message)
                    router.go({name: "Ins"})
                });
            } catch (err) {
                console.log(err);
                router.go({name: "Ins"})
            }
        },
        async delIncome(_, id){
            try {
                await InApi.del(id)
                    .then((res) => {
                        alert(res.data.message)
                        router.go({name: "Ins"})
                    })
                    .catch(err => {
                        alert(err.response.data.message)
                        router.push({name: "Ins"})
                    })
            } catch (err) {
                alert(err.response.data.message)
                router.push({name: "Ins"})
            }
        }
    }
}