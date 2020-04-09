import { useToasty } from '../swal/useSwal'
import { useStateType } from '@/core/typings/EffectTyping';
import { RootState } from '@/core/typings/StateTyping';
import { IncidentTyping } from '@/core/typings/IncidentTyping';
import { useDeleteHttp, } from '../http/useHttp';
import { tryAwait } from '@/core/utils/try-request';
import { useActions } from '@u3u/vue-hooks';
import { useAuthHeaders } from '../authentication/useAuthentication';

export const useDeleteIncident = async (id: number, useState: useStateType) =>{
    const state = useState({
        incidentList: (vuexState: RootState) => vuexState.incidentList,
    })
    
    const authHeaders = useAuthHeaders()

    const { value } = await useToasty({
        title: 'Deseja realmente apagar este caso?',
        text: "esta ação é irreversivel!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, apagar isto!',
        confirmButtonColor: '#d33',
        cancelButtonText: 'Não, cancelar!',
        reverseButtons: true
    })
    if(!value) return;
    

    const { SET_INCIDENTS: setIncidents } = useActions(['SET_INCIDENTS'])

    const useHttpIncidents = useDeleteHttp(`incidents/${id}`, {
        headers: { ...authHeaders }
    })

    const removeIncidentById = (idIncident: number) =>{
        return state.incidentList.value.filter((incident: IncidentTyping) => {
            return incident.id !== idIncident
        })
    }

    return await tryAwait<any>(
        useHttpIncidents,
        async success => {
            await setIncidents(
                removeIncidentById(id)
            )
            useToasty({ 
                title: `Removido com sucesso!`,
                icon: 'success'
            })
        },
        err =>{}
    )
}
