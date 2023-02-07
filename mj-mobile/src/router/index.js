import Vue from 'vue'
import VueRouter from 'vue-router'
import detail from '@/views/detail.vue'
import layout from '@/views/layout.vue'
import login from '@/views/login.vue'
import register from '@/views/register.vue'
// 导入二级路由
import article from '@/views/article'
import collect from '@/views/collect'
import like from '@/views/like.vue'
import user from '@/views/user.vue'
Vue.use(VueRouter)

const routes = [
  {
    name: 'layout',
    path: '/',
    component: layout,
    children: [
      { name: 'like', path: 'like', component: like },
      { name: 'article', path: 'article', component: article },
      { name: 'collect', path: 'collect', component: collect },
      { name: 'user', path: 'user', component: user }
    ]
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
