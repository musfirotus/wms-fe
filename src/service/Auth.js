import Api from './api';

export default {
    login(payload){
        return Api.post('auth/login', { data: payload})
    },
    reg(payload){
        return Api.post('auth/signup', JSON.stringify({ data: payload }))
    }
}