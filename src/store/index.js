import Vue from "vue";
import vuex from "vuex"
import lab from "./lab.js"
Vue.use(vuex)
const store = new vuex.Store({
  modules: {
    lab
  }
})
export default store