import Api from './api';
import router from '../router/index'

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
            Api.get("/user?limit=10000&page=1", {
                headers: {
                    Authorization: `bearer ${localStorage.getItem("token")}`
                },
            }).then((response) => {
                commit("getUsersList", response.data)
            })
            .catch((error) => console.log({
                error
            }));
        },
        async addUser(_, payload){
            try {
                await Api.post("/user", JSON.stringify({ data: payload }), {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
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
                await Api.delete("/user/" + id, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
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
                await Api.get("user/" + payload, {
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
                    router.push({ name: "Users", query: { page: 1 }})
                })
            } catch(error) {
                alert("There's no such user")
                router.push({ name: "Users", query: { page: 1 }})
            }
        },
    }
}