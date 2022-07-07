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
        <common-tag />
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import commonHeader from "@/components/commonHeader.vue";
import commonAside from "@/components/commonAside.vue";
import commonTag from "@/components/commonTag.vue";
export default {
  name: "HomeIndex",
  components: {
    commonAside,
    commonHeader,
    commonTag,
  },
  data() {
    return {};
  },
};
</script>

<style lang ="less" scoped>
.el-container {
  position: relative;
  .el-header {
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #00ccff;
  }
  .el-main {
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #fff;
    position: absolute;
    top: 60px;
    bottom: 0;
    overflow-y: scroll;
  }
}
</style>