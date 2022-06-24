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
      <h3>首页</h3>
    </div>
    <div class="connent-right">
      <el-dropdown>
        <div class="el-dropdown-link">
          <img src="@/assets/photo.jpg" alt="" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "commonHeader",
  data() {
    return {};
  },
  methods: {
    changeIsCollapse() {
      this.$store.commit("CHANGEISCOLLAPSE");
    },
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
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .el-button {
      font-size: 20px;
    }
    h3 {
      color: #fff;
      font-size: 18px;
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