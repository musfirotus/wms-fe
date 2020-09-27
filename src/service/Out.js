import Api from './api';
import {headerauth} from '@/helpers/header.js'

export default {
    all(){
        return Api.get('out?limit=10000&page=1', headerauth)
    },
    new(payload){
        return Api.post('out',  JSON.stringify({ data: payload }), headerauth)
    },
    del(id){
        return Api.delete('out/' + id, headerauth)
    }
}