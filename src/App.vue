<template>
  <div class="common-layout">
    <!-- <el-header>Header</el-header> -->
    <el-container v-if="!isMobile">
      <el-aside width="30vw" class="float-aside"
        ><Abstract /> <el-divider class="vertical-divider" direction="vertical"
      /></el-aside>

      <el-main class="float-main">
        <el-scrollbar>
          <News /><Publication /><Education /><Tools /> <Services />
          <Teaching />
        </el-scrollbar>
      </el-main>
    </el-container>

    <el-container v-if="isMobile">
      <el-main>
        <Abstract />
        <el-divider />
        <News /><Publication /><Education /><Tools /> <Services /> <Teaching />
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

import { onMounted, ref } from "vue";

const isMobile = ref(false);

onMounted(() => {
  if (window.innerWidth <= 768) {
    isMobile.value = true;
  }
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
</style>
