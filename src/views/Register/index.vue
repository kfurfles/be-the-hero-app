<template>
    <div class="register-container">
      <div class="content">
        <section>
            <HLogo />

          <h1>Cadastro</h1>
          <p>Faça o seu cadastro, entre na plataforma e 
            ajude pessoas a encontrarem os casos da sua ONG.</p>
          <router-link class="back-link" to="/">
            <LeftArrowIcon />
            Voltar para o logon
          </router-link>

        </section>
        <form >
            
            <HInput placeholder="Nome da ONG"/>
        

            <HInput 
                type="email" 
                placeholder="E-mail" 
            />

            <HInput 
                placeholder="WhatsApp" 
            />
        

            <div class="input-group">

                <HInput placeholder="Cidade" />

                <HInput placeholder="UF"
                    style="width: 80%"
                />
            </div>

            <HButton type="submit">Cadastrar</HButton> 
            <!-- <button class="button" ></button> -->
        </form>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import LeftArrowIcon from '@/components/icons/logout/index.vue'

@Component({
    components: {
        LeftArrowIcon,
    }
})
export default class RegisterComponent extends Vue{}
</script>

<style lang="scss">
    @import './style.scss'
</style>