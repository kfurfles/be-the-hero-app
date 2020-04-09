<template>
  <div id="app">
    <HLoader />
    <VRouter />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

import VRouter from './rootRouter.vue'
import { useLocation } from '../core/use/location/useLocation'
import HLoader from '../components/HLoader/index.vue'

export default Vue.extend({
  components: {
    VRouter,
    HLoader
  },
  setup(){
    useLocation()
    return {}
  }
})
</script>
