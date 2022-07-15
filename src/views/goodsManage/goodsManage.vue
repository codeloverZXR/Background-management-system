<template>
  <div>
    dadvalue:{{ fvalue }} 
    <br>
    dadnum:{{ num }}
    <son-test :num.sync="num"></son-test>
  </div>
</template>

<script>
import sonTest from "./child/sonTest.vue";
export default {
  name: "goodsManage",
  components: {
    sonTest,
  },
  data() {
    return {
      fvalue: "test",
      num: 0,
    };
  },
};
</script>

<style scoped lang="less">
</style>