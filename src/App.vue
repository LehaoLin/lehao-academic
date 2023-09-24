<template>
  <div class="common-layout">
    <!-- <el-header>Header</el-header> -->
    <el-container>
      <el-aside width="30vw"
        ><Abstract /> <el-divider direction="vertical"
      /></el-aside>

      <el-main>
        <el-scrollbar> <Education /> <Teaching /> </el-scrollbar>
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
import Education from "./components/Education.vue";
import Abstract from "./components/Abstract.vue";
import Teaching from "./components/Teaching.vue";
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
.el-aside {
  height: 100vh;
  justify-content: center; /* Horizontally center the child */
  align-items: center; /* Vertically center the child (optional) */
  display: flex;
  vertical-align: middle;
  position: fixed;
}

.el-main {
  margin-left: 30vw;
}
.el-divider {
  height: 100vh;
}
</style>
