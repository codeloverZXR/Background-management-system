<template>
  <el-form ref="form" :model="localForm" :inline="inline">
    <el-form-item
      v-for="item in formLabel"
      :key="item.label"
      :label="item.label"
    >
      <el-input
        v-if="item.type == 'input'"
        :placeholder="`请输入${item.label}`"
        v-model="localForm[item.model]"
      >
      </el-input>
      <el-switch v-if="item.type == 'switch'" v-model="localForm[item.model]">
      </el-switch>
      <el-date-picker
        v-if="item.type == 'date'"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="请选择日期"
        v-model="value1"
      >
      </el-date-picker>
      <el-select
        v-if="item.type == 'select'"
        :placeholder="`请选择${item.label}`"
        v-model="localForm[item.model]"
      >
        <el-option
          v-for="opt in item.options"
          :key="opt.value"
          :label="opt.label"
          :value="opt.value"
        ></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "commonForm",
  props: {
    formLabel: {
      type: Array,
      required: true,
    },
    form: {
      type: Object,
      required: true,
    },
    inline: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      value1:''
      // localForm: this.form,
    };
  },
  computed: {
    //计算属性中间值避免报错
    localForm: function () {
      return this.form;
    },
  },
};
</script>

<style scoped>
</style>