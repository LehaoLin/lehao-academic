<template>
  <h1>Publication</h1>

  <el-card>
    <h3>
      Details see
      <a
        href="https://scholar.google.com/citations?user=6R_CMZ4AAAAJ&hl=en"
        size="large"
        target="_blank"
        style="color: #008899"
        >Google Scholar</a
      >
    </h3>

    <div id="main" :style="{ width: '100%', height: '25vh' }"></div>

    <br />
    <div>(* Equal Contribution, † Corresponding Author)</div>

    <!-- <br />
    <h3>2025</h3>
    <div>
      <CCFB />
      [10] <b><u>Lehao Lin</u></b
      >, Hong Kang, Yuqi Shi, Haihan Duan, Abdulmotaleb El Saddik, and Wei Cai†.

      <i style="color: #0095d9"
        >ASimp: Automatic High-Poly 3D Mesh Simplification for Preprocessing
        Based on QoE</i
      >. IEEE International Conference on Multimedia & Expo (ICME 2025), Nantes,
      France, June 30-July 4, 2025. CCF-B.
    </div>
    <br />
    <div>
      <CCFB />
      [9] Hao Wu, Maha Abdallah, Yuanfang Chi, <b><u>Lehao Lin</u></b
      >, and Wei Cai†.
      <i>Web3 Multimedia Applications: Under the Impact of Decentralization</i>.
      ACM Transactions on Multimedia Computing Communications and Applications
      (TOMM), 2025. CCF-B.
    </div>
    <br />
    <div>
      <CCFA />
      [8] Hao Wu, <b><u>Lehao Lin</u></b
      >, Maha Abdallah, and Wei Cai†.
      <i>Rethinking Participatory Art under Decentralization in Web</i>. In The
      2025 ACM CHI Conference on Human Factors in Computing Systems Late
      Breaking Work (CHI 2025 LBW), Yokohama, Japan, April 26-May 1, 2025.
      CCF-A.
    </div>
    <br />
    <div>
      <CCFA />
      [7] Ke Wang*, <b><u>Lehao Lin</u></b
      >*, Maha Abdallah, Wei Cai†.
      <i
        >Where is the Boundary? Understanding How People Recognize and Evaluate
        Generative AI-extended Videos</i
      >. In the 2025 ACM CHI Conference on Human Factors in Computing Systems
      (CHI 2025), Yokohama, Japan, April 26-May 1, 2025. CCF-A.
    </div>

    <br />
    <h3>2024</h3>
    <div>
      <CCFA />
      [6] <b><u>Lehao Lin</u></b
      >*, Hong Kang*, Xinyao Sun, Wei Cai†.
      <i
        >SemNFT: A Semantically Enhanced Decentralized Middleware for Digital
        Asset Immortality</i
      >. In the 32nd ACM International Conference on Multimedia (MM 2024),
      Melbourne, Australia, October 28-November 1, 2024. CCF-A.
    </div>
    <br />
    <div>
      <CCFA />
      [5] Hong Kang, Minghao Li, <b><u>Lehao Lin</u></b
      >, Sizheng Fan, Wei Cai†.
      <i
        >Bridging Incentives and Dependencies: An Iterative Combinatorial
        Auction Approach to Dependency-Aware Offloading in Mobile Edge
        Computing</i
      >. IEEE Transactions on Mobile Computing (TMC), 2024. CCF-A.
    </div>
    <br />
    <div>
      <CCFB />
      [4] Haihan Duan, Junhua Liao,
      <b><u>Lehao Lin</u></b
      >, Abdulumotaleb El Saddik, Wei Cai†.
      <i
        >Meetor: A Human-Centered Automatic Video Editing System for Meeting
        Recordings</i
      >. ACM Transactions on Multimedia Computing, Communications, and
      Applications (TOMM), 2024. CCF-B.
    </div>

    <br />
    <h3>2023</h3>
    <div>
      <NONCCF />
      [3] <b><u>Lehao Lin</u></b
      >, Haihan Duan, Wei Cai†.
      <i
        >Web3DP: A Crowdsourcing Platform for 3D models Based on Web3
        Infrastructure</i
      >. In the 14th Conference on ACM Multimedia Systems Open Dataset &
      Software Track (MMSys 2023 ODS), Vancouver, BC, Canada, June 7-10, 2023.
    </div>

    <br />
    <h3>2022</h3>
    <div>
      <CCFB />
      [2] Haihan Duan, Junhua Liao,
      <b><u>Lehao Lin</u></b
      >, Wei Cai†.
      <i
        >FLAD: A Human-centered Video Content Flaw Detection System for Meeting
        Recordings</i
      >. In the 32nd Workshop on Network and Operating System Support for
      Digital Audio and Video (NOSSDAV 2022), Athlone, Ireland, June 14-17,
      2022. CCF-B.
    </div>

    <br />
    <h3>2021</h3>
    <div>
      <CCFC />
      [1] Lin Wang, <b><u>Lehao Lin</u></b
      >, Xiao Wu, Rongman Hong†.
      <i>Seshat: Decentralizing Oral History Text Analysis</i>. In the 17th
      International Conference on Mobility, Sensing and Networking (MSN 2021),
      Exeter, United Kingdom, December 13-15, 2021. CCF-C.
    </div> -->

    <!-- <div v-if="extract_info(pubs).ccfrank === 'CCF-C'">
      <CCFC /> <span v-html="extract_info(pubs).res"></span>
    </div> -->

    <!-- <h3>2021</h3>
    <div>
      <CCFC />
      [1] Lin Wang, <b><u>Lehao Lin</u></b
      >, Xiao Wu, Rongman Hong†.
      <i>Seshat: Decentralizing Oral History Text Analysis</i>. In the 17th
      International Conference on Mobility, Sensing and Networking (MSN 2021),
      Exeter, United Kingdom, December 13-15, 2021. CCF-C.
    </div> -->

    <br />
    <div v-for="year in Object.keys(final_pub).reverse()">
      <h3>{{ year }}</h3>
      <div v-for="pub in final_pub[year]">
        <NONCCF v-if="pub.ccfrank === 'Non-CCF'" />
        <CCFA v-if="pub.ccfrank === 'CCF-A'" />
        <CCFB v-if="pub.ccfrank === 'CCF-B'" />
        <CCFC v-if="pub.ccfrank === 'CCF-C'" />
        <span v-html="pub.res"></span>&nbsp;<a
          v-if="pub.link !== ''"
          :href="pub.link"
          style="color: #0095d9"
          target="_blank"
          >[link]</a
        >
        <br />
        <br />
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CCFA from "@/components/CCFs/CCFA.vue";
import CCFB from "@/components/CCFs/CCFB.vue";
import CCFC from "@/components/CCFs/CCFC.vue";
import NONCCF from "@/components/CCFs/NONCCF.vue";

