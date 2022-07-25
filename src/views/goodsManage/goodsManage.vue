<template>
  <div id="goodsMessage">
    <el-button @click="addGoods" size="medium ">添加商品+</el-button>
    <el-dialog :title="title" :visible.sync="addGoodsShow" top="5vh" :center="true" @closed="closed">
      <form-model :form="form" :formItemMessage="formItemMessage" ref="formmodel" :rules="rules"></form-model>
      <div class="options">
        <div>
          <el-button @click="addGoodsToList" type="primary">{{title ==='添加商品' ? '添加':'提交'}}</el-button>
          <el-button @click="resetForm" type="primary">重置</el-button>
        </div>
      </div>
    </el-dialog>
    <div class="goodsList">
      <el-row>
        <el-col :span="4" v-for="item in goodsMessage">{{item}}</el-col>
      </el-row>
      <draggable
              v-model="goodsList"
              element="el-row"
              :options="options"
              @update="datadragEnd"
              delay="1"
      >
        <el-row v-for="(item,index) in goodsList" :key="index">
          <el-col :span="4">{{item.name}}</el-col>
          <el-col :span="4">{{item.quantity}}</el-col>
          <el-col :span="4">{{item.date}}</el-col>
          <el-col :span="4">{{item.location}}</el-col>
          <el-col :span="4">
            <span v-for="item1 in item.others">{{item1}} </span>
          </el-col>
          <el-col :span="4" style="display: flex;justify-content: space-evenly; align-items: center">
          <span style="
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;">
            {{item.remarks}}
          </span>
            <span>
            <i class="el-icon-edit" style="color: #00ccff; margin-right: 5px" @click="editGood(item,index)"></i>
            <i class="el-icon-delete" style="color:#d24d57" @click="delGood(index)"></i>
          </span>
          </el-col>
        </el-row>
      </draggable>
    </div>
  </div>
</template>

<script>
  import formModel from "@/views/goodsManage/formModel";
  import draggable from 'vuedraggable'

  export default {
    name: "goodsManage",
    components: {
      formModel,
      draggable
    },
    data() {
      return {
        addGoodsShow: false,
        title: '添加商品',
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
        },
        goodsMessage: {
          name: '商品名称',
          quantity: '进货数量',
          date: '进货时间',
          location: '进货地点',
          others: '其它',
          remarks: '商品备注'
        },
        goodsList: this.$store.state.goods.goodsList,
        options: {
          dragClass: 'dragClass',
          ghostClass: 'ghostClass',
          animation: 500
        }
      }
    },
    // computed: {
    //   gooodsList: function () {
    //     return this.$store.state.goods.goodsList
    //   }
    // },
    methods: {
      addGoods() {
        this.addGoodsShow = true
      },
      addGoodsToList() {
        this.$refs.formmodel.$refs.elform.validate((valid) => {
          if (valid) {
            if (this.title === '添加商品') {
              this.$store.dispatch('addGood', this.form)
              this.$message({
                type: 'success',
                message: '添加商品成功'
              })
            } else if (this.title === '编辑商品') {
              this.$store.dispatch('editGood', this.form)
              // this.$store.commit('EDITGOOD', this.form)
              this.$message({
                type: 'success',
                message: '修改商品信息成功'
              })
            }
            this.addGoodsShow = false
            this.form = {
              name: '',
              quantity: '',
              date: '',
              location: '',
              others: [],
              remarks: ''
            }
            this.title = '添加商品'

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
      },
      editGood(item, index) {
        this.addGoodsShow = true
        this.title = '编辑商品'
        this.form = item
      },
      delGood(index) {
        this.$confirm("是否要删除该商品信息?", "警告", {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('delGood', index)
          this.$message({
            type: 'success',
            message: '删除商品成功'
          })
        })
      },
      closed() {
        this.title = '添加商品'
        this.form = {
          name: '',
          quantity: '',
          date: '',
          location: '',
          others: [],
          remarks: ''
        }
      },
      datadragEnd(evt) {
        evt.preventDefault();
      }
    },
    mounted() {
      //为了防止火狐浏览器拖拽的时候以新标签打开，此代码真实有效
      document.body.ondrop = function (event) {
        event.preventDefault();
        event.stopPropagation();
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

    .goodsList {
      margin-top: 1%;
    }

    .el-row {
      .el-col {
        border: 1px solid #ddd;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .dragClass {
    border: 1px solid #409eff;
  }

  .ghostClass {
    border: 2px solid #d24d57;
  }
</style>