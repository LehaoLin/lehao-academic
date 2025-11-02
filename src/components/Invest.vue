<template>
  <h1>
    💰 Investment
    <span style="color: gray; font-size: 20px"
      >(Currently "A-Share Market" only)</span
    >
  </h1>

  <el-card>
    <h4 style="margin-top: 0vh; font-style: italic">
      Starting from October 1, 2025, recording the investment returns of my
      portion in the Chinese A-share market, with irregular updates.
      <br />
      <!-- 从2025年10月1日起记录我在中国A股市场部分的投资收益情况，不定期更新。 -->
    </h4>
    <h4 style="color: gray; font-style: italic">
      A person who makes no investments hates the world; a person who shares no
      investments is miserly and selfish; a person who studies computer science
      but doesn't engage in quantitative investing doesn't truly know how to
      program. --Someone
      <!-- how to program. --Someone. -->
      <br />
      <!-- 不投资的人厌恶世界，不分享任何投资的人吝啬自私，学计算机但不做量化投资的人其实不会编程。——某 -->
    </h4>
    <div id="main1" :style="{ width: '100%', height: '25vh' }"></div>
  </el-card>
</template>
<script setup>
import { ref, onMounted } from "vue";
import invests from "@/components/invests.txt?raw";
import * as echarts from "echarts";
let echart = echarts;

function accumulateAndFillDates(data) {
  const dates = Object.keys(data).sort();
  if (dates.length === 0) return {};

  const startDate = new Date(dates[0]);
  const endDate = new Date(dates[dates.length - 1]);

  const result = {};
  let currentDate = new Date(startDate);
  let lastValue = 0; // 初始累积值为0

  // 遍历所有日期（包括缺失的日期）
  while (currentDate <= endDate) {
    const dateStr = currentDate.toISOString().split("T")[0];
    const dayOfWeek = currentDate.getDay();

    // 跳过周末（周六=6, 周日=0）
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      if (data.hasOwnProperty(dateStr)) {
        // 如果该日期有数据，进行累积计算
        lastValue += parseFloat(data[dateStr]);
        result[dateStr] = lastValue.toFixed(2);
      } else {
        // 如果该日期没有数据，使用上一个日期的累积值
        result[dateStr] = lastValue.toFixed(2);
      }
    }

    // 移动到下一天
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return result;
}

onMounted(() => {
  let invests_list = invests.split("\n");
  let invests_dict = {};
  for (let i of invests_list) {
    if (i == "") {
      continue;
    }
    invests_dict[i.split(",")[0]] = parseFloat(i.split(",")[1]);
  }
  invests_dict = accumulateAndFillDates(invests_dict);
  console.log(accumulateAndFillDates(invests_dict));
  var chartDom = document.getElementById("main1");
  var myChart = echarts.init(chartDom, "dark");
  let option = null;
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // type: "shadow",
        formatter: "{value}%", // 直接在数值后加 %
        type: "cross",
      },
      formatter: function (params) {
        let result = params[0].name + "<br/>";
        params.forEach(function (item) {
          // 假设原始数据是小数，要展示为百分比
          result += item.marker + item.value + "%" + "<br/>";
        });
        return result;
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: Object.keys(invests_dict),
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: function (value) {
          return value.toFixed(2) + "%"; // 0.1 => 10.0%
        },
      },
    },
    // colorBy: "data",
    color: ["#00ba38", "#d71345"], // 第一个颜色用于负值，第二个用于正值
    itemStyle: {
      color: function (params) {
        return params.value >= 0 ? "#d71345" : "#00ba38";
      },
    },
    series: [
      {
        data: Object.values(invests_dict),
        type: "line",
      },
    ],
  };
  option && myChart.setOption(option);
  window.onresize = function () {
    //自适应大小
    myChart.resize();
  };
});
</script>
