<template>
  <div>
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
  export default {
    name: "App",
    components: {},
    data() {
      return {
        isRouterAlive: true
      }
    },
    provide() {
      return {
        reload: this.reload
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false
        this.$nextTick(function () {
          this.isRouterAlive = true
        })
      }
    },
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
