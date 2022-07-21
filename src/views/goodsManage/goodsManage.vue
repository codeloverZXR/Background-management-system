<template>
  <div id="goodsMessage">
    <el-button @click="addGoods" size="medium ">添加商品+</el-button>
    <el-dialog title="添加商品" :visible.sync="addGoodsShow" top="5vh" :center="true">
      <form-model :form="form" :formItemMessage="formItemMessage" ref="formmodel" :rules="rules"></form-model>
      <div class="options">
        <div>
          <el-button @click="addGoodsToList" type="primary">添加</el-button>
          <el-button @click="resetForm" type="primary">重置</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import formModel from "@/views/goodsManage/formModel";

  export default {
    name: "goodsManage",
    components: {
      formModel
    },
    data() {
      return {
        addGoodsShow: false,
        form: {
          name: '',
          quantity: '',
          date: '',
          location: '',
          others: [],
          remarks: ''
        },
        formItemMessage: [
          {
            label: '商品名称',
            type: 'input',
            model: 'name'
          },
          {
            label: '进货数量',
            type: 'select',
            model: 'quantity',
            child: [
              {
                label: '小于100件',
                value: '<100'
              },
              {
                label: '100 - 500件',
                value: '100 - 500'
              },
              {
                label: '500 - 1000件',
                value: '500 -1000'
              },
              {
                label: '大于1000件',
                value: '>1000'
              },
            ]
          },
          {
            label: '进货日期',
            type: 'date',
            model: 'date'
          },
          {
            label: '商品来源',
            type: 'radio',
            model: 'location',
            child: [
              {
                label: '境内'
              },
              {
                label: '境外'
              }
            ]
          },
          {
            label: '商品信息',
            type: 'checkbox',
            model: 'others',
            child: [
              {
                label: '需冷藏'
              },
              {
                label: '可退换'
              },
              {
                label: '易碎品'
              },
              {
                label: '避光存放'
              }
            ]
          },
          {
            label: '商品备注',
            type: 'textarea',
            model: 'remarks'
          }
        ],
        rules: {
          name: [
            {required: true, message: '请输入商品名称', trigger: 'blur'}
          ],
          quantity: [
            {required: true, message: '请选择进货数量', trigger: 'change'}
          ],
          date: [
            {required: true, message: '请选择进货日期', trigger: 'blur'}
          ],
          location: [
            {required: true, message: '请选择进货地址', trigger: 'change'}
          ],
          others: [],
          remarks: [
            {required: true, message: '请添加备注，若没有则写无', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      addGoods() {
        this.addGoodsShow = true
      },
      addGoodsToList() {
        this.$refs.formmodel.$refs.elform.validate((valid) => {
          if (valid) {
            console.log('提交成功')
            this.$message({
              type: 'success',
              message: '添加用户成功'
            })
            this.addGoodsShow = false
            this.form = {
              name: '',
              quantity: '',
              date: '',
              location: '',
              others: [],
              remarks: ''
            }
          } else {
            return false;
          }
        })
      },
      resetForm() {
        this.form = {
          name: '',
          quantity: '',
          date: '',
          location: '',
          others: [],
          remarks: ''
        }
      }
    }
  };
</script>

<style scoped lang="less">
  #goodsMessage {
    padding: 1%;

    .el-dialog {
      .options {
        display: flex;
        justify-content: space-around;

        div {
          display: inline-block;
        }
      }
    }
  }
</style>