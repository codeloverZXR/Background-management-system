import mockjs from "mockjs";
import asideList from "./asideList.json"
mockjs.mock("/mock/asideList", { code: 200, data: asideList })