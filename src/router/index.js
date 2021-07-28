import Vue from "vue"
import Router from "vue-router"
import Layout from "@/views/layout"

Vue.use(Router)

export default new Router({
  // base:'/admin/',
  // mode:'history',
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index'),
      name: 'login',
      meta: { title: '登录', affix: true }
    },
    {
      path: "/",
      component: Layout,
      redirect: '/homePage',
      children: [
        {
          path: 'homePage',
          component: () => import('@/views/index/index'),
          name: 'homePage',
          meta: { title: '文章增改', icon: 'dashboard', affix: true }
        }
      ]
    },
  ],
})
