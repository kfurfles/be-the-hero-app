import { HttpBase } from '../typings/HttpTypings';
import { Ref, ref } from '@vue/composition-api';



export const tryAwait = async<T>(httpRequest: HttpBase, success = (data: Ref<T>): unknown=> data, failed = (error: Ref<any>): unknown=> error) =>{
    const { fetch,error, data } = httpRequest
    try {
        await fetch()
        if(error.value) throw error.value.error;
        success(data)
        return data
    } catch (err) {
        failed(err)
        return err
    }
}
