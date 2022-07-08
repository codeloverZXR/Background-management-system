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
  Dialog
} from 'element-ui'
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
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
// master

//hotfix
//updateFunctiontest