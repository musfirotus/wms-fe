import Api from './api';

export default {
    namespaced: true,
    state: () => ({
        users: [],
    }),
    mutations: {
        getUsersList(state, payload) {
            state.users = payload.data;
        },
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
    }
}