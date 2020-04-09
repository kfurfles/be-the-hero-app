import { reactive, toRefs, isRef, ref, Ref } from '@vue/composition-api'
import axios, { AxiosResponse } from 'axios'

const axiosRequest = <T>(request: Promise<AxiosResponse<T>>) =>{
    const data: Ref<T> = ref({})
    const loading = ref(true)
    const error: Ref<any> = ref(null)

    const fetch = async () =>{
        return request
        .then(({ data: res }) => (data.value = res))
        .catch((err) => (error.value = err.response.data))
        .finally(() => (loading.value = false))
    }

    return { data, loading, error, fetch }
}

export const useGetHttp = <T>(url: string, data?: any)=> {
    return axiosRequest(axios.get<T>(`${process.env.VUE_APP_API}/${url}`, data))
}

export const usePostHttp = <T>(url: string, data: any, options?: any)=> {
     return axiosRequest(axios.post<T>(`${process.env.VUE_APP_API}/${url}`, data, options))
}

export const useDeleteHttp = <T>(url: string, data: any)=> {
     return axiosRequest(axios.delete<T>(`${process.env.VUE_APP_API}/${url}`, data))
}

