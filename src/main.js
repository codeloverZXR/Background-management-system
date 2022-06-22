import Vue from 'vue'
import App from './App.vue'
import router from './router';
//按需引入element-ui
import { Button, Container, Header, Aside, Main, Menu, Submenu, MenuItemGroup, MenuItem } from 'element-ui'
//引入element-ui css样式
import 'element-ui/lib/theme-chalk/index.css';
//引入mockServe
import "@/mock/mockServe.js"
Vue.config.productionTip = false
// Vue.component(Button.name, Button);
//使用element-ui组件
Vue.use(Button)
Vue.use(Header)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
// 我是test
