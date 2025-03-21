<template>
  <h1>Publication</h1>

  <el-card>
    <h3>
      Details see
      <el-link
        href="https://scholar.google.com/citations?user=6R_CMZ4AAAAJ&hl=en"
        size="default"
        target="_blank"
        >Google Scholar</el-link
      >
    </h3>

    <br />
    <div>(* Equal Contribution, † Corresponding Author)</div>

    <br />
    <h3>2025</h3>
    <div>
      <el-tag type="warning" effect="dark">CCF-B</el-tag>
      [10] <u>Lehao Lin</u>, Hong Kang, Yuqi Shi, Haihan Duan, Abdulmotaleb El
      Saddik, and Wei Cai†.
      <i
        >ASimp: Automatic High-Poly 3D Mesh Simplification for Preprocessing
        Based on QoE</i
      >. IEEE International Conference on Multimedia & Expo (ICME 2025), Nantes,
      France, June 30-July 4, 2025. CCF-B.
    </div>
    <br />
    <div>
      <el-tag type="warning" effect="dark">CCF-B</el-tag>
      [9] Hao Wu, Maha Abdallah, Yuanfang Chi, <u>Lehao Lin</u>, and Wei Cai†.
      <i>Web3 Multimedia Applications: Under the Impact of Decentralization</i>.
      ACM Transactions on Multimedia Computing Communications and Applications
      (TOMM), 2025. CCF-B.
    </div>
    <br />
    <div>
      <el-tag type="danger" effect="dark">CCF-A</el-tag>
      [8] Hao Wu, <u>Lehao Lin</u>, Maha Abdallah, and Wei Cai†.
      <i>Rethinking Participatory Art under Decentralization in Web</i>. In The
      2025 ACM CHI Conference on Human Factors in Computing Systems Late
      Breaking Work (CHI 2025 LBW), Yokohama, Japan, April 26-May 1, 2025.
      CCF-A.
    </div>
    <br />
    <div>
      <el-tag type="danger" effect="dark">CCF-A</el-tag>
      [7] Ke Wang*, <u>Lehao Lin</u>*, Maha Abdallah, Wei Cai†.
      <i
        >Where is the Boundary? Understanding How People Recognize and Evaluate
        Generative AI-extended Videos</i
      >. In the 2025 ACM CHI Conference on Human Factors in Computing Systems
      (CHI 2025), Yokohama, Japan, April 26-May 1, 2025. CCF-A.
    </div>

    <br />
    <h3>2024</h3>
    <div>
      <el-tag type="danger" effect="dark">CCF-A</el-tag>
      [6] <u>Lehao Lin</u>*, Hong Kang*, Xinyao Sun, Wei Cai†.
      <i
        >SemNFT: A Semantically Enhanced Decentralized Middleware for Digital
        Asset Immortality</i
      >. In the 32nd ACM International Conference on Multimedia (MM 2024),
      Melbourne, Australia, October 28-November 1, 2024. CCF-A.
    </div>
    <br />
    <div>
      <el-tag type="danger" effect="dark">CCF-A</el-tag>
      [5] Hong Kang, Minghao Li, <u>Lehao Lin</u>, Sizheng Fan, Wei Cai†.
      <i
        >Bridging Incentives and Dependencies: An Iterative Combinatorial
        Auction Approach to Dependency-Aware Offloading in Mobile Edge
        Computing</i
      >. IEEE Transactions on Mobile Computing (TMC), 2024. CCF-A.
    </div>
    <br />
    <div>
      <el-tag type="warning" effect="dark">CCF-B</el-tag>
      [4] Haihan Duan, Junhua Liao,
      <u>Lehao Lin</u>, Abdulumotaleb El Saddik, Wei Cai†.
      <i
        >Meetor: A Human-Centered Automatic Video Editing System for Meeting
        Recordings</i
      >. ACM Transactions on Multimedia Computing, Communications, and
      Applications (TOMM), 2024. CCF-B.
    </div>

    <br />
    <h3>2023</h3>
    <div>
      <el-tag type="info" effect="dark">Non-CCF</el-tag>
      [3] <u>Lehao Lin</u>, Haihan Duan, Wei Cai†.
      <i
        >Web3DP: A Crowdsourcing Platform for 3D models Based on Web3
        Infrastructure</i
      >. In the 14th Conference on ACM Multimedia Systems Open Dataset &
      Software Track (MMSys 2023 ODS), Vancouver, BC, Canada, June 7-10, 2023.
    </div>

    <br />
    <h3>2022</h3>
    <div>
      <el-tag type="warning" effect="dark">CCF-B</el-tag>
      [2] Haihan Duan, Junhua Liao,
      <u>Lehao Lin</u>, Wei Cai†.
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
      <el-tag type="success" effect="dark">CCF-C</el-tag>
      [1] Lin Wang, <u>Lehao Lin</u>, Xiao Wu, Rongman Hong†.
      <i>Seshat: Decentralizing Oral History Text Analysis</i>. In the 17th
      International Conference on Mobility, Sensing and Networking (MSN 2021),
      Exeter, United Kingdom, December 13-15, 2021. CCF-C.
    </div>
  </el-card>
</template>

<script setup>
import { ref } from "vue";

const bibs = ref([
  "Haihan Duan, Junhua Liao, Lehao Lin, Wei Cai. FLAD: A Human-centered Video Content Flaw Detection System for Meeting Recordings. In the 32nd Workshop on Network and Operating System Support for Digital Audio and Video (NOSSDAV 2022), Athlone, Ireland, June 14-17, 2022. CCF-B.",
  "Lin Wang, Lehao Lin, Xiao Wu, Rongman Hong. Seshat: Decentralizing Oral History Text Analysis. In the 17th International Conference on Mobility, Sensing and Networking (MSN 2021), Exeter, United Kingdom, December 13-15, 2021. CCF-C.",
]);

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
