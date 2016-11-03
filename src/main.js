import Vue from 'vue'
import App from './App.vue'
import router from './router/route-config.js'
import * as filters from './filters/index.js'

/* eslint-disable */
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})