<template>
  <h1>🛠️ Project</h1>

  <el-card shadow="never" class="outer-card">
    <el-card
      v-for="project in projects"
      :key="project.name"
      shadow="hover"
      class="inner-card"
    >
      <template #header>
        <div class="card-header">
          <el-icon :size="22"
            ><Icon :icon="project.icon" v-if="project.icon"
          /></el-icon>
          <el-link
            :href="project.link"
            target="_blank"
            style="font-size: 18px; font-weight: bold; margin-left: 8px"
          >
            {{ project.name }}
          </el-link>
          <el-tag
            v-for="tag in project.tags"
            :key="tag.label"
            size="small"
            :type="tag.type"
            style="margin-left: 6px"
          >
            {{ tag.label }}
          </el-tag>
          <a
            v-if="project.badgeImg"
            :href="project.badgeLink"
            target="_blank"
            style="margin-left: 6px; vertical-align: middle"
          >
            <img :src="project.badgeImg" alt="stars" />
          </a>
        </div>
      </template>
      <p v-html="project.description"></p>
      <el-divider />
      <div class="features">
        <el-tag
          v-for="feat in project.features"
          :key="feat"
          effect="plain"
          style="margin: 4px"
        >
          {{ feat }}
        </el-tag>
      </div>
    </el-card>
  </el-card>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    name: "Hermes Gate",
    icon: "ant-design:github-filled",
    link: "https://github.com/LehaoLin/hermes-gate",
    badgeImg: "https://img.shields.io/github/stars/LehaoLin/hermes-gate",
    badgeLink: "https://github.com/LehaoLin/hermes-gate/stargazers",
    tags: [
      { label: "Python", type: "info" },
      { label: "MIT", type: "success" },
    ],
    description:
      'A terminal TUI for remotely managing <a href="https://github.com/NousResearch/hermes-agent" target="_blank" style="color: #0095d9">Hermes Agent</a> tmux sessions on cloud servers, running inside a single Docker container.',
    features: [
      "Rich TUI Experience",
      "Session Persistence via tmux",
      "Network Status Monitoring",
      "Multi-server & Multi-session",
      "One-command Start",
      "SSH Config Alias Support",
    ],
  },
]);
</script>

<style scoped>
.outer-card {
  background: transparent;
  box-shadow: none;
  border: none;
}
.inner-card {
  margin-bottom: 16px;
}
.card-header {
  display: flex;
  align-items: center;
}
</style>
