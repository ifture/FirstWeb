<template>
  <div class="image-hover-container">
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const container = document.querySelector('.image-hover-container');
  const images = container.querySelectorAll('img');

  images.forEach(image => {
    image.addEventListener('mouseenter', () => {
      image.style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseleave', () => {
      image.style.transform = 'scale(1)';
    });
  });
});
</script>

<style>
.image-hover-container img {
  transition: transform 0.3s ease;
}
</style>