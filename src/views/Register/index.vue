<template>
    <div class="register-container">
      <div class="content">
        <section>
            <HLogo class="logo-form"/>

          <h1>Cadastro</h1>
          <p>Faça o seu cadastro, entre na plataforma e 
            ajude pessoas a encontrarem os casos da sua ONG.</p>
          <router-link class="back-link" to="/">
            <LeftArrowIcon />
            Voltar para o logon
          </router-link>

        </section>
        <form @submit.prevent="onSubmit">
            
            <HInput v-model="state.name" required placeholder="Nome da ONG"/>
        
            <HInput v-model="state.email" required type="email" placeholder="E-mail" />

            <HInput v-model="state.whatsapp" required type="tel" placeholder="WhatsApp" />
        

            <div class="input-group">

              <HInput v-model="state.city" required placeholder="Cidade" />

              <HInput v-model="state.uf" required placeholder="UF" style="width: 80%" />
            </div>

            <HButton type="submit">Cadastrar</HButton> 
        </form>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LeftArrowIcon from '@/components/icons/logout/index.vue'
import { reactive } from '@vue/composition-api'
import { useCreate } from '../../core/use/ong/create'

export default Vue.extend({
  components:{
    LeftArrowIcon
  },
  setup(props, vm){

    const state = reactive({
      name: '',
      email: '',
      whatsapp: '',
      city: '',
      uf: ''
    })

    const onSubmit = () =>{
      useCreate(state)
    }

    return {
      state,
      onSubmit
    }
  }
})
</script>

<style lang="scss">
    @import './style.scss'
</style>