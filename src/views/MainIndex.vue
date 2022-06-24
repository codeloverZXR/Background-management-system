<template>
  <el-container>
    <el-aside width="auto">
      <common-aside />
    </el-aside>
    <el-container>
      <el-header>
        <common-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import commonHeader from "@/components/commonHeader.vue";
import commonAside from "@/components/commonAside.vue";
export default {
  name: "HomeIndex",
  components: {
    commonAside,
    commonHeader,
  },
  data() {
    return {};
  },
};
</script>

<style lang ="less" scoped>
.el-container {
  .el-header {
    margin: 0;
    padding: 0;
    background-color: #2c3e50;
  }
  .el-main {
    background-color: #d0d0d0;
  }
}
</style>