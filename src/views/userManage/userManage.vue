<template>
  <div id="userManage">
    <div class="userManageHead">
      <el-button type="primary" size="small " @click="dialogFormVisible = true"
      >新增用户+
      </el-button
      >
      <el-dialog title="请输入用户信息" :visible.sync="dialogFormVisible">
        <common-form :inline="true" :formLabel="formLabel" :form="form"/>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addNewUser"
          >确 定
          </el-button>
        </div>
      </el-dialog>
      <div class="searchDiv">
        <el-input></el-input>
        <el-button type="primary" size="small " @click="dialogFormVisible = true">搜索用户
        </el-button>
      </div>
    </div>
    <el-table>
      
    </el-table>
  </div>
</template>

<script>
  import commonForm from "@/components/commonForm.vue";
  import {createUser, getUserList} from "@/api/requestData";

  export default {
    name: "userManage",
    components: {
      commonForm,
    },
    data() {
      return {
        dialogFormVisible: false,
        formLabel: [
          {
            type: "input",
            label: "姓名",
            model: "username",
          },
          {
            type: "input",
            label: "年龄",
            model: "age",
          },
          {
            type: "select",
            label: "性别",
            model: "sex",
            options: [
              {
                label: "男",
                value: "男",
              },
              {
                label: "女",
                value: "女",
              },
            ],
          },
          {
            type: "date",
            label: "出生日期",
            model: "bornTime",
          },
        ],
        form: {
          username: "",
          age: "",
          sex: "",
          bornTime: "",
        },
        userList: []
      };
    },
    methods: {
      addNewUser() {
        //关闭弹窗
        this.dialogFormVisible = false
        createUser(this.form).then(res => {
          console.log(res.data)
        })
      },
    },
    mounted() {
      getUserList().then(res => {
        this.userList = res.list
      })
    }
  };
</script>

<style scoped lang="less">
  #userManage {
    height: 300px;
    padding: 1%;

    .userManageHead {
      display: flex;
      justify-content: space-between;

      .el-button {
        height: 40px;
      }

      .searchDiv {
        display: flex;
      }
    }
  }
</style>