<template>
  <div>
      <strong>CASO:</strong>
      <p>{{ incident.title }}</p>

      <strong>DESCRIÇÃO:</strong>
      <p>{{ incident.description }}</p>

      <strong>VALOR:</strong>
      <p>{{ currency }}</p>

      <button @click="$emit('onDelete', incident.id)" type="button">
        <IconTrash />
      </button>
  </div>
</template>

<script lang="ts">

import { defineComponent, computed } from '@vue/composition-api'
import { CartIncidentTyping } from '../../core/typings/CartIncidentTyping'
import { IncidentTyping } from '../../core/typings/IncidentTyping'

import { useCurrency } from '../../core/use/currency/useCurrency'

import IconTrash from '@/components/icons/trash/index.vue'
import { useState } from '@u3u/vue-hooks'

interface Props {
  incident: IncidentTyping
}

export default defineComponent({
  props:{
    incident:{
      type: Object,
      validator(propValue){
          const { title, description, value } = propValue
          return title && description && value
      },
      default:(): Partial<IncidentTyping> => ({
        title: '<no title>',
        description: '<no description>',
        value: 0
      })
    }
  },
  components: {
    IconTrash
  },
  setup(props: Props){

    const currency = useCurrency(props.incident.value, useState)
    return {
      currency
    }
  }
})
</script>


<style>

</style>