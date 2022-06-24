import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/MainIndex.vue'),
    children: [
      {
        path: '/main/home',
        name: 'home',
        component: () => import('@/views/home/HomeIndex.vue')
      },
      {
        path: '/main/goodsManage',
        name: 'mall',
        component: () => import('@/views/goodsManage/goodsManage.vue')
      },
      {
        path: '/main/userManage',
        name: 'user',
        component: () => import('@/views/userManage/userManage.vue')
      }
    ]
  },


]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router