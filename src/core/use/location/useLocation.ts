import { useActions } from '@u3u/vue-hooks'
import { onBeforeMount } from '@vue/composition-api'

export const useLocation = () =>{
    const { SET_USER_DEFINITION: setLanguage } = useActions(['SET_USER_DEFINITION'])
    const getCurrencyByLocation = (location: string) =>({
        'pt-BR':{ language: 'pt-BR', currency: 'BRL' }
    }[location as 'pt-BR'] || { language: 'en-US', currency: 'USA' })

    onBeforeMount(() =>{
        setLanguage(getCurrencyByLocation(navigator.language))
    })
}