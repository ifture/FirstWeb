<template>
  <div class="foot">
    <div class="contact_information">
      <div class="title">联系方式</div>
      <div class="info">
        <div class="icon"><el-icon><Phone /></el-icon></div>
        <div class="content">联系电话: {{ store.state.foot.phone }}</div>
      </div>
      <div class="info">
        <div class="icon"><el-icon><Message /></el-icon></div>
        <div class="content">Email: {{ store.state.foot.email }}</div>
      </div>
      <div class="info">
        <div class="icon"><el-icon><Location /></el-icon></div>
        <div class="content">地址: {{ store.state.foot.address }}</div>
      </div>
    </div>
    <div class="bottom_navbar">
      <div class="title">底部导航</div>
      <ul class="content">
        <li class="content_li" v-for="route in routes" :key="route.name">
          <a style="font-size: 1.2rem;" :href ="route.path">
            {{ route.title }}
          </a>
          <ul class="children" v-if="route.children">
            <li class="children_li" v-for="childRoute in route.children" :key="childRoute.name">
              <a :href="childRoute.path">
                {{ childRoute.title }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="QR">
      <div class="title">更好关注</div>
      <img class="QR_code" src="../assets/image/home/foot/QR.png" alt="QR Code" />
      <div class="scan">扫一扫</div>
    </div>
  </div>
</template>

<script setup>
import {Location, Message, Phone} from "@element-plus/icons-vue";
import router from "@/router";
import { useStore } from "vuex";

const routes = router.options.routes;
const store = useStore();
</script>

<style scoped>
.foot {
  display: flex;
  position: relative;
  width: 100%;
  height: 55vh;
  background-image: url("../assets/image/home/foot/bg.png");
  background-color: #0c3c5a;
  background-repeat: no-repeat;
  background-position: center;
}

.title {
  font-size: 1.5rem;
  font-weight: 550;
}

/* 以下是联系方式的样式 */
.contact_information {
  display: inline-block;
  position: relative;
  width: 20%;
  color: white;
}

.contact_information .title {
  margin-left: 6.5vw;
  margin-top: 80px;
}

.contact_information .info {
  display: flex;
  margin-left: 3vw;
  margin-top: 40px;
}

.contact_information .icon {
  display: inline-block;
  color: #fecc37;
  width: 30px;
}

.contact_information .content {
  display: inline-block;
  margin-left: 10px;
}

/* 以下是底部导航的样式 */
.bottom_navbar {
  display: inline-block;
  width: 60%;
  margin-top: 80px;
  color: white;
  text-align: center;
}

.bottom_navbar ul {
  list-style: none;
}

.bottom_navbar a {
  text-decoration: none;
  color: white;
}

.bottom_navbar .title {

}

.bottom_navbar .content {
  margin-top: 40px;
  display: flex;
  width: 100%;
}

.bottom_navbar .content .content_li {
  width: 25%;
}

.bottom_navbar .children {
  display: flex;
  width: 100%;
  margin-top: 10px;
  flex-direction: column;
  padding: 0;
}

.bottom_navbar .children .children_li {
  margin-top: 20px;
  width: 100%;
}

/* 以下是二维码的样式 */
.QR {
  display: inline-block;
  width: 20%;
  margin-top: 80px;
  color: white;
  text-align: center;
}

.QR .QR_code {
  margin-top: 40px;
  width: 150px;
}

.QR .scan {
  margin-top: 40px;
}
</style>