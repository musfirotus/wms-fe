import Api from './api';
import {headerauth} from '@/helpers/header.js'

export default {
    all(){
        return Api.get('user?limit=10000&page=1', headerauth)
    },
    new(payload){
        return Api.post('user', JSON.stringify({ data: payload }), headerauth)
    },
    del(id){
        return Api.delete('user/' + id, headerauth)
    },
    get(id){
        return Api.get('user/' + id, headerauth)
    }
}