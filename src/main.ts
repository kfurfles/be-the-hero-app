import Vue from 'vue'
import App from './containers/App.vue'
import VueCompositionApi from '@vue/composition-api';
import VueHooks from '@u3u/vue-hooks'
import {router} from './router'
import store from './store'
import './scss/index.scss'
import './core/global/components'

Vue.use(VueCompositionApi);
Vue.use(VueHooks);


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
