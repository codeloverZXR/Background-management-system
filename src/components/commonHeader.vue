<template>
  <div id="header">
    <div class="conntent-left">
      <el-button
        type="primary"
        plain
        icon="el-icon-menu"
        size="mini"
        @click="changeIsCollapse"
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="(item, index) in tabsList"
          :key="index"
          :to="{ name: item.name }"
          >{{ item.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="connent-right">
      <el-dropdown>
        <div class="el-dropdown-link">
          <img src="@/assets/photo.jpg" alt="" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "commonHeader",
  data() {
    return {};
  },
  methods: {
    changeIsCollapse() {
      this.$store.commit("CHANGEISCOLLAPSE");
    },
    logOut() {
      this.$confirm("确定退出该用户?", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        //清除menu
        this.$store.commit("CLEARMENU");
        //清除token
        this.$store.commit("ClEARTOKEN");
        //返回登录页面
        this.$router.push({ name: "login" });
        this.$message({
          type: "info",
          message: "登出成功",
        });
      });
    },
  },
  computed: {
    ...mapState({
      tabsList: (state) => state.lab.tabsList,
    }),
  },
};
</script>

<style scoped lang="less">
#header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .conntent-left {
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .el-button {
      font-size: 20px;
    }
    .el-breadcrumb {
      margin-left: 20px;
      font-size: 14px;
    }
  }
  .connent-right {
    margin-right: 30px;
    .el-dropdown {
      .el-dropdown-link {
        cursor: pointer;
        color: #409eff;
        img {
          vertical-align: top;
          border-radius: 50%;
          width: 50px;
        }
      }
    }
  }
}
</style>