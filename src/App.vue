<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
    created() {
    //刷新页面，重新加载路由
    this.$store.commit('ADDMENU', this.$router)
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