import pubs from "@/components/pubs.txt?raw";

import * as echarts from "echarts";

let echart = echarts;

let pub_list_ref = ref([]);
let final_pub = ref({});

onMounted(() => {
  // console.log(pubs);
  let pub_list = pubs.split("\n");
  // console.log(pub_list);
  // pub_list_ref.value = pub_list.map((i, index) =>
  //   extract_info(i, index, pub_list.length)
  // );
  let index = 0;
  for (let [row_index, pub] of pub_list.entries()) {
    if (pub.indexOf("link:") !== 0) {
      console.log(row_index);
      pub_list_ref.value.push(
        extract_info(pub, index, pub_list.length, pub_list[row_index + 1])
      );
      index += 1;
    }
  }

  console.log(pub_list_ref.value);

  for (let pub of pub_list_ref.value) {
    if (!Object.keys(final_pub.value).includes(pub.year)) {
      final_pub.value[pub.year] = [];
    }
    final_pub.value[pub.year].push(pub);
  }
  console.log("final", final_pub.value);
  // extract_info(pubs);

  var chartDom = document.getElementById("main");
  var myChart = echarts.init(chartDom, "dark");
  let option = null;
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: Object.keys(final_pub.value),
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Non-CCF",
        type: "bar",
        stack: "Ad",
        emphasis: {
          focus: "series",
        },
        data: Object.values(final_pub.value).map((i) => {
          console.log(i, typeof i);
          return i.filter((u) => u.ccfrank === "Non-CCF").length;
        }),
        color: "#909399",
      },
      {
        name: "CCF-C",
        type: "bar",
        stack: "Ad",
        emphasis: {
          focus: "series",
        },
        data: Object.values(final_pub.value).map((i) => {
          console.log(i, typeof i);
          return i.filter((u) => u.ccfrank === "CCF-C").length;
        }),
        color: "#66c23a",
      },
      {
        name: "CCF-B",
        type: "bar",
        stack: "Ad",
        emphasis: {
          focus: "series",
        },
        data: Object.values(final_pub.value).map((i) => {
          console.log(i, typeof i);
          return i.filter((u) => u.ccfrank === "CCF-B").length;
        }),
        color: "#e6a23c",
      },
      {
        name: "CCF-A",
        type: "bar",
        stack: "Ad",
        emphasis: {
          focus: "series",
        },
        data: Object.values(final_pub.value).map((i) => {
          console.log(i, typeof i);
          return i.filter((u) => u.ccfrank === "CCF-A").length;
        }),
        color: "#f56d6c",
      },
    ],
  };
  option && myChart.setOption(option);
  window.onresize = function () {
    //自适应大小
    myChart.resize();
  };
});

function addAroundSubstring(
  originalString,
  substringToFind,
  leftadd,
  rightadd
) {
  const index = originalString.indexOf(substringToFind);

  if (index === -1) {
    return originalString; // Substring not found
  }

  const left = originalString.substring(0, index);
  const middle = leftadd + substringToFind + rightadd;
  const right = originalString.substring(index + substringToFind.length);

  return left + middle + right;
}

const extract_info = (paper_str, index, length, link) => {
  link = link.replaceAll("link: ", "").replaceAll(" ", "");
  if (link === "") {
    link = "";
  }
  index = length / 2 - index;
  let res = "";
  res = addAroundSubstring(paper_str, `Lehao Lin`, `<b><u>`, `</u></b>`);
  res = addAroundSubstring(
    res,
    paper_str.split(".")[1],
    `<i style="color: #0095d9">`,
    `</i>`
  );
  res = ` [${index}] ` + res;
  let year = res.split(".").at(-3).split(",").at(-1).replaceAll(" ", "");
  // console.log(year);

  let ccfrank = "";
  // if (
  //   !res.includes("CCF-A") &
  //   !res.includes("CCF-B") &
  //   !res.includes("CCF-C")
  // ) {
  //   ccfrank = "Non-CCF";
  // }
  ccfrank = res.split(".").at(-2).replaceAll(" ", "");
  // console.log(ccfrank);

  return { res, year, ccfrank, link };
};

const add_style = (input) => {};
</script>

<style scoped>
.me {
  text-decoration: underline;
}
/* 
.el-card:hover {
  animation: enlarge 0.1s linear forwards;
}
@keyframes enlarge {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.02);
    color: #9d5b8b;
  }
} */
</style>
