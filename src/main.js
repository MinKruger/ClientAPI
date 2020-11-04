import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL =  'https://localhost:5001/v1/'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')