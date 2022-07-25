import Vue from "vue";
import vuex from "vuex"
import lab from "./lab.js"
import user from "./user.js";
import goods from "@/store/goods";

Vue.use(vuex)
const store = new vuex.Store({
  modules: {
    lab,
    user,
    goods
  }
})
export default store