<template>
  <div class="common-layout">
    <!-- <el-header>Header</el-header> -->
    <el-container v-if="!isMobile">
      <el-aside width="30vw" class="float-aside"
        ><Abstract /> <el-divider class="vertical-divider" direction="vertical"
      /></el-aside>

      <el-main class="float-main">
        <el-scrollbar ref="el">
          <!-- <Navbar /> -->
          <div v-element-visibility="onBioVis" id="Bio">
            <Bio />
          </div>
          <div v-element-visibility="onNewsVis" id="News">
            <News />
          </div>
          <!-- <div v-element-visibility="onInvestVis" id="Invest">
            <Invest />
          </div> -->
          <div v-element-visibility="onPubVis" id="Publication">
            <Publication />
          </div>
          <div v-element-visibility="onEduVis" id="Education">
            <Education />
          </div>
          <div v-element-visibility="onAwards" id="Awards">
            <Awards />
          </div>
          <div v-element-visibility="onToolVis" id="Tools">
            <Tools />
          </div>
          <div v-element-visibility="onServicesVis" id="Services">
            <Services />
          </div>
          <div v-element-visibility="onTeachingVis" id="Teaching">
            <Teaching />
          </div>
        </el-scrollbar>
      </el-main>
    </el-container>

    <el-container v-if="isMobile">
      <el-main>
        <Abstract />
        <el-divider />
        <Navbar />
        <Bio />
        <News />
        <!-- <Invest /> -->
        <Publication />
        <Education />
        <Awards />
        <Tools />
        <Services />
        <Teaching />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
import Education from "./components/Education.vue";
import Abstract from "./components/Abstract.vue";
import Teaching from "./components/Teaching.vue";
import Services from "./components/Services.vue";
import Tools from "./components/Tools.vue";
import Publication from "./components/Publication.vue";
import News from "./components/News.vue";
import Bio from "./components/Bio.vue";
// import Navbar from "./components/Navbar.vue";
import Awards from "./components/Awards.vue";
import Invest from "./components/Invest.vue";

import { watch, toRefs } from "vue";

import { vElementVisibility } from "@vueuse/components";
import { useScroll } from "@vueuse/core";

import { onMounted, ref, computed } from "vue";

import { useStore } from "./store/index.js";
const store = useStore();

const el = ref(null);

// const smooth = ref(false);
// const behavior = computed(() => (smooth.value ? "smooth" : "auto"));
// const { x, y, isScrolling, arrivedState, directions } = useScroll(el, {
//   behavior,
// });
// const { left, right, top, bottom } = toRefs(arrivedState);

// watch(bottom, () => {
//   store.bottom_arrived = bottom.value;
// });

const onBioVis = (state) => {
  store.bio_visible = state;
};
const onNewsVis = (state) => {
  store.news_visible = state;
};
const onInvestVis = (state) => {
  store.invest_visible = state;
};
const onPubVis = (state) => {
  store.publication_visible = state;
};
const onEduVis = (state) => {
  store.education_visible = state;
};
const onToolVis = (state) => {
  store.tools_visible = state;
};
const onServicesVis = (state) => {
  store.services_visible = state;
};
const onTeachingVis = (state) => {
  store.teaching_visible = state;
};
const onAwards = (state) => {
  store.awards_visible = state;
};

const isMobile = ref(false);

onMounted(() => {
  if (window.innerWidth <= 768) {
    isMobile.value = true;
  }
  console.log(isMobile.value);
});
</script>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
.float-aside {
  height: 100vh;
  justify-content: center; /* Horizontally center the child */
  align-items: center; /* Vertically center the child (optional) */
  display: flex;
  vertical-align: middle;
  position: fixed;
}

.float-main {
  margin-left: 30vw;
}
.vertical-divider {
  height: 100vh;
}
.el-scrollbar {
  overflow: visible;
  position: absolute;
}
</style>
