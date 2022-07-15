<template>
  <div id="common-table">
    <el-table :data="tableDataList" style="width: 90%" :stripe="true">
      <el-table-column
        show-overflow-tooltip
        v-for="(item, index) in tableTagList"
        :key="index"
        :label="item.label"
        :width="item.width ? item.width : 200"
        header-align="center"
        align="center"
      >
        <template slot-scope="scope">
          <span>{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        label="操作"
        header-align="center"
        align="center"
      >
        <template slot-scope="scope">
          <el-button size="mini" @click="editUser(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="delUser(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="pageConfig.total"
      :current-page.sync="localPageConfig.page"
      @current-change="changePage"
      :page-size="20"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "commonTable",
  data() {
    return {};
  },
  props: {
    //用户列表
    tableDataList: {
      type: Array,
      required: true,
    },
    //标签列表
    tableTagList: {
      type: Array,
      required: true,
    },
    //分页器配置选项
    pageConfig: {
      type: Object,
      required: true,
    },
  },
  methods: {
    //编辑用户信息
    editUser(row) {
      this.$emit("editUser", row);
    },
    //删除用户
    delUser(row) {
      this.$emit("delUser", row);
    },
    //换页
    changePage() {
      this.$emit("changePage");
    },
  },
  computed: {
    localPageConfig: function () {
      return this.pageConfig;
    },
  },
};
</script>

<style scoped lang='less'>
#common-table {
  .el-table {
    margin: 0 auto;
  }
  .el-pagination {
    position: absolute;
    right: 5%;
  }
}
</style>