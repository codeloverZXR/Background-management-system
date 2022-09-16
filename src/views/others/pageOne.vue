<template>
  <div>
    我是页面一(父组件)<br/>
    我的数据:{{fatherData}}
    <my-test :fatherData.sync="fatherData" />
  </div>
</template>

<script>
import myTest from './childCpns/myTest.vue';
export default {
  components: { myTest },
  name: 'pageOne',
  data() {
    return {
      fatherData: 'fatherData'
    };
  },
}
</script>

<style scoped>

</style>