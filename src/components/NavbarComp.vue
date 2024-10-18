<template>
  <div class="main">
    <div class="logo"></div>
    <nav class="navbar">
      <ul class="first_ul">
        <li class="first_li" v-for="route in routes" :key="route.name">
          <span class="line"></span>
          <a class="first" :href="route.path" >{{ route.title }}</a>
          <ul class="children_ul">
            <li class="children_li" v-for="childRoute in route.children" :key="childRoute.name">
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
import {onMounted} from "vue";

const routes = router.options.routes;

// 控制显示二级栏目
onMounted(() => {
  const first = document.querySelectorAll('.first_li');
  first.forEach(item => {
    item.addEventListener('mouseenter', function () {
      const navs = this.querySelector('.children_ul');
      navs.style.display = 'block';
    });
    item.addEventListener('mouseleave', function () {
      const navs = this.querySelector('.children_ul');
      navs.style.display = 'none';
    });
  });
})
</script>

<style scoped>
.main {
  display: flex;
  position: absolute;
  width: 100%;
  height: 120px;
  z-index: 10;
}

.logo {
  display: inline-block;
  width: 200px;
  height: 57px;
  margin-left: 5vw;
  margin-top: 40px;
  background-size: contain;
  background-image: url("../assets/image/logo_white.png");
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
  color: white;
  font-size: 1.2rem;
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
}

.navbar .first_li .first {
  margin-left: 50px;
  margin-right: 50px;
}

.navbar .children_ul {
  display: none;
  padding: 0;
}
.first_ul li:hover.children_ul {
  position: relative;
}


.navbar .children_li {
  margin-top: 20px;
}
</style>