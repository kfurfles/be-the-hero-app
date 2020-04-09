<template>
    <div class="login-container">
      <section class="form">
        <HLogo />

        <form @submit.prevent="onSubmit">
          <h1>Faça seu logon</h1>
          <HInput name="id" 
            v-model="loginNumber"
            required/>
        
          <HButton type="submit">Entrar</HButton>

          <router-link class="back-link" to="/register">

            <IconLogin :size="16" color="#E02041"/>
            Não tenho cadastro
          </router-link>
        </form>

      </section>
      <img src="@/assets/heroes.png" class="hero-image" alt="Heroes"/>
    </div>
    

</template>

<script lang="ts">
import Vue from 'vue'
import IconLogin from '@/components/icons/login/index.vue'
import { SetupContext, ref, reactive, toRefs, onMounted } from '@vue/composition-api'
import { useLoginUser } from '../../core/use/user/useLogin'
import { useToasty } from '../../core/use/swal/useSwal'
import { useRouter, useActions } from '@u3u/vue-hooks';

import Axios from 'axios'

export default Vue.extend({
  components:{
    IconLogin
  },
  setup(props){

    // const loginNumber = ref('')
    const loginNumber = ref('29b54139')
    
    const onSubmit = () => {
      useLoginUser(loginNumber.value)
    }

    return {
      onSubmit,
      loginNumber
    }
  }
})
</script>

<style lang="scss">
    @import './style.scss'
</style>