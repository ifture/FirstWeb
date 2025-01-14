<template>
  <div class="home">

    <!--   轮播图-开始   -->
    <Carousel class="carousel">
      <img src="../assets/image/home/carousel_1.jpg"  alt="carousel_1"/>
      <img src="../assets/image/home/carousel_2.jpg"  alt="carousel_2"/>
      <img src="../assets/image/home/carousel_3.jpg"  alt="carousel_3"/>
      <img src="../assets/image/home/carousel_4.jpg"  alt="carousel_4"/>
      <img src="../assets/image/home/carousel_5.jpg"  alt="carousel_5"/>
    </Carousel>
    <!--   轮播图-结束   -->


    <!--   公司简介-开始   -->
    <div ref="profileRef" class="company_profile">
      <div class="top">
        <div class="content_left">
          <div class="title">安全联锁装置&截留钥匙联锁</div>
          <img alt="logo" src="../../public/images/logo_1.png" class="logo" />
        </div>
        <div class="content_right">
          普洛泰柯(上海)安全技术有限公司是一家专注于工业安全工程领域解决方案公司，
          以保护人员安全，保护过程控制安全为已任，按照客户需求提供定制化的产品及方案，为客户及企业赋能。
          我们提供安全联锁装置，截留钥匙联锁(trapped key)，安全光幕，安全开关，安全门锁，拉绳开关， 防爆开关，安全评估，安全服务及定制化产品。
          广泛应用于能源电力汽车、冶金、矿山、医药、食品饮料、仓储物流、轨道交通等工业领域，提供完整的解决方案。
        </div>
      </div>
      <div class="images">
        <ImageComp>
          <img alt="image_1" src="../assets/image/home/image_1.jpg" />
          <img style="margin-left: 5%" alt="image_2" src="../assets/image/home/image_2.jpg" />
          <img style="margin-left: 5%" alt="image_3" src="../assets/image/home/image_3.jpg" />
        </ImageComp>
      </div>
    </div>
    <!--   公司简介-结束   -->



    <!--   公司理念-开始   -->
    <div ref="philosophyRef" class="company_philosophy">
      <div class="module_1">
        <div class="content_1">01</div>
        <div class="content_2">Professional</div>
        <div class="content_3">专业资深的技术服务团队</div>
        <div class="content_4"></div>
        <div class="content_5">丰富的现场经验和实力强大的团队，为公司奠定了行业开拓者地位和工业安全系统解决方案的领导者优势。</div>
      </div>
      <span class="line"></span>
      <div class="module_2">
        <div class="content_1">02</div>
        <div class="content_2">security</div>
        <div class="content_3">安全同行、创新共赢</div>
        <div class="content_4"></div>
        <div class="content_5">在努力为社会提供安全、优质、可靠的工业安全产品的同时，面对新形势、新机遇、新任务。</div>
      </div>
      <span class="line"></span>
      <div class="module_3">
        <div class="content_1">03</div>
        <div class="content_2">responsibility</div>
        <div class="content_3">安全联锁装置&截留钥匙联锁</div>
        <div class="content_4"></div>
        <div class="content_5">通过推进科技进步，保障人们的生命和财产安全，最终促进经济的发展和人类社会的全面进步。</div>
      </div>
    </div>
    <!--   公司理念-结束   -->

  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import router from "@/router";
import ImageComp from '../components/image/index.vue';
import Carousel from '../components/carousel'

// ref属性
const profileRef = ref(null);
const philosophyRef = ref(null);

onMounted(() => {
  let currentPath = router.currentRoute.value.fullPath;
  // 根据当前路径决定滚动哪个元素
  if (currentPath === "/about/company_profile") {
    scrollIntoView(profileRef);
  } else if (currentPath === "/about/company_philosophy") {
    scrollIntoView(philosophyRef);
  }
});

// 滚动函数
function scrollIntoView(elementRef) {
  if (elementRef.value) {
    elementRef.value.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* 以下是轮播图的样式 */
.carousel {
  width: 99vw;
  height: 100vh;
}

/* 以下是公司简介的样式 */
.company_profile {
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
}

.company_profile .top {
  position: absolute;
  margin-left: 15vw;
  margin-top: 10vh;
  width: 70vw;
  height: 30vh;
}

.company_profile .top .content_left {
  position: absolute;
  display: inline-block;
  width: 30vw;
}

.company_profile .top .content_left .title {
  margin-top: 50px;
  font-size: 2rem;
  font-weight: 600;
}

.company_profile .top .content_left .logo {
  margin-top: 50px;
  width: 250px;
}

.company_profile .top .content_right {
  position: absolute;
  display: inline-block;
  width: 41vw;
  height: 30vh;
  margin-left: 29vw;
  font-size: 1.3rem;
  line-height: 2;   /* 设置行距为 2 倍字体大小 */
  text-indent: 2em; /* 设置首行缩进为 2 个字符的宽度 */
  max-height: 10em; /* 设置最大高度 */
  overflow: hidden;
}

.company_profile .images {
  position: absolute;
  margin-top: 45vh;
  margin-left: 15vw;
  width: 70vw;
  height: 50vh;
}

.company_profile .images img {
  width: 30%;
  height: 50vh;
}

/* 以下是公司理念的样式 */
.company_philosophy {
  display: flex;
  position: relative;
  text-align: center;
  width: 100%;
  height: 80vh;
  background-position: center;
  background-image: url("../assets/image/home/bg.jpg");
}

.company_philosophy .module_1 {
  display: inline-block;
  width: 33.3%;
  opacity: 0.8;
}

.company_philosophy .module_2 {
  display: inline-block;
  width: 33.3%;
  opacity: 0.8;
}

.company_philosophy .module_3 {
  display: inline-block;
  width: 33.3%;
  opacity: 0.8;
}

.company_philosophy .module_1:hover {
  opacity: 1;
}

.company_philosophy .module_2:hover {
  opacity: 1;
}

.company_philosophy .module_3:hover {
  opacity: 1;
}

.company_philosophy .line {
  display: inline-block;
  width: 0.05%;
  height: 100%;
  background-color: white;
}

.company_philosophy .content_1 {
  font-size: 2.5rem;
  font-weight: 600;
  color: #a19ea1;
  margin-top: 30%;
}

.company_philosophy .content_2 {
  color: #a19ea1;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 15%;
}

.company_philosophy .content_3 {
  color: #ffffff;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 8%;
}

.company_philosophy .content_4 {
  background-color: white;
  display: block;
  width: 50px;
  height: 2px;
  margin-left: 46%;
  margin-top: 5%;
}

.company_philosophy .content_5 {
  color: aliceblue;
  line-height: 1.5;
  width: 70%;
  margin-left: 15%;
  margin-top: 8%;
}
</style>