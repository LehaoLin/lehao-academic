<template>
  <h1>Prefered Tools</h1>
  <el-card>
    <el-row justify="start">
      <el-col :span="4">Writing</el-col>
      <el-col :span="20"
        ><el-icon :size="30"><Icon icon="skill-icons:latex-light" /></el-icon
        >&nbsp;<el-icon :size="30"
          ><Icon icon="teenyicons:markdown-solid" /></el-icon
      ></el-col>
    </el-row>

    <el-row justify="start">
      <el-col :span="4">Coding</el-col>
      <el-col :span="20"
        ><el-icon :size="30"><Icon icon="skill-icons:vscode-light" /></el-icon
        >&nbsp;<el-icon :size="30"><Icon icon="logos:prettier" /></el-icon
        >&nbsp;</el-col
      >
    </el-row>

    <el-row justify="start">
      <el-col :span="4">Client-side</el-col>
      <el-col :span="20"
        ><el-icon :size="30"><Icon icon="skill-icons:javascript" /></el-icon
        >&nbsp;<el-icon :size="30"><Icon icon="logos:vue" /></el-icon
        >&nbsp;<el-icon :size="30"><Icon icon="logos:pinia" /></el-icon
        >&nbsp;<el-icon :size="30"><Icon icon="devicon:vitejs" /></el-icon
        >&nbsp;<el-icon :size="30"><Icon icon="skill-icons:electron" /></el-icon
        >&nbsp;<el-icon :size="30"><Icon icon="logos:babel" /></el-icon
        >&nbsp;<el-icon :size="30"><Icon icon="logos:swc" /></el-icon
      ></el-col>
    </el-row>

    <el-row justify="start">
      <el-col :span="4">Server-side</el-col>
      <el-col :span="20"
        ><el-icon :size="30"><Icon icon="logos:nodejs-icon-alt" /></el-icon
        >&nbsp;<el-icon :size="30"
          ><Icon icon="devicon:mongodb-wordmark" /></el-icon
        >&nbsp;<el-icon :size="30"><Icon icon="logos:python" /></el-icon
        >&nbsp;<el-icon :size="30"><Icon icon="skill-icons:django" /></el-icon
        >&nbsp;<el-icon :size="30"><Icon icon="logos:nginx" /></el-icon
      ></el-col>
    </el-row>

    <el-row justify="start">
      <el-col :span="4">Deep Learning</el-col>
      <el-col :span="20"
        ><el-icon :size="30"><Icon icon="skill-icons:pytorch-light" /></el-icon
      ></el-col>
    </el-row>

    <el-row justify="start">
      <el-col :span="4">Blockchain</el-col>
      <el-col :span="20"
        ><el-icon :size="30"><Icon icon="logos:solidity" /></el-icon
      ></el-col>
    </el-row>
  </el-card>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
</script>

<style scoped>
.el-card:hover {
  box-shadow: rgba(255, 255, 255, 0.56) 0px 0px 40px 4px;
}
</style>
