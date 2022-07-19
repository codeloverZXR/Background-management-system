<template>
  <div id="login">
    <el-form
      ref="form"
      :model="form"
      label-width="100px"
      status-icon
      :rules="rules"
    >
      <h3 class="login_title">系统登录</h3>
      <el-form-item
        label="用户名"
        label-width="80px"
        prop="username"
        class="username"
      >
        <el-input
          type="text"
          placeholder="请输入账号"
          v-model="form.username"
          ref="input"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        label-width="80px"
        prop="password"
        class="password"
      >
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="form['password']"
        ></el-input>
      </el-form-item>
      <el-form-item class="options">
        <div>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="primary">注册</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getMenu } from "@/api/requestData.js";

export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            message: "用户名长度不能小于3位",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.input.focus();
    });
    //定义全局监听回车按键事件
    document.onkeydown = (e) => {
      if (e.keyCode === 13) {
        this.login();
      }
    };
  },
  beforeDestroy() {
    //销毁该事件
    document.onkeydown = undefined;
  },
  methods: {
    login() {
      getMenu(this.form).then((res) => {
        if (res.code === 20000) {
          //清除之前menu
          this.$store.commit("CLEARMENU");
          //设置menu
          this.$store.commit("SETMENU", res.data.menu);
          //设置token
          this.$store.commit("SETTOKEN", res.data.token);
          //动态添加路由
          this.$store.commit("ADDMENU", this.$router);
          //切换至首页
          this.$router.push({ name: "home" });
          this.$message.success(res.data.message);
        } else {
          this.$message.warning(res.data.message);
        }
      });
      // const token = '123'
      // //将生成token保存到vuex中并生成cookie
      // this.$store.commit('SETTOKEN', token)
      // //路由跳转并利用定义的路由导航进行校验
      // this.$router.push({name: 'home'})
    },
  },
};
</script>

<style scoped lang="less">
#login {
  .el-form {
    width: 30%;
    height: 30%;
    padding: 30px;
    border: 1px solid #bfa;
    margin: 10% auto;
    border-radius: 15%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

    h3 {
      text-align: center;
      line-height: 40px;
    }

    .options {
      ::v-deep .el-form-item__content {
        margin-left: 0 !important;
      }

      display: flex;
      justify-content: space-around;
    }
  }
}
</style>