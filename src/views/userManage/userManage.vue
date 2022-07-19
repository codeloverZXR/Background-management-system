<template>
  <div id="userManage">
    <div class="userManageHead">
      <el-button
        type="primary"
        size="small "
        @click="
          dialogFormVisible = true;
          operateType = 'addUser';
        "
        >新增用户+
      </el-button>
      <el-dialog title="请输入用户信息" :visible.sync="dialogFormVisible">
        <common-form :inline="true" :formLabel="formLabel" :form="form" />
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addorUpdateUser">确 定</el-button>
        </div>
      </el-dialog>
      <div class="searchDiv">
        <common-form :inline="true" :formLabel="searchLabel" :form="form" />
        <el-button type="primary" size="small " @click="getList(form.name)"
          >搜索用户
        </el-button>
      </div>
    </div>
    <commonTable
      :tableDataList="userList"
      :tableTagList="tagList"
      :pageConfig="config"
      @editUser="editUser"
      @delUser="delUser"
      @changePage="getList"
    />
  </div>
</template>

<script>
import commonForm from "@/components/commonForm.vue";
import commonTable from "@/components/commonTable.vue";
import {
  createUser,
  getUserList,
  updateUser,
  deleteUser,
} from "@/api/requestData";

export default {
  name: "userManage",
  components: {
    commonForm,
    commonTable,
  },
  data() {
    return {
      //是否显示表单
      dialogFormVisible: false,
      formLabel: [
        {
          type: "input",
          label: "姓名",
          model: "name",
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
              value: "1",
            },
            {
              label: "女",
              value: "0",
            },
          ],
        },
        {
          type: "date",
          label: "出生日期",
          model: "birth",
        },
        {
          type: "input",
          label: "住址",
          model: "addr",
        },
      ],
      searchLabel: [
        {
          type: "input",
          label: "搜索用户",
          model: "name",
        },
      ],
      form: {
        name: "",
        age: "",
        sex: "",
        birth: "",
        addr: "",
      },
      orginFrom: {
        name: "",
        age: "",
        sex: "",
        birth: "",
        addr: "",
      },
      tagList: [
        {
          label: "用户名",
          prop: "name",
          width: "100",
        },
        {
          label: "性别",
          prop: "sex",
          width: "100",
        },
        {
          label: "年龄",
          prop: "age",
          width: "100",
        },
        {
          label: "注册时间",
          prop: "birth",
          width: "150",
        },
        {
          label: "住址",
          prop: "addr",
          width: "300",
        },
      ],
      //新增||编辑用户信息
      operateType: "",
      //用户列表
      userList: [],
      //分页器配置
      config: {
        page: 1,
        total: 30,
      },
    };
  },
  methods: {
    //添加或编辑用户
    addorUpdateUser() {
      //关闭弹窗
      this.dialogFormVisible = false;
      //判断是新增还是编辑用户
      if (this.operateType == "addUser") {
        createUser(this.form).then((res) => {
          console.log(res.data);
        });
      } else {
        updateUser(this.form).then((res) => {
          console.log(res.data);
        });
      }
      //重置表单为空
      this.form = this.orginFrom;
      //更新列表
      this.getList();
    },
    //点击编辑按钮
    editUser(row) {
      //修改默认表单
      this.form = row;
      //修改操作类型
      this.operateType = "edit";
      //显示弹窗
      this.dialogFormVisible = true;
    },
    //点击删除按钮
    delUser(row) {
      this.$confirm("此操作将永久删除该用户,是否继续操作?", "警告!", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(
        () => {
          //保存要删除用户的id值
          const id = row.id;
          deleteUser({ id }).then((res) => {
            console.log(res);
          });
          //更新用户列表
          this.getList();
          this.$message({
            type: "success",
            message: "删除成功",
          });
        },
        () => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        }
      );
    },
    //修改用户列表
    getList(name = "") {
      console.log(name, this.config.page);
      //数据获取正常，后端问题
      getUserList({
        name: name,
        page: this.config.page,
      }).then((res) => {
        this.userList = res.list.map((item) => {
          item.sex = item.sex === 0 ? "女" : "男";
          return item;
        });
        this.config.total = res.count;
      });
    },
  },
  mounted() {
    //页面加载时自动获取第一页用户列表
    this.getList();
  },
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