import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App'
import store from './config/store'
import './config/bootstrap'
import router from './config/router'

Vue.config.productionTip = false
// temporario
require('axios').defaults.headers.common['Authorization'] = ' bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkJydW5vIiwiZW1haWwiOiJicnVub0BlbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjE2MTc4NTgwLCJleHAiOjE2MTY0Mzc3ODB9.AQcqoIaN9ljyYLNye6CUvyPAWkpyU3vKYV56_QZSG-0'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')