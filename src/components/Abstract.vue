<template>
  <div class="abstract">
    <el-row justify="center">
      <el-avatar :size="150" :src="Avatar" />
    </el-row>
    <el-row justify="center">
      <el-text size="large" class="name">Lehao Lin</el-text></el-row
    >
    <el-row justify="center">
      <el-text size="small">Ph.D. Student</el-text></el-row
    ><el-row justify="center">
      <el-text size="default" class="bio"
        >Computer and Information Engineering</el-text
      ></el-row
    >
    <el-row justify="center">
      <el-text size="default" class="bio"
        >The Chinese University of Hong Kong, Shenzhen, China</el-text
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
      <el-icon :size="25"><Message /></el-icon
      ><el-link
        size="default"
        class="bio"
        href="mailto:lehaolin@link.cuhk.edu.cn"
        >&nbsp;&nbsp;lehaolin@link.cuhk.edu.cn</el-link
      >
    </el-row>
    <el-row>
      <el-icon :size="25"><Icon icon="academicons:google-scholar" /></el-icon
      ><el-link
        size="default"
        class="bio"
        href="https://scholar.google.com/citations?user=6R_CMZ4AAAAJ&hl=en"
        target="_blank"
        >&nbsp;&nbsp;Lehao Lin</el-link
      >
    </el-row>
    <el-row>
      <el-icon :size="25"><Icon icon="ant-design:github-filled" /></el-icon
      ><el-link
        size="default"
        class="bio"
        href="https://github.com/LehaoLin"
        target="_blank"
        >&nbsp;&nbsp;LehaoLin</el-link
      >
    </el-row>

    <br />

    <el-row justify="center">
      <el-text size="large">Research Topics</el-text></el-row
    >
    <el-row>
      <el-icon :size="25"><Icon icon="mdi:multimedia" /></el-icon
      ><el-link class="bio" :underline="false">&nbsp;&nbsp;Multimedia</el-link>
    </el-row>
    <el-row>
      <el-icon :size="25"><Icon icon="eos-icons:blockchain" /></el-icon
      ><el-link class="bio" :underline="false"
        >&nbsp;&nbsp;Blockchain/Web3</el-link
      >
    </el-row>
    <el-row>
      <el-icon :size="25"><Icon icon="grommet-icons:system" /></el-icon
      ><el-link class="bio" :underline="false"
        >&nbsp;&nbsp;Decentralized Systems</el-link
      >
    </el-row>
    <el-row>
      <el-icon :size="25"><Icon icon="eos-icons:neural-network" /></el-icon
      ><el-link class="bio" :underline="false"
        >&nbsp;&nbsp;Deep Learning</el-link
      >
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Avatar from "@/assets/avatar.jpg";
// import Github from "@/assets/github-filled.svg";
import { Icon } from "@iconify/vue";
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
}
.bio {
  white-space: nowrap;
  text-align: center;
}
.el-row {
  padding: 3px;
}
</style>
