<template>
  <el-menu
          default-active="/"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          mode="vertical"
          text-color="#fff"
          active-text-color="#fbbd08"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
  >
    <h3 class="small" v-show="isCollapse">后台</h3>
    <h3 class="big" v-show="!isCollapse">后台管理系统</h3>
    <el-menu-item
            :index="item.path"
            v-for="item in listNochild"
            :key="item.name"
            @click="changePage(item)"
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
                @click="changePage(item1)"
        >
          <i :class="'el-icon-' + item1.icon"></i>
          <span slot="title">{{ item1.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
  import {getAsideList} from "@/api/requestData";

  export default {
    data() {
      return {
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
      changePage(item) {
        this.$router.push({name: item.name});
        this.$store.commit("ADDTABSLIST", item);
      },
    },
    computed: {
      listNochild: function () {
        return this.listDataByUser.filter((item) => !item.children);
      },
      listHaschild: function () {
        return this.listDataByUser.filter((item) => item.children);
      },
      isCollapse() {
        return this.$store.state.lab.isCollapse;
      },
      listDataByUser() {
        return this.$store.state.lab.menu;
      }
    },
    mounted() {
      getAsideList().then((res) => {
        this.listData = res.data;
      });
    },
  };
</script>
<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-menu {
    border: none;
    height: 100vh;
    .small{
      border-bottom: 1px solid #fff;
      text-align: center;
      color: #fff;
      line-height: 60px;
      width: 64px;
    }
    .big {
      border-bottom: 1px solid #fff;
      text-align: center;
      color: #fff;
      line-height: 60px;
      width: 200px;
    }
  }
  // .el-menu-vertical-demo el-menu{
  //   h3,li{
  //     width: 200px !important;
  //   }
  // }
</style>

