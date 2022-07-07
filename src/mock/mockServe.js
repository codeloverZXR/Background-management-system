import mockjs from "mockjs";
import asideList from "./asideList.json"
import goodsList from "./goodsList.json"
import salesList from "./salesList.json"
import user from "./user/js"
mockjs.mock("/mock/asideList", { code: 200, data: asideList })
mockjs.mock("/mock/goodsList", { code: 200, data: goodsList })
mockjs.mock("/mock/salesList", { code: 200, data: salesList })
mockjs.mock("/mock/addUser", { code: 200, data: salesList })