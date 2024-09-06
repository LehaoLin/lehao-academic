<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="Bio" name="Bio"></el-tab-pane>
    <el-tab-pane label="News" name="News"></el-tab-pane>
    <el-tab-pane label="Publication" name="Publication"></el-tab-pane>
    <el-tab-pane label="Education" name="Education"></el-tab-pane>
    <el-tab-pane label="Tools" name="Tools"></el-tab-pane>
    <el-tab-pane label="Services" name="Services"></el-tab-pane>
    <el-tab-pane label="Teaching" name="Teaching"></el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "../store";

const store = useStore();

// const handleClick = (tab, event) => {
//   console.log(tab.props.name);
//   window.document
//     .getElementById(tab.props.name)
//     .scrollIntoView({ behavior: "smooth", block: "center" });
// };
const activeName = computed(() => {
  if (store.bio_visible) {
    return "Bio";
  } else if (store.news_visible) {
    return "News";
  } else if (store.publication_visible) {
    return "Publication";
  } else if (store.education_visible) {
    return "Education";
  } else if (store.tools_visible) {
    return "Tools";
  } else if (store.services_visible) {
    return "Services";
  } else if (store.teaching_visible) {
    return "Teaching";
  }
  if (store.bottom_arrived) {
    return "Teaching";
  }
});
</script>
<style>
.demo-tabs {
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 100;
  background-color: #121212;
}
.el-tab-pane {
  background-color: #121212;
}
</style>
