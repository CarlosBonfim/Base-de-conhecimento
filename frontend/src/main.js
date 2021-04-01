import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App'
import store from './config/store'
import './config/bootstrap'
import router from './config/router'

Vue.config.productionTip = false
// temporario
require('axios').defaults.headers.common['Authorization'] = ' bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkJydW5vIiwiZW1haWwiOiJicnVub0BlbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjE3MDQ3OTg0LCJleHAiOjE2MTczMDcxODR9.Ew6uNDPWPxZ12pVhcLsc0yFpKPkwPDzy1tnqRidc-HY'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')