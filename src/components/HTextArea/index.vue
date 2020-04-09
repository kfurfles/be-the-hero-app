<template>
  <textarea 
    v-bind="$attrs" 
    v-on="$listeners"
    @input="$emit('update', $event.target.value)" 
    class="htextarea" 
  />
</template>

<script>
export default {
  props: ["value"],
  model: {
    prop: "value",
    event: "update"
  }
}
</script>

<style>
@import './style.scss'
</style>