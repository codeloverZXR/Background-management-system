import mockjs from "mockjs";
import asideList from "./asideList.json"
import goodsList from "./goodsList.json"
import salesList from "./salesList.json"
import user from "@/mock/user";
import permisson from "@/mock/permisson";

mockjs.mock("/mock/asideList", {code: 200, data: asideList})
mockjs.mock("/mock/goodsList", {code: 200, data: goodsList})
mockjs.mock("/mock/salesList", {code: 200, data: salesList})
mockjs.mock("/mock/createUser", 'post', user.createUser)
mockjs.mock("/mock/editUser", 'post', user.updateUser)
mockjs.mock("/mock/getUserList", 'get', user.getUserList)
mockjs.mock("/mock/getMenu", 'post', permisson.getMenu)