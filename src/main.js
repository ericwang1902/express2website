import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'

Vue.use(Element)
Vue.use(VueRouter)

import Login from './components/login.vue'
import Register from './components/register.vue'
import Console from './layouts/console.vue'

const routes =[
    {path:'/',component:Login},//路由，进入系统就跳到登录界面
    {path:'/register',component:Register},
    {path:'/console',component:Console}
]

const router = new VueRouter({
  routes
})

const app = new Vue({
router
}).$mount('#app')
