import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
//保存下来push方法 将来我们还会用到原push方法进行路由跳转
let originPush = VueRouter.prototype.push;

//接下来我们重写push|replace方法  
//第一个参数location参数像原push方法声明跳转的地方 resolve和reject传递成功与失败

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    //如果成功 调用原来的push方法  
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => {
    }, () => {
    });
  }
}
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/MainIndex.vue'),
    children: [
      {
        path: '/main',
        redirect: '/main/home'
      },
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
      },
      {
        path: '/main/others/pageOne',
        name: 'pageOne',
        component: () => import('@/views/others/pageOne.vue')
      },
      {
        path: '/main/others/pageTwo',
        name: 'pageTwo',
        component: () => import('@/views/others/pageTwo.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  }

]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router