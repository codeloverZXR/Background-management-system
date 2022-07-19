import Mock from 'mockjs'

export default {
  getMenu: config => {
    console.log(config);
    const {username, password} = JSON.parse(config.body)
    console.log(JSON.parse(config.body))
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              "path": "/main/home",
              "name": "home",
              "label": "首页",
              "icon": "s-home",
              "url": "/home/HomeIndex.vue"
            },
            {
              "path": "/main/goodsManage",
              "name": "mall",
              "label": "商品管理",
              "icon": "video-play",
              "url": "/goodsManage/goodsManage.vue"
            },
            {
              "path": "/main/userManage",
              "name": "user",
              "label": "用户管理",
              "icon": "user",
              "url": "/userManage/userManage.vue"
            },
            {
              "path": "/others",
              "label": "其它",
              "icon": "location",
              "children": [
                {
                  "path": "/main/others/pageOne",
                  "name": "pageOne",
                  "label": "页面1",
                  "icon": "setting",
                  "url": "/others/pageOne.vue"
                },
                {
                  "path": "/main/others/pageTwo",
                  "name": "pageTwo",
                  "label": "页面2",
                  "icon": "setting",
                  "url": "/others/pageTwo.vue"
                }
              ]
            }
          ],
          token: Mock.Random.guid(),
          message: '登录成功'
        }
      }
    } else if (username === 'zhangxinrui' && password === 'zxr') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              "path": "/main/home",
              "name": "home",
              "label": "首页",
              "icon": "s-home",
              "url": "/home/HomeIndex.vue"
            },
            {
              "path": "/main/goodsManage",
              "name": "mall",
              "label": "商品管理",
              "icon": "video-play",
              "url": "/goodsManage/goodsManage.vue"
            }
          ],
          token: Mock.Random.guid(),
          message: '登录成功'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '账号或密码错误'
        }
      }
    }

  }
}
