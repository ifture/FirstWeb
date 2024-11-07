<template>
  <div class="main" :class="{ scrolled: isScrollPastThreshold }">
    <div class="logo" :style="{ backgroundImage: logoImage }"></div>
    <nav class="navbar">
      <ul class="first_ul">
        <li
            class="first_li"
            v-for="route in routes"
            :key="route.name"
            @mouseenter="openSubMenu(route.name)"
            @mouseleave="closeSubMenu"
        >
          <span class="line"></span>
          <a class="first" :href="route.path">{{ route.title }}</a>
          <ul class="children_ul" v-if="isSubMenuOpen(route.name)">
            <li
                class="children_li"
                v-for="childRoute in route.children"
                :key="childRoute.name"
            >
              <a :href="childRoute.path">{{ childRoute.title }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import router from "@/router";
import { onMounted, ref } from "vue";

// 从路由模块获取路由配置
const routes = router.options.routes;

// 表示是否滚动超过特定阈值
const isScrollPastThreshold = ref(false);
// 滚动阈值
const scrollThreshold = 20;
// 存储当前鼠标悬停的一级菜单路由名称
const activeRouteName = ref("");
// logo 的背景图片 URL
const logoImage = ref("url('/images/logo_1.png')");

// 判断二级菜单是否应显示
function isSubMenuOpen(routeName) {
  return activeRouteName.value === routeName;
}

// 鼠标悬停在一级菜单时设置激活路由对象
function openSubMenu(routeName) {
  activeRouteName.value = routeName;
}

// 鼠标离开一级菜单区域时隐藏二级菜单
function closeSubMenu() {
  activeRouteName.value = null;
}

onMounted(() => {
  // 页面加载完成后为窗口添加滚动事件监听器
  window.addEventListener('scroll', handleScroll);
});

// 处理窗口滚动事件
function handleScroll() {
  const currentScrollY = window.scrollY;
  if (currentScrollY > scrollThreshold &&!isScrollPastThreshold.value) {
    // 滚动超过阈值时更新状态和 logo 图片
    isScrollPastThreshold.value = true;
    logoImage.value = "url('/images/logo_2.png')";
  } else if (currentScrollY <= scrollThreshold && isScrollPastThreshold.value) {
    // 滚动未超过阈值且之前超过时恢复状态和 logo 图片
    isScrollPastThreshold.value = false;
    logoImage.value = "url('/images/logo_1.png')";
  }
}
</script>

<style scoped>
.main {
  display: flex;
  position: fixed;
  width: 100%;
  height: 120px;
  z-index: 10;
  transition: background-color 0.3s ease;
}

.scrolled {
  background-color: #0c3c5a;
}

/* 动态样式 */
.main:hover .logo {
  background-image: url("../../../public/images/logo_2.png") !important;
}

.main:hover {
  background-color: #0c3c5a !important;
}
/* 动态样式 */

.logo {
  display: inline-block;
  width: 230px;
  height: 60px;
  margin-left: 5vw;
  margin-top: 30px;
  background-size: cover;
  background-image: url("../../../public/images/logo_1.png");
  transition: background-image 0.3s ease;
}

.navbar {
  display: inline-block;
  position: relative;
  width: 80vw;
  text-align: center;
}

.navbar ul {
  list-style: none;
}

.navbar a {
  text-decoration: none;
  color:white;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.navbar .first_ul {
  display: flex;
  float: right;
  margin-top: 50px;
}

.navbar .first_li {

}

.navbar .first_li .line {
  display: inline-block;
  width: 1px;
  height: 15px;
  background-color: white;
  transition: background-image 0.3s ease;
}

.navbar .first_li .first {
  margin-left: 60px;
  margin-right: 60px;
}

.navbar .children_ul {
  display: block;
  padding: 0;
  margin-top: 45px;
  background-color: #0c3c5a;
  transition: background-image 0.3s ease;
}

.navbar .children_li {
  height: 50px;
}
</style>