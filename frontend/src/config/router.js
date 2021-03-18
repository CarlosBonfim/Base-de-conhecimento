import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'

Vue.use(VueRouter)

const routes = [{// Onde cria-se as rotas
    name: 'home',
    path: '/',
    component: Home
},{
    name: 'adminPages',
    path: '/admin',
    component: AdminPages
}]
export default new VueRouter({ // vai instanciar o vue router
    mode: 'history',
    routes: routes
})
