<template>
  <div>
    <!--   HeadImg-开始   -->
    <HeadImg :src="data.headImg.src" :contentCn="data.headImg.contentCn" :contentEn="data.headImg.contentEn" />
    <!--   HeadImg-结束   -->


    <!--   ImgAndText-开始   -->
    <ImgAndText :src="data.imgAndText.src" :title-en="data.imgAndText.titleEn" :title-cn="data.imgAndText.titleCn" :content="data.imgAndText.content" />
    <!--   ImgAndText-结束   -->
  </div>
</template>

<script setup>
import HeadImg from  '@/components/headImg'
import ImgAndText from '@/components/imgAndText/index.vue'
import { useStore } from "vuex";

const store = useStore();

// 获取电力行业的数据
const data = store.state.solution.power;

</script>

<style scoped>

</style>