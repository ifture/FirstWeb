<template>
  <div class="container">
    <div class="bgImg" :style="{ backgroundImage: `url(${props.src})` }"></div>
    <div class="card">
      <div class="titleEn">{{ props.titleEn }}</div>
      <div class="titleCn">{{ props.titleCn }}</div>
      <div class="line"></div>
      <div class="content">{{ props.content }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: String,
  titleEn: String,
  titleCn: String,
  content: String,
})
</script>

<style scoped>
.container {
  position: relative;
  margin-left: 10vw;
  margin-top: 100px;
  width: 80vw;
  height: 800px;
}

.bgImg {
  position: absolute;
  width: 100%;
  height: 600px;
  background-size: cover;
  background-repeat: no-repeat;
}

.card {
  position: absolute;
  width: 41vw;
  height: 200px;
  padding: 50px;
  margin-top: 400px;
  margin-left: 500px;
  background-color: white;
}

.card .titleEn {
  color: #595959;
}

.card .titleCn {
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: 600;
}

.card .line {
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #0c3c5a;
  height: 2px;
  width: 70px;
}

.card .content {
  color: #393939;
  line-height: 2;   /* 设置行距为 2 倍字体大小 */
  text-indent: 2em; /* 设置首行缩进为 2 个字符的宽度 */
  max-height: 10em; /* 设置最大高度 */
  overflow: hidden;
}
</style>