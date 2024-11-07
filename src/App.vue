<template>
  <!--  导航栏开始  -->
  <NavbarComp/>
  <!--  导航栏结束  -->

  <router-view/>

  <!--   页尾-开始   -->
  <FootComp></FootComp>
  <!--   页尾-结束   -->
</template>

<script setup>
import NavbarComp from "@/components/navbar/index.vue";
import FootComp from "@/components/foot/index.vue";

</script>

<style>

</style>
