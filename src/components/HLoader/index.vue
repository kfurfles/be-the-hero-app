<template>
  <div :class="['loader', { 'is--active': loading }]">
      <div class="loader__container">
          <Hlogo class="loader__logo" />
      </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { useActions, useState } from '@u3u/vue-hooks'
import { reactive, toRefs } from '@vue/composition-api'
import Hlogo from '../HLogo/index.vue'

export default Vue.extend({
  components: {
    Hlogo
  },
  setup(){
    const state = reactive({
      ...useState(['loading'])
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss">
@import './style.scss'
</style>