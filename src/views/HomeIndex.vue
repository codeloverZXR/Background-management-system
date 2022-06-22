<template>
  <el-container>
    <el-aside width="200px">
      <common-aside />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import commonAside from "@/components/commonAside.vue";
export default {
  name: "HomeIndex",
  components: {
    commonAside,
  },
  data() {
    return {};
  },
};
</script>

<style lang ="less" scoped>
.el-container {
  .el-header {
    background-color: aqua;
  }
  .el-aside {
    background-color: red;
  }
  .el-main {
    background-color: blue;
  }
}
</style>