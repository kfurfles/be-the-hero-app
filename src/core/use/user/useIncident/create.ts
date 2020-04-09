import { useToasty } from '../../swal/useSwal'
import { usePostHttp } from '../../http/useHttp';
import { tryAwait } from '@/core/utils/try-request';
import { useAuthHeaders } from '../../authentication/useAuthentication';

export const useCreateIncident = async ({ title, description, value }: { title: string, description: string, value: number }) => {

    const authHeaders = useAuthHeaders()

    const useHttpNewIncident = usePostHttp('incidents',{ title, description, value },{
        headers: { ...authHeaders },
    })

    try {
        
        const data = await tryAwait<any>(
            useHttpNewIncident,
            success => {
                useToasty({ 
                    title: `Cadastrado com sucesso!`,
                    icon: 'success'
                })
            },
            err =>{
                useToasty({ 
                    title: `Ops ! houve um erro`,
                    icon: 'error'
                })
            }
        )
        return data
    } catch (error) {
        throw error
    }
}
