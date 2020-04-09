<template>
    <div class="profile-container">
    
    <HHeader />

    <h1>Casos cadastrados</h1>
      <ul>
        <li v-for="(incident,i) of incidentList" :key="i">
            <HIncidentCard  @onDelete="deleteHandle" :incident="incident"></HIncidentCard>
        </li>
      </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { CartIncidentTyping } from '../../core/typings/CartIncidentTyping'
import IconPower from '../../components/icons/power/index.vue'
import HIncidentCard from '@/components/HIncidentCard/index.vue'
import HHeader from '@/components/Header/index.vue'
import { useProfile } from '../../core/use/user/useProfile'
import { useDeleteIncident, useIncidentList } from '../../core/use/user/useIncident'
import { toRefs } from '@vue/composition-api'
import { useState } from '@u3u/vue-hooks'


export default Vue.extend({
  components:{
    IconPower,
    HIncidentCard,
    HHeader
  },
  setup(){
    const useIncident = useIncidentList(useState)
    const deleteHandle = (id: number) =>{
      console.log({ id })
      useDeleteIncident(id, useState)
    }

    return {
      ...toRefs(useIncident),
      deleteHandle
    }
  }
})

</script>

<style lang="scss">
    @import './style.scss';
</style>