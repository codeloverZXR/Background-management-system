<template>
  <div id="login">
    <el-form ref="form" :model="form" label-width="100px" status-icon :rules="rules">
      <h3 class="login_title">系统登录</h3>
      <el-form-item label="用户名" label-width="80px" prop="username" class="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="80px" prop="password" class="password">
        <el-input type="text" placeholder="请输入密码" v-model="form['password']"></el-input>
      </el-form-item>
      <el-form-item class="options">
        <div>
          <el-button type="primary">登录</el-button>
          <el-button type="primary">注册</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {
              min: 3,
              message: "用户名长度不能小于3位",
              trigger: 'blur'
            }
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    }
  }
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
      box-shadow: 0 0 5px rgba(0, 0, 0, .3);

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