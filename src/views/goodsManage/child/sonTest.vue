<template>
  <div>
    sonValue:{{ sonValue }}
    <!-- <input type="text" v-model="sonValue" /> -->
    <!-- <button @click="sonValue += 'test'">测试value</button> -->
    <br />
    sonNum:{{ num }}
    <button @click="num = num + 1">测试num</button>
  </div>
</template>

<script>
export default {
  name: "sonTest",
  props: {
    sonValue: {
      type: String,
    },
    num: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>