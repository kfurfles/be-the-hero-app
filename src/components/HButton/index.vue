<template>
  <button v-bind="{ class: 'hbutton', ...$attrs }" v-on="$listeners">
    <slot />
  </button>
</template>

<style lang="scss">
@import './style.scss'
</style>