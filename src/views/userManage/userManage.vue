<template>
  <div id="userManage">
    <el-button type="primary" size="small " @click="dialogFormVisible = true"
      >新增用户+</el-button
    >
    <el-dialog title="请输入用户信息" :visible.sync="dialogFormVisible">
      <common-form :inline="true" :formLabel="formLabel" :form="form" />
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <div class="searchDiv">
      <el-input></el-input>
      <el-button type="primary" size="small " @click="dialogFormVisible = true"
        >搜索用户
      </el-button>
    </div>
  </div>
</template>

<script>
import commonForm from "@/components/commonForm.vue";
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
    };
  },
};
</script>

<style scoped lang="less">
#userManage {
  display: flex;
  justify-content: space-between;
  height: 300px;
  padding: 1%;
  .el-button {
    height: 40px;
  }
  .searchDiv {
    display: flex;
  }
}
</style>