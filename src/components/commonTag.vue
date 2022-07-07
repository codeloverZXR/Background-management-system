<template>
  <div>
    <el-tag
      type="info"
      v-for="(item, index) in tabsList"
      :key="index"
      :closable="item.name != 'home'"
      :effect="$route.name == item.name ? `dark` : `plain`"
      @close="removeTag(item, index)"
      @click="changePage(item)"
      >{{ item.label }}</el-tag
    >
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "commonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tabsList: (state) => state.lab.tabsList,
    }),
  },
  methods: {
    removeTag(item, index) {
      //跳转页面，移动tag标签焦点
      if (this.tabsList.length - 1 == index) {
        this.$router.push({ name: this.tabsList[index - 1].name });
      } else {
        this.$router.push({ name: this.tabsList[index + 1].name });
      }
      //删除当前tag标签
      this.$store.commit("REMOVETAG", item);
    },
    changePage(item) {
      this.$router.push({ name: item.name });
    },
  },
};
</script>

<style scoped lang='less'>
.el-tag {
  margin-left: 1%;
  margin-top: 1%;
  cursor: pointer;
}
</style>