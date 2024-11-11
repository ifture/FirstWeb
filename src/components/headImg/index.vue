<template>
  <div class="headImg" :style="{ backgroundImage: `url(${props.src})` }">
    <div class="title">
      <div class="content">
        <span class="content_ch">{{ props.contentCn }}</span>
        <span class="content_en">{{ props.contentEn }}</span>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: String,
  contentCn: String,
  contentEn: String,
})
</script>

<style scoped>
.headImg {
  display: flex;
  width: 100%;
  height: 70vh;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
}

.headImg .title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  opacity: 0; /* 初始状态为透明 */
  animation: fadeIn 1s forwards; /* 设置动画效果 */
}

@keyframes fadeIn {
  to {
    opacity: 1; /* 最终状态为不透明 */
  }
}

.headImg .title .content {
  color: aliceblue;
  display: inline-block;
}

.headImg .title .content .content_ch {
  font-size: 3rem;
  font-weight: 800;
}

.headImg .title .content .content_en {
  margin-left: 10px;
  font-size: 1.5rem;
  font-weight: 500;
}

.headImg .title .line {
  display: inline-block;
  width: 55vw;
  height: 3px;
  background-color: aliceblue;
}
</style>