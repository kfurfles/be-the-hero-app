import { usePostHttp } from '../http/useHttp'
import { useToasty } from '../swal/useSwal'
import { useSetProfile } from './useProfile';

export const useLoginUser = async (id: string) => {
    const { 
        data, 
        error,
        fetch
    } = usePostHttp<{ name: string }>('sessions', { id })    

    try {
        await fetch()
        if(error.value) throw error.value.error;
        // await useToasty({ 
        //     title: `Olá ${data.value.name}`,
        //     icon: 'success'
        // })

        useSetProfile({ name: data.value.name, id })
    } catch (err) {
        useToasty({ 
            title: `ONG não encontrada`,
            icon: 'error'
        })
    }
}