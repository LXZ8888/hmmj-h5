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
import { getToken } from '@/utils/token'
import { Toast } from 'vant'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/article' },
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
    path: '/detail/:id',
    component: detail
  }
]
const router = new VueRouter({
  routes
})
// 如果我要去的路径是/collect那就放行到/login，如果去的别的页面，那就直接放行。
const whiteList = ['/login', '/register']
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  if (whiteList.includes(to.path)) {
    next()
  } else {
    if (getToken()) {
      next()
    } else {
      Toast('请先登录')
      next('/login')
    }
  }
})

export default router
