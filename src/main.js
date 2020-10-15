import Vue from 'vue'
import VueRouter from 'vue-router'


import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from './store'
import App from './App.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)



new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
