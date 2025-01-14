<template>
  <div v-if="router.currentRoute.value.fullPath === '/solution'">
    <!--   HeadImg-开始   -->
    <HeadImg src="/images/headImg/solution_metallurgy.jpg" contentCn="解决方案" contentEn="SOLUTIONS" />
    <!--   HeadImg-结束   -->

    <div class="contain_1">
      <div class="title">产品应用领域</div>
      <div class="line"></div>
      <div class="content">我们致力于为电力行业、汽车行业、物流自动化、石油化工、轨道交通、公用服务业、食品饮料、冶金制造业等领域中的工艺危险操作提供完整的安全解决方案。</div>
    </div>

    <div class="contain_2">
      <div class="kid">
        <a href="/solution/power/"><img src="/images/headImg/solution_power.jpg"  alt="solution1" /></a>
        <a href="/solution/traffic/"><img src="/images/headImg/solution_traffic.jpg"  alt="solution2" /></a>
        <a href="/solution/petrochemical/"><img src="/images/headImg/solution_petrochemical.jpg"  alt="solution3" /></a>
        <a href="/solution/car/"><img src="/images/headImg/solution_car.jpg"  alt="solution4" /></a>
      </div>
      <div class="kid">
        <a href="/solution/logistics/"><img src="/images/headImg/solution_logistics.jpg"  alt="solution5" /></a>
        <a href="/solution/food/"><img src="/images/headImg/solution_food.jpg"  alt="solution6" /></a>
        <a href="/solution/metallurgy/"><img src="/images/headImg/solution_metallurgy.jpg"  alt="solution7" /></a>
        <a href="/solution/service/"><img src="/images/headImg/solution_service.jpg"  alt="solution8" /></a>
      </div>
    </div>
  </div>

  <router-view/>

</template>

<script setup>
import HeadImg from  '@/components/headImg'
import router from "@/router";

</script>

<style scoped>
.contain_1 {
  display: flex;
  flex-direction: column;
  height: 300px;
  margin-left: 10%;
}

.title {
  height: 50px;
  margin-top: 80px;
  font-size: 35px;
  font-weight: 600;
}

.line {
  width: 82.5%;
  height: 4px;
  margin-top: 20px;
  background-color: #0c3c5a;
}

.content {
  height: 30px;
  margin-top: 20px;
  color: #595959;
}

.contain_2 {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
}

.kid {
  display: inline-block;
  height: 50%;
  border-bottom: 2px solid white;
  margin-left: -0.1%;
}

img {
  width: 24.9%;
  height: 250px;
  object-fit: cover;
  margin-left: 0.1%;
}
</style>