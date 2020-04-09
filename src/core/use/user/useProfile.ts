import { toRefs, onMounted } from '@vue/composition-api'
import { useActions } from '@u3u/vue-hooks'
import { useGetHttp } from '../http/useHttp'
import { RootState } from '@/core/typings/StateTyping'
import { tryAwait } from '@/core/utils/try-request'
import { IncidentTyping } from '@/core/typings/IncidentTyping'
import { useStateType } from '@/core/typings/EffectTyping'
import { useAuthHeaders } from '../authentication/useAuthentication'

export const useProfile = (useState: useStateType) => {
    const state = useState({
        ongName: (vuexState: RootState) => vuexState.ong.name,        
    })

    return {
        ...toRefs(state),
    }
}