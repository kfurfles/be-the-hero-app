<template>
  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" :size="$props.size" :color="$props.color" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style="color: rgb(224, 32, 65);"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
</template>

<script>

import { Component, Prop, Vue } from 'vue-property-decorator'

@Component()
export default class HButtob extends Vue {
  @Prop({ type: String }) 
  color;
}

// export default Vue.extend({
//     props:{
//         color:{
//             type: String,
//             default: () => '#fff'
//         },
//         size: {
//             type: Number,
//             default: () => 16
//         }
//     }
// })

</script>
