import { usePostHttp } from '../http/useHttp'
import { useToasty } from '../swal/useSwal'
import { useRouter, useActions } from '@u3u/vue-hooks';
import { tryAwait } from '@/core/utils/try-request';
import { useSetProfile } from '../user/useProfile';
import { ref } from '@vue/composition-api';

type CreateOngTyping = {
    name: string
    email: string
    whatsapp: string
    city: string
    uf: string
}

export const useCreate = async ({ 
    name,
    email,
    whatsapp,
    city,
    uf
}: CreateOngTyping) => {

    const loading = ref(false)
    const useHttpNewOng = usePostHttp<{ name: string }>('ongs', { 
        name,
        email,
        whatsapp,
        city,
        uf
    })    


    await tryAwait<{ id: string }>(
        useHttpNewOng,
        async success => {
            useToasty({ 
                title: `Olá, ${name}`,
                icon: 'success'
            })

            await useSetProfile({ name, id: success.value.id })
            loading.value = false
        },
        err =>{
            useToasty({ 
                title: `Ops ! houve um erro`,
                icon: 'error'
            })
        }
    )

    return {
        loading
    }
}