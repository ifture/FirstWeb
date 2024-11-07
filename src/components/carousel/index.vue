<template>
  <div class="carousel-container">
    <div class="carousel-images" :style="carouselStyle">
      <slot></slot>
    </div>
    <button class="prev" @click="prevSlide">❮</button>
    <button class="next" @click="nextSlide">❯</button>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect, computed } from 'vue';

// 当前显示的幻灯片索引
const currentSlide = ref(0);
// 图片数量
const imagesCount = ref(0);
let intervalId = null; // 存储自动播放的定时器 ID

// 计算当前幻灯片的位置和过渡样式
const carouselStyle = computed(() => ({
  transform: `translateX(-${currentSlide.value * 100}%)`,
  transition: 'transform 0.5s ease',
}));

// 组件挂载后执行的逻辑
onMounted(() => {
  const container = document.querySelector('.carousel-images');
  imagesCount.value = container ? container.childElementCount : 0; // 获取插入的图片数量
  startAutoPlay(); // 启动自动播放
});

// 启动自动播放功能
const startAutoPlay = () => {
  intervalId = setInterval(nextSlide, 3000);
};

// 停止自动播放功能
const stopAutoPlay = () => {
  clearInterval(intervalId);
};

// 切换到下一张幻灯片
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % imagesCount.value;
};

// 切换到上一张幻灯片
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + imagesCount.value) % imagesCount.value;
};

// 监视当前幻灯片变化，重启自动播放
watchEffect(() => {
  stopAutoPlay();
  startAutoPlay();
});
</script>

<style>
.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.carousel-images {
  display: flex;
  width: 100%;
  height: 100%;
}

.carousel-images img {
  width: 100%;
  height: 100%;
  flex-shrink: 0; /* 防止图片缩小 */
  object-fit: cover;
}

button.prev,
button.next {
  position: absolute;
  top: 50%; /* 垂直居中 */
  transform: translateY(-50%); /* 完全居中对齐 */
  background-color: rgba(255, 255, 255, 0.7); /* 半透明背景 */
  border: none;
  cursor: pointer; /* 鼠标悬停时变为手形光标 */
  padding: 10px;
}

button.prev {
  left: 10px;
}

button.next {
  right: 10px;
}
</style>
