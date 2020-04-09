import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import { RootState } from '../core/typings/StateTyping'
import { IncidentTyping } from '@/core/typings/IncidentTyping'

Vue.use(Vuex)

const vuexPersist = new VuexPersist<RootState>({
  key: 'be-the-hero-app',
  storage: window.localStorage
})

const VUEX = new Vuex.Store({
  plugins: [
    vuexPersist.plugin
  ],
  state: {
    ong: {
      id: '',
      name: ''
    },
    definitions: {
      language: '',
      currency: ''
    },
    incidentList: [],
    loading: false
  },
  mutations: {
    SET_STATUS_LOADING: (state, newLoadingStatus) => state.loading = newLoadingStatus,
    SET_ONG_NAME: (state, newOngValue) => state.ong = newOngValue,
    SET_USER_DEFINITION: (state, newDefnitionsValue) => state.definitions = newDefnitionsValue,
    SET_INCIDENTS: (state, newIncidentValue) => state.incidentList = newIncidentValue
  },
  actions: {
    SET_INCIDENTS({ commit }, payload: IncidentTyping[]){
      commit('SET_INCIDENTS', payload)
    },
    SET_ONG_NAME({ commit }, payload: { id: string, name: string }){
      return commit('SET_ONG_NAME', payload)
    },
    SET_USER_DEFINITION({ commit }, payload: { language: string, currency: string }){
      commit('SET_USER_DEFINITION', payload)
    },
    SET_STATUS_LOADING({ commit }, payload: boolean){
      commit('SET_STATUS_LOADING', payload)
    }
  },
  modules: {
  }
})

export  default VUEX
