import Api from './api';
import {headerauth,headerform} from '@/helpers/header.js'
// import headerform from '@/helpers/header.js'

export default {
    all(){
        return Api.get('product?limit=10000&page=1', headerauth)
    },
    new(payload){
        return Api.post('product', payload, headerform)
    },
    del(id){
        return Api.delete('product/' + id, headerauth)
    },
    get(id){
        return Api.get('product/' + id, headerauth)
    },
    update(payload){
        return Api.put('product/' + payload.id, payload.data, headerauth)
    }
}