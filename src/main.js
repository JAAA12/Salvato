import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import {routes} from './routes'
import {store} from './store/store'
import { BootstrapVue, IconsPlugin } from  'bootstrap-vue'

Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.use(BootstrapVue)
// Opcionalmente, instale el complemento de componentes de iconos de BootstrapVue 
Vue.use (IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  store,
  render: h => h(App),
  router
}).$mount('#app')
