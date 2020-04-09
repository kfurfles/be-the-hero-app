import { toRefs } from '@vue/composition-api'
import { useActions, useRouter } from '@u3u/vue-hooks'
import { RootState } from '@/core/typings/StateTyping'
import { useStateType } from '@/core/typings/EffectTyping'

export const useProfile = (useState: useStateType) => {
    const state = useState({
        ongName: (vuexState: RootState) => vuexState.ong.name,        
    })

    return {
        ...toRefs(state),
    }
}

export const useSetProfile = ({ name, id }) =>{
    const { router } = useRouter()
    const { SET_ONG_NAME: setName } = useActions(['SET_ONG_NAME'])

    setName({ name, id })
    return router.push('/profile')
}