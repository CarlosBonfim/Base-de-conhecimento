import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App'
import './config/axios'
import './config/bootstrap'
import './config/msgs'
import './config/mq'
import store from './config/store'
import router from './config/router'



Vue.config.productionTip = false
// temporario
// require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkJydW5vIiwiZW1haWwiOiJicnVub0BlbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjE5NDc1NTAzLCJleHAiOjE2MTk4MjExMDN9.UK5DaQGbkm64do7BCwnZ_FP0haBXavItiNjgtSlvcTQ'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')