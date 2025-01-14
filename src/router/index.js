import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    title:"首页",
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    title:"关于我们",
    path: '/about',
    name: 'about',
    component: () => import('../views/HomeView.vue'),
    children:[
      {
        title:"公司简介",
        path:"/about/company_profile",
        name:"profile",
        component: () => import('../views/HomeView.vue'),
      },
      {
        title:"公司理念",
        path:"/about/company_philosophy",
        name:"philosophy",
        component: () => import('../views/HomeView.vue'),
      }
    ]
  },
  {
    title:"产品中心",
    path:"/product",
    name:"product",
    component: () => import('../views/product/index.vue'),
    children:[
      {
        title:"安全联锁",
        path:"/product/interlock",
        name:"interlock",
        component:() => import('../views/product/index.vue'),
      },
      {
        title:"安全光栅及控制模块",
        path:"/product/raster",
        name:"raster",
        component:() => import('../views/product/index.vue'),
      },
      {
        title:"安全评估",
        path:"/product/assessment",
        name:"assessment",
        component:() => import('../views/product/index.vue'),
      },
    ]
  },
  {
    title:"解决方案",
    path:"/solution",
    name:"solution",
    component:() => import('../views/solution/index.vue'),
    children: [
      {
        title:"电力行业",
        path:"/solution/power",
        name:"power",
        component:() => import('../views/solution/power/index.vue'),
      },
      {
        title:"轨道交通",
        path:"/solution/traffic",
        name:"traffic",
        component:() => import('../views/solution/traffic/index.vue'),
      },
      {
        title:"石化行业",
        path:"/solution/Petrochemical",
        name:"Petrochemical",
        component:() => import('@/views/solution/petrochemical/index.vue'),
      },
      {
        title:"汽车行业",
        path:"/solution/car",
        name:"car",
        component:() => import('../views/solution/car/index.vue'),
      },
      {
        title:"物流自动化",
        path:"/solution/logistics",
        name:"logistics",
        component:() => import('../views/solution/logistics/index.vue'),
      },
      {
        title:"食品饮料",
        path:"/solution/food",
        name:"food",
        component:() => import('../views/solution/food/index.vue'),
      },
      {
        title:"冶金制造业",
        path:"/solution/metallurgy",
        name:"metallurgy",
        component:() => import('../views/solution/metallurgy/index.vue'),
      },
      {
        title:"公共服务业",
        path:"/solution/service",
        name:"service",
        component:() => import('../views/solution/service/index.vue'),
      },
    ]
  },
  {
    title:"联系我们",
    path:"/contact",
    name:"contact",
    component: () => import('../views/contact/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


