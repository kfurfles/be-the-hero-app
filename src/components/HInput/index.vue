<template>
  <input 
        type="text" 
        v-on="$listeners" 
        :value="value"
        class="hinput"
        @input="$emit('update', $event.target.value)"
      >
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