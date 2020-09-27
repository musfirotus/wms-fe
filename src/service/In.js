import Api from './api';
import {headerauth} from '@/helpers/header.js'

export default {
    all(){
        return Api.get('/in?limit=10000&page=1', headerauth)
    },
    new(payload){
        return Api.post('in', JSON.stringify({ data: payload }), headerauth)
    },
    del(id){
        return Api.delete('in/' + id, headerauth)
    }
}