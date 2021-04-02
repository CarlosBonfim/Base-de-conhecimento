import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App'
import store from './config/store'
import './config/bootstrap'
import router from './config/router'
import './config/msgs'

Vue.config.productionTip = false
// temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkJydW5vIiwiZW1haWwiOiJicnVub0BlbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjE3MzE5ODExLCJleHAiOjE2MTc1NzkwMTF9.6DATPuM4M3e3i5SpAYVN698YOvrEDd6XB0RqECCLviU'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')