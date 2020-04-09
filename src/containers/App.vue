<template>
  <div id="app">
    <VRouter />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

import VRouter from './rootRouter.vue'
import { useLocation } from '../core/use/location/useLocation'


export default Vue.extend({
  components: {
    VRouter
  },
  setup(){
    useLocation()
    return {}
  }
})
</script>
