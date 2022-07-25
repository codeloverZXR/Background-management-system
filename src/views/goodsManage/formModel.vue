<template>
  <el-form ref="elform" :model="form" :rules="rules" label-position="left" label-width="auto">
    <el-form-item v-for="item in formItemMessage"
                  :label="item.label"
                  :prop="item.model">
      <el-input v-if="item.type === 'input'"
                v-model="form[item.model]"
                :placeholder="`请输入${item.label}`">
      </el-input>
      <el-select v-if="item.type === 'select'"
                 v-model="form[item.model]"
                 :placeholder="`请选择${item.label}`">
        <el-option v-for="item1 in item.child" :label="item1.label" :value="item1.value">
        </el-option>
      </el-select>
      <el-date-picker v-if="item.type === 'date'"
                      v-model="form[item.model]"
                      value-format="yyyy-MM-dd"
                      :placeholder="`请选择${item.label}`">
      </el-date-picker>
      <el-checkbox-group v-if="item.type === 'checkbox'" v-model="form[item.model]">
        <el-checkbox v-for="item1 in item.child"
                     :label="item1.label">
        </el-checkbox>
      </el-checkbox-group>
      <el-radio-group v-if="item.type === 'radio'" v-model="form[item.model]">
        <el-radio v-for="item1 in item.child" :label="item1.label">
        </el-radio>
      </el-radio-group>
      <el-input type="textarea" v-if="item.type === 'textarea'" v-model="form[item.model]">
      </el-input>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "formModel",
    props: {
      form: {
        type: Object,
        required: true
      },
      formItemMessage: {
        type: Array,
        required: true
      },
      rules: {
        type: Object,
        required: false
      }
    }
  }
</script>

<style scoped lang="less">

</style>