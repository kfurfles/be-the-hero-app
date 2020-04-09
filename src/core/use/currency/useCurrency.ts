import { useState } from '@u3u/vue-hooks'
import { computed } from '@vue/composition-api'
import { useStateType } from '@/core/typings/EffectTyping'

export const useCurrency = (value: number, useState: useStateType) => {
    const state = {
        ...useState(['definitions'])
    }

    const formatedValue = computed(() => {
        const language = state.definitions.value.language
        const currency = state.definitions.value.currency
        
        return Intl.NumberFormat(language, { style: 'currency', currency }).
              format(value)

    })

    return formatedValue
}