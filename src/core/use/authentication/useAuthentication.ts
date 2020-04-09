import { useState } from '@u3u/vue-hooks'
import { RootState } from '@/core/typings/StateTyping'

export const useAuthHeaders = () => {
    const state = useState({
        ongId: (vuexState: RootState) => vuexState.ong.id,
    })

   return {
        Authorization: state.ongId.value,
    } 
}