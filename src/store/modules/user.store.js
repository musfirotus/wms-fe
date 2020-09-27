// import Api from '../service/api';
import UserApi from '../service/user.api'
import router from '@/router/index'

export default {
    namespaced: true,
    state: () => ({
        users: [],
        detail: []
    }),
    mutations: {
        getUsersList(state, payload) {
            state.users = payload.data;
        },
        setDetail(state, payload) {
            state.detail = payload
        }
    },
    actions: {
        async getUser({ commit }) {
            await UserApi.all()
            .then((response) => {
                commit("getUsersList", response.data)
            })
            .catch((err) => {
                alert(err.response.message)
                router.go({name: "Users"})
            });
        },
        async addUser(_, payload){
            try {
                await UserApi.new(payload)
                .then(res => {
                    alert(res.data.message)
                    router.go({name: "Users"})
                })
                .catch(err => {
                    alert(err.response.message)
                    router.go({name: "Users"})
                })
            } catch (err) {
                alert(err.response.data.message)
                router.go({name: "Users"})
            }
        },
        async deleteUser(_, id){
            try {
                await UserApi.del(id)
                .then((res) => {
                    alert(res.data.message)
                    router.go({name: "Users"})
                })
                .catch((err) => {
                    alert(err.response.data.message)
                    router.go({name: "Users"})
                });
            } catch (err) {
                alert(err.response.message)
                router.go({name: "Users"})
            }
        },
        async getById({ commit }, payload) {
            try {
                await UserApi.get(payload)
                .then((res) => {
                    const { data : { data } } = res
                    commit("setDetail", data)
                })
                .catch((err) => {
                    alert(err.response.data.message)
                    router.push({ name: "Users", query: { page: 1 }})
                })
            } catch(error) {
                alert("There's no such user")
                router.push({ name: "Users", query: { page: 1 }})
            }
        },
    }
}