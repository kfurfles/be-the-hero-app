import { useStateType } from '@/core/typings/EffectTyping';
import { RootState } from '@/core/typings/StateTyping';
import { IncidentTyping } from '@/core/typings/IncidentTyping';
import { useGetHttp } from '../../http/useHttp';
import { tryAwait } from '@/core/utils/try-request';
import { useActions } from '@u3u/vue-hooks';
import { useAuthHeaders } from '../../authentication/useAuthentication';
import { onMounted, toRefs } from '@vue/composition-api';

export const useIncidentList = (useState: useStateType) => {

    const state = useState({
        incidentList: (vuexState: RootState) => vuexState.incidentList
    })

    const authHeaders = useAuthHeaders()

    const { SET_INCIDENTS: setIncidents } = useActions(['SET_INCIDENTS'])

    const useHttpIncidents = useGetHttp<IncidentTyping[]>('profile', {
        headers: {
            ...authHeaders
        }
    })

    onMounted(() =>{
        tryAwait<IncidentTyping[]>(
            useHttpIncidents,
            success => setIncidents(success.value),
            err =>{}
        )
    })

    return {
        ...toRefs(state),
    }
}