<template>
  <h1>🧑🏻‍🏫 Teaching</h1>

  <el-timeline>
    <el-timeline-item timestamp="2025-5" placement="top">
      <el-card>
        <el-row>
          <el-text size="large"
            ><b>Leading Teaching Assistant</b> for ECE4300: System Design in
            Human-Computer Interaction</el-text
          >
        </el-row>
        <el-row>
          <el-text size="default"
            >School of Science and Engineering, The Chinese Univeristy of Hong
            Kong, Shenzhen</el-text
          >
        </el-row>
        <el-row>
          <el-text size="default">Instructor: Prof. Yuhua Jin</el-text>
        </el-row>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2025-1" placement="top"> </el-timeline-item>
  </el-timeline>

  <el-timeline>
    <el-timeline-item timestamp="2024-12" placement="top">
      <el-card>
        <el-row>
          <el-text size="large"
            ><b>Leading Teaching Assistant</b> for ECE3200: Video Games Design
            and Development</el-text
          >
        </el-row>
        <el-row>
          <el-text size="default"
            >School of Science and Engineering, The Chinese Univeristy of Hong
            Kong, Shenzhen</el-text
          >
        </el-row>
        <el-row>
          <el-text size="default">Instructor: Prof. Yuhua Jin</el-text>
        </el-row>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2024-9" placement="top"> </el-timeline-item>
  </el-timeline>

  <el-timeline>
    <el-timeline-item timestamp="2023-12" placement="top">
      <el-card>
        <el-row>
          <el-text size="large"
            ><b>Teaching Assistant</b> for MAT2040: Linear Algebra</el-text
          >
        </el-row>
        <el-row>
          <el-text size="default"
            >School of Science and Engineering, The Chinese Univeristy of Hong
            Kong, Shenzhen</el-text
          >
        </el-row>
        <el-row>
          <el-text size="default"
            >Instructor: Prof. Dongdong He & Prof. Feng YIN & Prof. Cheuk Yin
            Lee</el-text
          >
        </el-row>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2023-9" placement="top"> </el-timeline-item>
  </el-timeline>

  <el-timeline>
    <el-timeline-item timestamp="2023-5" placement="top">
      <el-card>
        <el-row>
          <el-text size="large"
            ><b>Teaching Assistant</b> for MAT2040: Linear Algebra</el-text
          >
        </el-row>
        <el-row>
          <el-text size="default"
            >School of Science and Engineering, The Chinese Univeristy of Hong
            Kong, Shenzhen</el-text
          >
        </el-row>
        <el-row>
          <el-text size="default"
            >Instructor: Prof. Dongdong He & Prof. Shenghao Yang & Prof. Kaiming
            Shen</el-text
          >
        </el-row>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2023-1" placement="top"> </el-timeline-item>
  </el-timeline>

  <el-timeline>
    <el-timeline-item timestamp="2022-12" placement="top">
      <el-card>
        <el-row>
          <el-text size="large"
            ><b>Teaching Assistant</b> for ECE3200: Video Games Design and
            Development</el-text
          >
        </el-row>
        <el-row>
          <el-text size="default"
            >School of Science and Engineering, The Chinese Univeristy of Hong
            Kong, Shenzhen</el-text
          >
        </el-row>
        <el-row>
          <el-text size="default">Instructor: Prof. Wei Cai</el-text>
        </el-row>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2022-9" placement="top"> </el-timeline-item>
  </el-timeline>

  <el-timeline>
    <el-timeline-item timestamp="2022-5" placement="top">
      <el-card>
        <el-row>
          <el-text size="large"
            ><b>Teaching Assistant</b> for CSC1002: Computational Laboratory
            (Python)</el-text
          >
        </el-row>
        <el-row>
          <el-text size="default"
            >School of Science and Engineering, The Chinese Univeristy of Hong
            Kong, Shenzhen</el-text
          >
        </el-row>
        <el-row>
          <el-text size="default"
            >Instructor: Prof. Kinley Lam & Prof. Zhuoran ZHANG</el-text
          >
        </el-row>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2022-1" placement="top"> </el-timeline-item>
  </el-timeline>

  <el-timeline>
    <el-timeline-item timestamp="2021-12" placement="top">
      <el-card>
        <el-row>
          <el-text size="large"
            ><b>Teaching Assistant</b> for MAT2040: Linear Algebra</el-text
          >
        </el-row>
        <el-row>
          <el-text size="default"
            >School of Science and Engineering, The Chinese Univeristy of Hong
            Kong, Shenzhen</el-text
          >
        </el-row>
        <el-row>
          <el-text size="default"
            >Instructor: Prof. Dongdong He & Prof. Dongxu Ji</el-text
          >
        </el-row>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2021-9" placement="top"> </el-timeline-item>
  </el-timeline>

  <!-- <el-timeline>
    <el-timeline-item timestamp="2021-12" placement="top">
      <el-card>
        <el-row>
          <el-text size="default">MAT2040: Linear Algebra</el-text>
        </el-row>
        <el-row>
          <el-text size="default">Computer and Information Engineering</el-text>
        </el-row>
        <el-row>
          <el-text size="default">Computer and Information Engineering</el-text>
        </el-row>
      </el-card>
    </el-timeline-item>

    <el-timeline-item timestamp="2021-9" placement="top"> </el-timeline-item>
  </el-timeline> -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import dayjs from "dayjs";

const now_date = ref();

onMounted(() => {
  now_date.value = dayjs().format("YYYY-M");
  console.log(now_date.value);
});
</script>

<style scoped>
.el-card:hover {
  box-shadow: rgba(255, 255, 255, 0.56) 0px 0px 40px 4px;
}
</style>
