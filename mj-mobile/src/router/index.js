import Vue from 'vue'
import VueRouter from 'vue-router'
import detail from '@/views/detail.vue'
import layout from '@/views/layout.vue'
import login from '@/views/login.vue'
import register from '@/views/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'layout',
    path: '/',
    component: layout
  },
  { name: 'login', path: '/login', component: login },
  {
    name: 'register',
    path: '/register',
    component: register
  },
  {
    name: 'detail',
    path: '/detail',
    component: detail
  }
]

const router = new VueRouter({
  routes
})

export default router
