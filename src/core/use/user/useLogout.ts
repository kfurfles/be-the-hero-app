import { useToasty } from '../swal/useSwal'
import { useRouter } from '@u3u/vue-hooks';

export const useLogout = async () =>{
 
    const { value, dismiss } = await useToasty({
        title: 'Deseja encerrar sua sessão?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sair agora!',
        cancelButtonText: 'não, cancelar!',
        reverseButtons: true
    })
    if(!value) return;

    const { router } = useRouter()

    router.push('/')
}