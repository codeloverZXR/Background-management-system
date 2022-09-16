import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
//按需引入element-ui
import {
  Button,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  Form,
  FormItem,
  Input,
  Switch,
  DatePicker,
  Select,
  Option,
  Dialog,
  Pagination,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  MessageBox,
  Message
} from 'element-ui'
//引入element-ui css样式
import 'element-ui/lib/theme-chalk/index.css';
//全局引入$confirm组件
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
//引入mockServe
import "@/mock/mockServe.js"
import Cookie from 'js-cookie'
//
// import "@/utils/rem.js"

Vue.config.productionTip = false
// Vue.component(Button.name, Button);
//引入全局路由导航守卫
//cookie实现，关闭页签自动登录
// router.beforeEach((to, from, next) => {
//   //每次路由发生跳转，都要获取一遍token并保存到vuex中
//   store.commit('GETTOKEN')
//   //将vuex中保存的token值保存到本地
//   const token = store.state.user.token
//   //每次路由发生跳转，都要获取一遍menu值保存到本地
//   const menu = Cookie.get('menu')
//   //如果你没有token或menu且要跳转的路由名称不是login页面那就返回登录页面重新登录获取token
//   if ((!token || !menu) && to.name !== 'login') {
//     next({name: 'login'})
//   } else if (token && menu && to.name === 'login') {
//     //如果你已经登录(有token和menu)，就不能访问登录页了
//     next({name: 'home'})
//     this.$message.warning('用户已登录')
//   } else {
//     next()
//   }
// }
//sessionStorge实现，关闭页签要重新登录
router.beforeEach((to, from, next) => {
  store.commit('GETTOKEN')
  const menu = sessionStorage.getItem('menu')
  const token = store.state.user.token
  if ((!token || !menu) && to.name !== 'login') {
    next({name: 'login'})
  } else if (token && menu && to.name === 'login') {
    next({name: 'home'})
  } else {
    next()
  }
})
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
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')