<template>
  <div>
    <!--   headImg-开始   -->
    <headImg contentCn="产品中心" contentEn="PRODUCT CENTER" src="/images/headImg/product_interlock.jpg"/>
    <!--   headImg-结束   -->



    <!--   head-开始   -->
    <div class="head">
      <div v-for="(item, index) in productRouter" :key="index" class="head_child" :class="{ 'head_child_active': onActiveHead === item.name }" @click="active(item)">{{ item.title }}</div>
    </div>
    <!--   head-结束   -->



    <!--   main-开始   -->
    <div class="main" v-if="onActiveHead === 'interlock'">
      <div class="main_child" v-for="interlock of store.state.product.interlock" :key="interlock.title">
        <div class="title">{{ interlock.title }}</div>
        <div class="content">{{ interlock.content }}</div>
        <div class="icon"><el-icon><ArrowRight /></el-icon></div>
        <img class="product_img" :src=interlock.imgUrl alt="interlock"/>
      </div>
    </div>
    <div class="main" v-if="onActiveHead === 'raster'">
      <div class="main_child" v-for="raster of store.state.product.raster" :key="raster.title">
        <div class="title">{{ raster.title }}</div>
        <div class="content">{{ raster.content }}</div>
        <div class="icon"><el-icon><ArrowRight /></el-icon></div>
        <img class="product_img" :src=raster.imgUrl alt="raster"/>
      </div>
    </div>
    <div class="main" v-if="onActiveHead === 'assessment'">
      <div class="main_child" v-for="assessment of store.state.product.assessment" :key="assessment.title">
        <div class="title">{{ assessment.title }}</div>
        <div class="content">{{ assessment.content }}</div>
        <div class="icon"><el-icon><ArrowRight /></el-icon></div>
        <img class="product_img" :src=assessment.imgUrl alt="assessment"/>
      </div>
    </div>
    <!--   main-结束   -->

  </div>
</template>

<script setup>
import headImg from  '@/components/headImg'
import {ArrowRight} from "@element-plus/icons-vue";
import { ref } from "vue";
import { useStore } from "vuex";
import router from "@/router";

const store = useStore();
const productRouter = router.options.routes[2].children;  // 产品中心二级路由

// 默认激活安全联锁页面
let onActiveHead = ref("interlock");

// 激活函数
const active = (item) => {
  onActiveHead.value = item.name
  router.push({name: item.name})  // 没什么用，就为了路径上看起来是对的，实际上都是同一个页面
}

// 路由跳转时的相关页面激活
let path = router.currentRoute.value.fullPath;
if (path === '/product/interlock') onActiveHead.value = 'interlock';
if (path === '/product/raster') onActiveHead.value = 'raster';
if (path === '/product/assessment') onActiveHead.value = 'assessment';
</script>

<style scoped>
/* head 样式 */
.head {
  display: flex;
  width: 100%;
  height: 150px;
  justify-content: space-evenly;
  align-items: center;
}

.head .head_child {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #cacaca;
  width: 200px;
  height: 50px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #393939;
  cursor: pointer;
}

.head_child_active {
  color:white!important;
  background-color: #0c3c5a!important;
}

.head .head_child:hover {
  color: #0c3c5a;
  border: 2px solid #0c3c5a;
}

/* main 样式 */
.main {
  display: flex;
  width: 100%;
  height: 70vh;

}

.main .main_child {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  height: 100%;
  text-align: center;
  border-left: 1px solid #cacaca;
  border-top: 1px solid #cacaca;
  border-bottom: 1px solid #cacaca;
  transition: background-color 0.5s, transform 0.5s;
}

.main .main_child:hover {
  cursor: pointer;
  background-color: #a19ea1;
}

.main_child .title {
  width: 33%;
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 50px;
}

.main_child .content {
  width: 50%;
  font-size: 0.9rem;
  color: #393939;
  margin-top: 25px;
}

.main_child .icon {
  width: 30px;
  height: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.main_child .product_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>