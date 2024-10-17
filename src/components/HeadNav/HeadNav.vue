<script>
export default {
  name: 'HeadNav',
  mounted() {
    window.addEventListener('scroll', () => {
      const head = document.querySelector('.head');
      if (window.scrollY > 0) {
        head.classList.add('scrolled');
      } else {
        head.classList.remove('scrolled');
      }
    });
    const first = document.querySelectorAll('.li-first');
    first.forEach(item => {
      item.addEventListener('mouseenter', function () {
        const navs = this.querySelector('.nav-sub');
        navs.style.display = 'block';
      });
      item.addEventListener('mouseleave', function () {
        const navs = this.querySelector('.nav-sub');
        navs.style.display = 'none';
      });
    });
  }
};
</script>

<template>
<div class="head">
  <div class="header">
    <div class="logo-img"><img src="../../assets/image/logo.png"></div>
    <div class="logo-name">上海某公司</div>
  </div>
  <nav>
    <ul class="nav-first">
      <li class="lif">首页</li>
      <li class="lif li-first">关于我们
        <ul class="nav-sub">
          <li>公司简介</li>
          <li>公司理念</li>
        </ul>
      </li>
      <li class="lif li-first">产品中心
        <ul class="nav-sub">
          <li>安全联锁</li>
          <li>安全光栅及控制模块</li>
          <li>安全评估</li>
        </ul>
      </li>
      <li class="lif li-first">解决方案
        <ul class="nav-sub">
          <li>电力行业</li>
          <li>轨道交通</li>
          <li>石化行业</li>
          <li>汽车行业</li>
          <li>物流自动化</li>
          <li>食品饮料</li>
          <li>冶金制造业</li>
          <li>公共服务业</li>
        </ul>
      </li>
      <li class="lif">联系我们</li>
    </ul>
  </nav>
</div>
</template>

<style scoped>
@font-face {
  /* 字魂风行手书 */
  font-family: 'artword1';
  src: url('../../assets/fonts/artword1.ttf') format('ttf');
  font-weight: normal;
  font-style: oblique;
}
li{
  position: relative;
  z-index: 2;
  list-style-type: none;
}
.head{
  width: 100%;
  height: 10vh;
  display: flex;
  position:fixed;
  background-color: rgba(255, 255, 255, 0);
  transition: background-color 0.5s ease;
  z-index: 1;
}
.head.scrolled {
  border:1px solid rgba(161, 194, 218, 0.6);
  background-color: rgb(255, 255, 255);
}
.head:hover .header,
.head:hover nav {
  background-color: #ffffff;
}
.header{
  display: flex;
  align-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  top: 0;
  padding-left: 3vw;
  transition: background-color 0.5s ease;
}
.logo-img{
  width: 5vw;
}
.logo-img img{
  width: 100%;
  height: auto;
}
.logo-name{
  font-family: "artword1",sans-serif;
  color: #b8b6b6;
  font-size: 2vw;
}
nav{
  display: flex;
  transition: background-color 0.5s ease;
}
.nav-first{
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav-first li {
  display: inline-block;
  position: relative;
  padding-right: 10px;
  margin-right: 5px;
  white-space: nowrap;
}
.nav-first .lif:not(:last-child):after {
  content: "|";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.nav-sub{
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(3, 47, 83, 0.7);
  padding: 5px 5px 5px 15px;
  text-align: center;
  width: fit-content; /* 让二级菜单宽度自适应内容 */
}
.nav-first li:hover.nav-sub{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
}
.nav-sub li {
  display: block; /* 让 <li> 以块级元素显示，从而实现竖直排列 */
}

</style>