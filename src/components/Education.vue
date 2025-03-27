<template>
  <h1>🏫 Education</h1>
  <el-timeline>
    <el-timeline-item :timestamp="now_date" placement="top">
      <el-card>
        <el-row>
          <el-col :span="18">
            <h3>Ph.D. Student in Computer and Information Engineering</h3>
            <h3>2021 - 2025</h3>
            <h3>The Chinese University of Hong Kong, Shenzhen, China</h3>
            <h3>
              Supervisor:
              <el-link
                href="https://mypage.cuhk.edu.cn/academics/caiwei/index.html"
                target="_blank"
                >Prof. Wei Cai</el-link
              >
            </h3>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 70%; height: 100%"
              :src="phd_logo"
              :zoom-rate="1.2"
              :preview-src-list="srcList"
              fit="contain"
            />
          </el-col>
        </el-row>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2021-9-1" placement="top">
      <el-card>
        <el-row>
          <el-col :span="18">
            <h3>B.Eng. in Computer Science</h3>
            <h3>2016 - 2021</h3>
            <h3>The Chinese University of Hong Kong, Shenzhen, China</h3>
            <h3>
              Supervisor:
              <el-link
                href="https://mypage.cuhk.edu.cn/academics/caiwei/index.html"
                target="_blank"
                >Prof. Wei Cai</el-link
              >
            </h3>
          </el-col>
          <el-col :span="6">
            <el-image
              style="width: 70%; height: 100%"
              :src="phd_logo"
              :zoom-rate="1.2"
              :preview-src-list="srcList"
              fit="contain"
            />
          </el-col>
        </el-row>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2016-9-1" placement="top"> </el-timeline-item>
  </el-timeline>
</template>

<script setup>
import { ref, onMounted } from "vue";
import dayjs from "dayjs";
import phd_logo from "@/assets/cuhksz-logo.png";

const now_date = ref();
// const phd_logo = ref()
const srcList = ref([]);

onMounted(() => {
  now_date.value = dayjs().format("YYYY-M-D");
  srcList.value = [phd_logo];
  console.log(now_date.value);
});
</script>

<style scoped>
.el-card:hover {
  box-shadow: rgba(255, 255, 255, 0.56) 0px 0px 40px 4px;
}
</style>
