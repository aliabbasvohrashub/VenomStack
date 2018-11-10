// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.use(Vuetify, {
  theme: {
    primary: '#b71c1c',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

// Vuex store for use
Vue.use(store)
Vue.config.productionTip = false

Vue.axios = Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:8081/api'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
