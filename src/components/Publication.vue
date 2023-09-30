<template>
  <h1>Publication</h1>

  <el-card>
    <span class="me">Lin, Lehao</span>, Haihan Duan, and Wei Cai. "Web3DP: A
    Crowdsourcing Platform for 3D Models Based on Web3 Infrastructure." In
    Proceedings of the 14th Conference on ACM Multimedia Systems, pp. 397-402.
    2023.
  </el-card>
  <br />
  <el-card>
    Duan, Haihan, Junhua Liao, <span class="me">Lehao Lin</span>, and Wei Cai.
    "Flad: a human-centered video content flaw detection system for meeting
    recordings." In Proceedings of the 32nd Workshop on Network and Operating
    Systems Support for Digital Audio and Video, pp. 43-49. 2022.
  </el-card>
  <br />
  <el-card>
    Wang, Lin, <span class="me">Lehao Lin</span>, Xiao Wu, and Rongman Hong.
    "Seshat: Decentralizing Oral History Text Analysis." In 2021 17th
    International Conference on Mobility, Sensing and Networking (MSN), pp.
    812-817. IEEE, 2021.
  </el-card>
</template>

<script setup></script>

<style scoped>
.me {
  text-decoration: underline;
}

.el-card:hover {
  animation: enlarge 0.1s linear forwards;
}
@keyframes enlarge {
  0% {
    /* transform: scale(1); */
  }
  100% {
    /* transform: scale(1.02); */
    color: #9d5b8b;
  }
}
</style>
