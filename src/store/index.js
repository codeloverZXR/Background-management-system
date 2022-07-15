import Vue from "vue";
import vuex from "vuex"
import lab from "./lab.js"
import user from "./user.js";

Vue.use(vuex)
const store = new vuex.Store({
  modules: {
    lab,
    user
  }
})
export default store