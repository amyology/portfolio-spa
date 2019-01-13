import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import moment from 'moment'

Vue.config.productionTip = false

new Vue({
  router,
  axios,
  moment,
  render: h => h(App)
}).$mount('#app')
