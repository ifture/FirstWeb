<template>
  <div class="home">

    <!--   轮播图-开始   -->
    <div class="carousel">
      <div class="Navbar">

      </div>
      <div class="title">
        <div class="content">
          <span class="content_ch">公司简介</span>
          <span class="content_en">ABOUT US</span>
        </div>
        <div class="line"></div>
      </div>
    </div>
    <!--   轮播图-结束   -->



    <!--   公司简介-开始   -->
    <div class="company_profile">
      <div class="top">
        <div class="content_left">
          <div class="title">阀门便捷操作&安全机械联锁</div>
          <img alt="logo" src="@/assets/image/home/logo.svg" class="logo" />
        </div>
        <div class="content_right">
          上海凯研机械设备有限公司是一家致力于工业安全产品，技术解决方案及工程服务为一体的高新技术企业。
          通过突破性技术创新,成功研制出两大拥有自主知识产权专利产品：柔性传动系统及编码式安全机械联锁。
          产品通过权威部门认证，符合工业安全技术标准。我们旨在为石化行业、发电厂、海工船舶及核能行业中的阀门危险操作提供安全解决方案。
        </div>
      </div>
      <div class="images">
        <ImageComp>
          <img alt="image_1" src="../assets/image/home/company_profile/image_1.jpg" />
          <img style="margin-left: 5%" alt="image_2" src="../assets/image/home/company_profile/image_2.jpg" />
          <img style="margin-left: 5%" alt="image_3" src="../assets/image/home/company_profile/image_3.jpg" />
        </ImageComp>
      </div>
    </div>
    <!--   公司简介-结束   -->



    <!--   公司理念-开始   -->
    <div class="company_Philosophy">
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
        <div class="content_3">阀门便捷操作&安全机械联锁</div>
        <div class="content_4"></div>
        <div class="content_5">通过推进科技进步，保障人们的生命和财产安全，最终促进经济的发展和人类社会的全面进步。</div>
      </div>
    </div>
    <!--   公司理念-结束   -->



    <!--   页尾-开始   -->
    <FootComp></FootComp>
    <!--   页尾-结束   -->
  </div>
</template>

<script setup>
import ImageComp from '../components/ImageComp.vue';
import FootComp from "@/components/FootComp.vue";

</script>

<style scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* 以下是轮播图的样式 */
.carousel {
  width: 100%;
  height: 70vh;
  position: relative;
  background-image: url("../assets/image/home/carousel/carousel_1.jpg");
  background-repeat: no-repeat;
}

.carousel .title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
}
.carousel .title .content {
  color: aliceblue;
  display: inline-block;
}

.carousel .title .content .content_ch {
  font-size: 3rem;
  font-weight: 800;
}

.carousel .title .content .content_en {
  margin-left: 10px;
  font-size: 1.5rem;
  font-weight: 500;
}

.carousel .title .line {
  display: inline-block;
  width: 55vw;
  height: 3px;
  background-color: aliceblue;
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
  width: 40vw;
  height: 30vh;
  margin-left: 30vw;
  font-size: 1.3rem;
  line-height: 2;   /* 设置行距为 2 倍字体大小 */
  text-indent: 2em; /* 设置首行缩进为 2 个字符的宽度 */
  max-height: 10em; /* 设置最大高度 */
  overflow: hidden;
}

.company_profile .images {
  position: absolute;
  margin-top: 40vh;
  margin-left: 15vw;
  width: 70vw;
  height: 50vh;
}

.company_profile .images img {
  object-fit: cover;
  width: 30%;
  height: 50vh;
}

/* 以下是公司理念的样式 */
.company_Philosophy {
  display: flex;
  position: relative;
  text-align: center;
  width: 100%;
  height: 80vh;
  background-position: center;
  background-image: url("../assets/image/home/company_Philosophy/bg.jpg");
}

.company_Philosophy .module_1 {
  display: inline-block;
  width: 33.3%;
  opacity: 0.8;
}

.company_Philosophy .module_2 {
  display: inline-block;
  width: 33.3%;
  opacity: 0.8;
}

.company_Philosophy .module_3 {
  display: inline-block;
  width: 33.3%;
  opacity: 0.8;
}

.company_Philosophy .module_1:hover {
  opacity: 1;
}

.company_Philosophy .module_2:hover {
  opacity: 1;
}

.company_Philosophy .module_3:hover {
  opacity: 1;
}

.company_Philosophy .line {
  display: inline-block;
  width: 0.05%;
  height: 100%;
  background-color: white;
}

.company_Philosophy .content_1 {
  font-size: 2.5rem;
  font-weight: 600;
  color: #a19ea1;
  margin-top: 30%;
}

.company_Philosophy .content_2 {
  color: #a19ea1;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 15%;
}

.company_Philosophy .content_3 {
  color: #ffffff;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 8%;
}

.company_Philosophy .content_4 {
  background-color: white;
  display: block;
  width: 50px;
  height: 2px;
  margin-left: 46%;
  margin-top: 5%;
}

.company_Philosophy .content_5 {
  color: aliceblue;
  line-height: 1.5;
  width: 70%;
  margin-left: 15%;
  margin-top: 8%;
}
</style>