<template>
    <header>
      <router-link class="logo" to="/">
        <HLogo />
      </router-link>
      <span>Bem-vinda, {{ ongName }}</span>
    
      <router-link class="new-case" to="/incident/new">
       <HButton class="new-case">Cadastrar novo caso</HButton>
      </router-link>

      <button @click="handleLogout" type="button">
            <IconPower />
      </button>
    </header>
</template>

<script lang="ts">
import Vue from 'vue'

import IconPower from '../../components/icons/power/index.vue'
import { useProfile } from '../../core/use/user/useProfile'
import { useLogout } from '../../core/use/user/useLogout'
import { toRefs } from '@vue/composition-api'
import { useState } from '@u3u/vue-hooks'


export default Vue.extend({
  components:{
    IconPower,
  },
  setup(){
    const profile = useProfile(useState)
    const handleLogout = () => useLogout()

    

    return {
      ...toRefs(profile),
      handleLogout
    }
  }
})

</script>

<style lang="scss">
    @import './style.scss';
</style>