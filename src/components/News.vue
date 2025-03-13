<template>
  <h1>News</h1>

  <!-- <el-timeline>
    <el-timeline-item center timestamp="2025-2" placement="top">
      One paper was accepted by ACM CHI'25 Late Breaking Work (LBW).
    </el-timeline-item>
    <el-timeline-item center timestamp="2025-1" placement="top">
      One paper was accepted by ACM CHI'25.
    </el-timeline-item>
    <el-timeline-item center timestamp="2024-8" placement="top">
      Become a Ph.D. candidate.
    </el-timeline-item>
    <el-timeline-item center timestamp="2024-7" placement="top">
      One technical paper was accepted by ACM MM'24.
    </el-timeline-item>
    <el-timeline-item timestamp="2023-9" placement="top">
      Start my new personal webpage 💐.
    </el-timeline-item>
    <el-timeline-item>
      <el-link type="primary">Show More</el-link>
      <el-link type="primary">Show Less</el-link>
    </el-timeline-item>
  </el-timeline> -->

  <el-timeline>
    <el-scrollbar height="20vh" always>
      <el-timeline-item
        v-for="item in news.slice(0, 6)"
        v-if="expand == false"
        center
        :timestamp="item.timestamp"
        placement="top"
      >
        {{ item.content }}
      </el-timeline-item>

      <el-timeline-item
        v-if="expand == true"
        v-for="item in news"
        center
        :timestamp="item.timestamp"
        placement="top"
      >
        {{ item.content }}
      </el-timeline-item>

      <el-timeline-item v-if="news.length > 6">
        <el-link v-if="expand == false" type="primary" @click="show_more()"
          >Show More</el-link
        >
        <el-link v-if="expand == true" type="primary" @click="show_less()"
          >Show Less</el-link
        >
      </el-timeline-item>
    </el-scrollbar>
  </el-timeline>
</template>

<script setup>
import { ref } from "vue";

const expand = ref(false);

const news = ref([
  {
    timestamp: "2025-3",
    content: "One paper was accepted by ACM TOMM.",
  },
  {
    timestamp: "2025-1",
    content:
      "Two papers were accepted by ACM CHI'25 and Late Breaking Work (LBW).",
  },
  { timestamp: "2024-8", content: "Become a Ph.D. candidate." },
  {
    timestamp: "2024-7",
    content: "One technical paper was accepted by ACM MM'24.",
  },
  { timestamp: "2023-9", content: "Start my new personal webpage 💐." },
]);

const show_more = () => {
  expand.value = true;
};

const show_less = () => {
  expand.value = false;
};
</script>

<style scoped></style>
