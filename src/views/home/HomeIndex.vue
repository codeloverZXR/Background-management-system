<template>
  <div>
    <el-row>
      <el-col :span="8" class="userMsg">
        <el-card>
          <div class="userData">
            <img :src="imgUrl" alt="" />
            <div class="userName">
              <p>张欣睿</p>
              <p>超级管理员</p>
            </div>
          </div>
          <div class="loginMsg">
            <p><span>上次登录时间:2022.7.2</span></p>
            <p><span>上次登录地点:济南</span></p>
          </div>
        </el-card>
      </el-col>
      <el-col
        :span="5"
        class="salesMsg"
        v-for="(item, index) in getSalesList"
        :key="index"
      >
        <el-card
          shadow="hover"
          :body-style="{
            padding: 0,
          }"
        >
          <div class="icondiv">
            <i
              :class="`el-icon-${item.icon}`"
              class="icon"
              :style="{ background: `${item.color}` }"
            ></i>
            <div>
              <p>{{ item.Revenue }}</p>
              <p>{{ item.lable }}</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" class="goodsList">
        <el-card>
          <div>
            <el-table :data="goodsList" :height="300">
              <el-table-column prop="name" label="商品名" width="100">
              </el-table-column>
              <el-table-column
                prop="toDayNumber"
                label="当日购买量"
                width="100"
              >
              </el-table-column>
              <el-table-column
                prop="monthNumber"
                label="当月购买量"
                width="100"
              >
              </el-table-column>
              <el-table-column prop="allNumber" label="总购买量" width="100">
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="13" class="chart">
        <el-card :body-style="{ padding: 0 }">
          <el-row>
            <el-col class="lineChart">
              <div style="height: 280px; width: 100%" ref="lineChart"></div>
            </el-col>
            <el-col :span="12" class="histogram">
              近一周用户变动
              <div style="height: 220px; width: 100%" ref="histogram"></div>
            </el-col>
            <el-col :span="12" class="pieChart">
              总销量
              <div style="height: 220px; width: 100%" ref="pieChart"></div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getGoodsList, getSalesList } from "@/api/requestData.js";
import * as echarts from "echarts";
export default {
  name: "HomeIndex",
  data() {
    return {
      imgUrl: require("@/assets/photo.jpg"),
      chartsList: [],
      goodsList: [],
      getSalesList: [],
      weeklySales: [],
    };
  },
  mounted() {
    getGoodsList().then((res) => {
      this.chartsList = res.data[0].chartsList;
      this.goodsList = res.data[1].goodsList;
      this.weeklySales = res.data[2].weeklySales;
    });
    getSalesList().then((res) => {
      this.getSalesList = res.data;
    });
  },
  watch: {
    //折线图
    chartsList: function () {
      const lineChart = echarts.init(this.$refs.lineChart);
      let series = [];
      for (let index in this.chartsList.goodsName) {
        series.push({
          name: this.chartsList.goodsName[index],
          data: this.chartsList.volume[index],
          type: "line",
        });
      }
      lineChart.setOption({
        title: {
          text: "近日销量",
        },
        legend: {
          data: series,
        },
        tooltip: {},
        xAxis: {
          type: "category",
          data: this.chartsList.dateList,
        },
        yAxis: {
          type: "value",
        },
        series,
      });
    },
    //柱状图
    weeklySales: function () {
      const histogram = echarts.init(this.$refs.histogram);
      const series = [
        { name: "新增用户", type: "bar", data: [] },
        { name: "活跃用户", type: "bar", data: [] },
      ];
      const xAxisData = [];
      for (let index in this.weeklySales) {
        xAxisData.push(this.weeklySales[index].day);
        series[0].data.push(this.weeklySales[index].newUser);
        series[1].data.push(this.weeklySales[index].activeUser);
      }
      histogram.setOption({
        tooltip: {},
        legend: {
          data: series,
        },
        xAxis: {
          type: "category",
          data: xAxisData,
        },
        yAxis: {
          type: "value",
        },
        series,
      });
    },
    //饼图
    goodsList: function () {
      const pieChart = echarts.init(this.$refs.pieChart);
      const series = [{ type: "pie", data: [], radius: "50%" }];
      for (let index in this.goodsList) {
        series[0].data.push({
          value: this.goodsList[index].allNumber,
          name: this.goodsList[index].name,
        });
      }
      pieChart.setOption({
        series,
      });
    },
  },
};
</script>

<style scoped lang="less">
.userMsg {
  margin-top: 1%;
  margin-left: 1%;

  .userData {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .userName {
      margin-left: 15%;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
  .loginMsg {
    margin-top: 20px;
    border-top: 2px solid #dcdfe6;
    line-height: 30px;
  }
}
.salesMsg {
  margin-left: 1%;
  margin-top: 1%;
  .icondiv {
    display: flex;
    .icon {
      line-height: 60px;
      width: 60px;
      font-size: 30px;
      color: #fff;
      text-align: center;
      border-radius: 50%;
    }
    div {
      margin-left: 12%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
.goodsList {
  margin-top: 1%;
  margin-left: 1%;
}
.chart {
  margin-top: -7%;
  margin-left: 1%;
  .histogram {
    text-align: center;
    font-size: 12px;
    margin-top: 1%;
    color: #d24d57;
  }
  .pieChart {
    text-align: center;
    font-size: 12px;
    margin-top: 1%;
    color: #d24d57;
  }
}
</style>