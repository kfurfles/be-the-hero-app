import { usePostHttp } from '../http/useHttp'
import { useToasty } from '../swal/useSwal'
import { useRouter, useActions } from '@u3u/vue-hooks';

export const useLoginUser = async (id: string) => {
    const { router } = useRouter()
    const { SET_ONG_NAME: setName } = useActions(['SET_ONG_NAME'])

    const { 
        data, 
        error,
        fetch
    } = usePostHttp<{ name: string }>('sessions', { id })    

    try {
        await fetch()
        if(error.value) throw error.value.error;
        useToasty({ 
            title: `Olá ${data.value.name}`,
            icon: 'success'
        })
        setName({ name: data.value.name, id })
        router.push('/profile')
    } catch (err) {
        useToasty({ 
            title: `ONG não encontrada`,
            icon: 'error'
        })
    }
}