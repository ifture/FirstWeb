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
        <img alt="image_1" src="@/assets/image/home/company_profile/image_1.jpg" />
        <img alt="image_2" src="@/assets/image/home/company_profile/image_2.jpg" />
<!--        <img alt="image_3" src="@/assets/image/home/company_profile/image_3.jpg" />-->
      </div>
    </div>
    <!--   公司简介-结束   -->



    <!--   公司理念-开始   -->
    <div class="company_Philosophy">

    </div>
    <!--   公司理念-结束   -->
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {

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
  width: 100%;
  height: 70vh;
  position: relative;
  background-image: url("@/assets/image/home/carousel/carousel_1.jpg");
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
  position: relative;
  width: 100%;
  height: 50vh;
}

.company_profile .top {
  margin-left: 15vw;
  margin-top: 10vh;
  width: 70vw;
  height: 30vh;
}

.company_profile .top .content_left {
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
  display: inline-block;
  width: 40vw;
  font-size: 1.3rem;
  line-height: 2; /* 这里设置行距为 2 倍字体大小 */
  text-indent: 2em; /* 设置首行缩进为 2 个字符的宽度 */
}

.company_profile .images {
  margin-left: 15vw;
  width: 70vw;
  height: 50vh;
}

/* 以下是公司理念的样式 */
.company_Philosophy {

}
</style>