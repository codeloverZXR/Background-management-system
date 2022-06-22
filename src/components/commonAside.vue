<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <el-menu-item
      :index="item.path"
      v-for="item in listNochild"
      :key="item.name"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      :index="item.path"
      v-for="item in listHaschild"
      :key="item.label"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="item1.path"
          v-for="item1 in item.children"
          :key="item1.name"
        >
          <i :class="'el-icon-' + item1.icon"></i>
          <span slot="title">{{ item1.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import { getAsideList } from "@/api/requestData";
export default {
  data() {
    return {
      isCollapse: false,
      listData: [],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed: {
    listNochild: function () {
      return this.listData.filter((item) => !item.children);
    },
    listHaschild: function () {
      return this.listData.filter((item) => item.children);
    },
  },
  mounted() {
    getAsideList().then((res) => {
      this.listData = res.data;
      console.log(this.listData);
    });
  },
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: auto;
  height: 100vh;
}
</style>

