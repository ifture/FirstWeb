<template>
  <div class="image-hover-container">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style>
.image-hover-container img {
  transition: transform 0.3s ease;
  object-fit: cover;
}

/* 悬停时缩放效果 */
.image-hover-container img:hover {
  transform: scale(1.1);
}
</style>