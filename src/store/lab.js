import Cookie from 'js-cookie'
//vuex中的数据刷新后会重置
//cookie中的数据保存后会缓存到浏览器中，数据不会发生重置
const state = {
  isCollapse: false,
  tabsList: [{
    path: "/",
    name: "home",
    label: "首页",
    icon: "s-home",
    url: "Home/Home"
  }],
  menu: []
}
const mutations = {
  CHANGEISCOLLAPSE(state) {
    state.isCollapse = !state.isCollapse
  },
  ADDTABSLIST(state, value) {
    if (state.tabsList.indexOf(value) === -1 && value.name != 'home') {
      state.tabsList.push(value)
    }
  },
  REMOVETAG(state, value) {
    state.tabsList.splice(state.tabsList.indexOf(value), 1)
  },
  //设置menu
  SETMENU(state, val) {
    state.menu = val
    Cookie.set('menu', JSON.stringify(val))
  },
  //清除menu
  CLEARMENU(state) {
    state.menu = []
    Cookie.remove('menu')
  },
  // 动态添加menu中的路由
  ADDMENU(state, router) {
    //如果当前浏览器没有该menu的cookie就直接返回
    if (!Cookie.get('menu')) {
      return
    }
    //将本地cookie序列化后保存到vuex中
    const localMenu = JSON.parse(Cookie.get('menu'))
    state.menu = localMenu
    //forEach 和 map的区别
    localMenu.forEach(item => {
      //如果有子路由
      if (item.children) {
        item.children = item.children.map(item => {
          //为每个子路由添加component属性
          item.component = () => import(`@/views${item.url}`)
          return item
        })
      } else {
        item.component = () => import(`@/views${item.url}`)
      }
      router.addRoute('main', item)
    })
  }
}
const actions = {}
const getters = {}
const lab = {
  state,
  mutations,
  actions,
  getters

}
export default lab
