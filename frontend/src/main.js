import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App'
import store from './config/store'
import './config/bootstrap'
import router from './config/router'
import './config/msgs'

Vue.config.productionTip = false
// temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkJydW5vIiwiZW1haWwiOiJicnVub0BlbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjE3OTA3MzI0LCJleHAiOjE2MTgxNjY1MjR9.eZh9u8m5jRp-njjq1BM_etCtNSgkiGjsPcIt5bk3-gs'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')