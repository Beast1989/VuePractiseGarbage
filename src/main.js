import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

//导入全局样式表
import './assets/css/global.css'

import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL='http://47.108.251.106:8881/api/private/v1/login'



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
