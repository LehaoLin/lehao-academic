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
          <a
            v-if="project.badgeImg"
            :href="project.badgeLink"
            target="_blank"
            class="star-badge"
            style="margin-left: 8px"
          >
            <img :src="project.badgeImg" alt="stars" />
          </a>
          <el-tag
            v-for="tag in project.tags"
            :key="tag.label"
            size="small"
            :type="tag.type"
            style="margin-left: 6px"
          >
            {{ tag.label }}
          </el-tag>
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
    badgeImg: "https://img.shields.io/github/stars/LehaoLin/hermes-gate?style=social",
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
  {
    name: "cc-auto",
    icon: "ant-design:github-filled",
    link: "https://github.com/LehaoLin/cc-auto",
    badgeImg: "https://img.shields.io/github/stars/LehaoLin/cc-auto?style=social",
    badgeLink: "https://github.com/LehaoLin/cc-auto/stargazers",
    tags: [
      { label: "Python", type: "info" },
      { label: "MIT", type: "success" },
    ],
    description:
      "Claude Code auto-confirmation tool.",
    features: [
      "Auto-confirm Claude Code prompts",
      "Streamline AI coding workflow",
    ],
  },
  {
    name: "Hermes Agent (Contribution)",
    icon: "ant-design:github-filled",
    link: "https://github.com/NousResearch/hermes-agent/commit/504e7eb9e5688b4ab04e1e9a78a044c3ff00ead1",
    tags: [
      { label: "Python", type: "info" },
      { label: "Upstream", type: "warning" },
    ],
    description:
      'Contributed to the official <a href="https://github.com/NousResearch/hermes-agent" target="_blank" style="color: #0095d9">Hermes Agent</a> repo — fixed WebSocket reconnection handling for QQ Bot platform adapter. When connection drops, send() now polls is_connected for up to 15s before retrying.',
    features: [
      "WebSocket Reconnection Fix",
      "QQ Bot Platform Adapter",
      "Retryable Failure Handling",
      "4 Async Tests Added",
      "Merged Upstream",
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
.star-badge {
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
}
.star-badge img {
  height: 20px;
}
</style>
