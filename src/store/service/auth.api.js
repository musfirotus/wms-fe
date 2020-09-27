import Api from './api';

export default {
    login(payload){
        return Api.post('auth/login', payload)
    },
    reg(payload){
        return Api.post('auth/signup', payload)
    }
}