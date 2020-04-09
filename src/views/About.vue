<template>
  <div class="about">
    <h1>This is an about page</h1>
    <VButton></VButton>
  </div>
</template>

<script lang="ts">
import VButton from '@/components/Button.vue'

import Vue from 'vue'
export default Vue.extend({
  components:{
    VButton
  }
})
</script>
