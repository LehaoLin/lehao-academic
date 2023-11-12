<template>
  <div class="abstract">
    <el-row justify="center">
      <el-avatar :size="150" :src="AvatarGif" v-if="!recent" />
      <el-avatar :size="150" :src="Recent" v-if="recent" />
    </el-row>

    <el-row justify="center">
      <el-switch
        v-model="recent"
        size="small"
        active-text="Recent"
        inactive-text="Childhood"
      />
    </el-row>
    <el-row justify="center">
      <el-text size="large" class="name" id="typing-name"></el-text
    ></el-row>

    <el-row justify="center">
      <el-text size="small" id="typing">Ph.D. Student</el-text></el-row
    ><el-row justify="center">
      <el-text size="default" class="bio"
        >Computer and Information Engineering</el-text
      ></el-row
    >
    <el-row justify="center">
      <el-link
        size="default"
        class="bio"
        href="https://sse.cuhk.edu.cn/"
        target="_blank"
        >School of Science and Engineering</el-link
      ></el-row
    >
    <el-row justify="center">
      <el-link
        size="default"
        class="bio"
        href="https://cuhk.edu.cn/"
        target="_blank"
        >The Chinese University of Hong Kong, Shenzhen, China</el-link
      ></el-row
    >
    <el-row justify="center">
      <el-text size="default" class="bio"
        >Supervisor:
        <el-link
          href="https://mypage.cuhk.edu.cn/academics/caiwei/index.html"
          target="_blank"
          >Prof. Wei Cai</el-link
        ></el-text
      ></el-row
    >
    <el-row justify="center">
      <el-text size="default" class="bio"
        >Affiliated Lab:
        <el-link href="https://hcslab.cuhk.edu.cn/" target="_blank"
          >Human-Crypto Society Laboratory</el-link
        ></el-text
      ></el-row
    >
    <br />

    <el-row justify="center"> <el-text size="large">Links</el-text></el-row>
    <el-row>
      <el-icon :size="25"><Message /></el-icon>&nbsp;&nbsp;<el-link
        size="default"
        class="bio"
        href="mailto:lehaolin@link.cuhk.edu.cn"
        >lehaolin@link.cuhk.edu.cn</el-link
      >
    </el-row>
    <el-row>
      <el-icon :size="25"><Icon icon="academicons:google-scholar" /></el-icon
      >&nbsp;&nbsp;<el-link
        size="default"
        class="bio"
        href="https://scholar.google.com/citations?user=6R_CMZ4AAAAJ&hl=en"
        target="_blank"
        >Lehao Lin</el-link
      >
    </el-row>
    <el-row>
      <el-icon :size="25"><Icon icon="ant-design:github-filled" /></el-icon
      >&nbsp;&nbsp;<el-link
        size="default"
        class="bio"
        href="https://github.com/LehaoLin"
        target="_blank"
        >LehaoLin</el-link
      >
    </el-row>

    <br />

    <el-row justify="center">
      <el-text size="large">Research Topics</el-text></el-row
    >
    <el-row class="rotate">
      <el-icon :size="25"><Icon icon="mdi:multimedia" /></el-icon
      ><el-link class="bio" :underline="false">&nbsp;&nbsp;Multimedia</el-link>
    </el-row>
    <el-row class="rotate">
      <el-icon :size="25"><Icon icon="eos-icons:blockchain" /></el-icon
      ><el-link class="bio" :underline="false"
        >&nbsp;&nbsp;Blockchain/Web3</el-link
      >
    </el-row>
    <el-row class="rotate">
      <el-icon :size="25"><Icon icon="grommet-icons:system" /></el-icon
      ><el-link class="bio" :underline="false"
        >&nbsp;&nbsp;Decentralized Systems</el-link
      >
    </el-row>
    <el-row class="rotate">
      <el-icon :size="25"><Icon icon="eos-icons:neural-network" /></el-icon
      ><el-link class="bio" :underline="false"
        >&nbsp;&nbsp;Deep Learning</el-link
      >
    </el-row>

    <br />
    <el-row justify="center">
      <el-text size="large">Webs for self-use</el-text></el-row
    >
    <el-row justify="center">
      <el-col :span="8"
        ><el-link class="bio" href="https://ccfddl.github.io/" target="_blank"
          >CCF-DDLs</el-link
        ></el-col
      ><el-col :span="8"
        ><el-link
          class="bio"
          href="https://www.ccf.org.cn/Academic_Evaluation/By_category/"
          target="_blank"
          >CCF-Ranks</el-link
        ></el-col
      >
      <el-col :span="8"
        ><el-link class="bio" href="https://www.lgurank.com" target="_blank"
          >LGURANK</el-link
        ></el-col
      >
    </el-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Recent from "@/assets/recent.jpg";
// import Github from "@/assets/github-filled.svg";
import { Icon } from "@iconify/vue";

import AvatarGif from "@/assets/avatar_animation.gif";

import Typed from "typed.js";

const recent = ref(false);

onMounted(() => {
  //   new Typed("#typing", {
  //     strings: ["Ph.D. Student", "Rap with paper and code"],
  //     typeSpeed: 100,
  //     backSpeed: 50,
  //     loop: true,
  //     smartBackspace: true,
  //   });
  new Typed("#typing-name", {
    strings: ["Lehao Lin", "林乐昊"],
    typeSpeed: 100,
    startDelay: 50,
    backSpeed: 50,
    loop: true,
  });
});
</script>

<style scoped>
.abstract {
  width: 50%; /* Adjust the width as needed */
  margin: 0 auto; /* This centers the div horizontally */
  text-align: center;
  /* background-color: #f0f0f0; Optional: Add a background color for visualization */
  /* padding: 20px; */
  /* height: 100%; */
}

.name {
  font-size: 20px;
  color: white;
  height: 30px;
}
.bio {
  white-space: nowrap;
  text-align: center;
}
.el-row {
  padding: 3px;
}
.el-row {
  width: 100%;
  align-items: center; /* Vertically center items */
  white-space: nowrap; /* Prevent text from wrapping */
}

.el-avatar:hover {
  animation: rotate 0.1s linear infinite;
}

.rotate:hover {
  animation: rotate 0.1s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(1);
    /* transform-origin: 70% 100%; */
  }

  25% {
    transform: rotate(5deg) scale(1);
    /* transform-origin: 70% 100%; */
  }

  75% {
    transform: rotate(-5deg) scale(1);
    /* transform-origin: 70% 100%; */
  }

  100% {
    transform: rotate(0deg) scale(1);
    /* transform-origin: 70% 100%; */
  }
}
</style>
