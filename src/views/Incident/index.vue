<template>
  <div class="new-incident-container">
    <div class="content">
      <section>
        <HLogo class="logo-form"/>

        <h1>Cadastrar novo caso</h1>

        <p>Descreva o caso detalhadamente para encontrar um héroi para te ajudar.</p>

        <router-link class="back-link" to="/profile">
          <LeftArrowIcon />Voltar para home
        </router-link>
      </section>
      <form @submit.prevent="onSubmit">
        <HInput v-model="formState.title" name="title" required placeholder="Titulo do caso" />
        <HTextArea v-model="formState.description" name="description" required placeholder="Descrição" />
        <HInput ref="value" v-money="money" v-model="formState.value" name="value" required placeholder="Valor em reais" />

        <div class="buttons">
          <HButton @click="backToProfile" class="button-cancel" type="reset">Cancelar</HButton>
          <HButton class="button-submit" type="submit">Cadastrar</HButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import HTextArea from "@/components/HTextArea/index.vue";
import LeftArrowIcon from "@/components/icons/logout/index.vue";
import { useState, useRouter } from '@u3u/vue-hooks';
import { useCreateIncident } from "../../core/use/incidents";
import { reactive, toRefs, SetupContext, computed, watchEffect } from "@vue/composition-api";
import { VMoney } from 'v-money'


export default Vue.extend({
  components: {
    LeftArrowIcon,
    HTextArea
  },
  directives: {
    money: VMoney
  },
  setup(props,vm: SetupContext){
    const formState = reactive({
      title: '',
      description: '',
      value: ''
    })

    const pureValue = computed(() =>{
        return extracMoneyValue(formState['value']) 
    })


    const money = {
      decimal: ',',
      thousands: '.',
      prefix: 'R$ ',
      precision: 2,
      masked: true
    }
    

    watchEffect(() =>{
      const el = vm['refs'].value.$el
      if(pureValue.value >= 1){
        el.setCustomValidity('')
      } else {
        el.setCustomValidity('Selecione um valor de ajuda válido')
      }
    })

    const { route, router } = useRouter()

    const backToProfile = () => router.push('/profile')

    const onSubmit = async (event) =>{
      await useCreateIncident({
        title: formState['title'],
        description: formState['description'],
        value: pureValue.value
      })

      router.push('/profile')
    }

    return {
      money,
      backToProfile,
      onSubmit,
      ...toRefs({ formState })
    }
  }
});

function extracMoneyValue(money: string){
    return parseFloat(
      money.replace('R$ ','').replace(/\./ig, '').replace(',','.')
    )
}

</script>

<style lang="scss">
@import "./style.scss";
</style>
