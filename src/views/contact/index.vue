<template>

  <!--   headImg-开始   -->
  <HeadImg contentCn="联系我们" contentEn="CONTACT US" src="/images/headImg/solution_power.jpg" />
  <!--   headImg-结束   -->



  <!--   联系我们-开始   -->
  <div class="main">
    <div class="left">
      <div class="info">
        <div class="title">{{ info.title }}</div>
        <div class="content">
          <div class="detailInfo">
            <div class="detailInfoItem">地 址：{{ info.address }}</div>
            <div class="detailInfoItem">邮 编：{{ info.postalCode }}</div>
            <div class="detailInfoItem">电 话：{{ info.phone }}</div>
            <div class="detailInfoItem">邮 箱：{{ info.email }}</div>
          </div>
          <div class="line"></div>
          <div class="QR" :style="{ backgroundImage: `url(${info.QR})` }"></div>
        </div>
      </div>
      <div class="img" :style="{ backgroundImage: `url(${info.img})` }"></div>
    </div>
    <div class="right">
      <form class="form">
        <div class="title">在线留言</div>
        <input v-model="form.name" type="text" id="name" placeholder="姓名" required>
        <input v-model="form.phone" type="text" id="phone" placeholder="电话" required>
        <input v-model="form.email" type="email" id="email" placeholder="邮箱" required>
        <textarea v-model="form.content" style="height: 100px; resize: vertical;" type="text" id="content" placeholder="详细内容" required />
        <button type="submit" @click="submit()">提交</button>
      </form>
    </div>
  </div>
  <!--   联系我们-结束   -->

</template>

<script setup>
import HeadImg from '@/components/headImg/index'
import { useStore } from "vuex";
import {reactive} from "vue";

const store = useStore();
const info = store.state.companyInfo.info;

const form = reactive({
  name: "",
  phone: "",
  email: "",
  content: "",
})

function submit() {

}

</script>

<style scoped>
.main {
  display: flex;
  width: 80vw;
  height: 700px;
  margin: 100px auto 100px;
}

.left {
  width: 35vw;
  height: 100%;
  display: inline-block;
}

.left .info {
  width: 100%;
  height: 18%;
  border-top: 1px solid #cacaca;
  border-bottom: 1px solid #cacaca;
  padding: 30px 0;
  background-color: #ffffff;
}

.left .img {
  width: 100%;
  height: 400px;
  margin-top: 5%;
  background-size: cover;
  background-repeat: no-repeat;
}

.info .title {
  font-size: 1.2rem;
  font-weight: 600;
}

.info .content {
  height: 100px;
  display: flex;
  align-items: center;
}

.info .detailInfo {
  flex: 1;
  color: #1c1c1c;
}

.info .line {
  background-color: #cacaca;
  width: 1px;
  height: 90px;
  margin: 0 20px;
}

.info .QR {
  width: 100px;
  height: 100px;
  background-size: cover;
  background-repeat: no-repeat;
}

.right {
  display: inline-block;
  width: 35vw;
  height: 100%;
  margin-left: 10vw;
  box-shadow: 0 5px 20px rgba(128, 128, 128, 0.5);
}

.form {
  width: 80%;
  padding: 3vw;
}

.form .title {
  font-size: 1.2rem;
  font-weight: 600;
}

input, textarea {
  width: 100%;
  display: block;
  padding: 8px;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  background-color: #007bff;
  color: white;
  width: 100px;
  padding: 10px 15px;
  margin-top: 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>