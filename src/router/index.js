import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    title:"首页",
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    title:"产品中心",
    path:"/product/",
    name:"product",
    is_children_show:false,  // 是否展示二级栏目
    children:[
      {
        title:"安全联锁",
        path:"/interlock/",
        name:"interlock",
        component:() => import('../views/product/interlock/index.vue'),
      },
      {
        title:"安全光栅及控制模块",
        path:"/raster/",
        name:"raster",
        component:() => import('../views/product/raster/index.vue'),
      },
      {
        title:"安全评估",
        path:"/assessment/",
        name:"assessment",
        component:() => import('../views/product/assessment/index.vue'),
      },
    ]
  },
  {
    title:"解决方案",
    path:"/solution/",
    name:"solution",
    is_children_show:false,
    children: [
      {
        title:"电力行业",
        path:"/power/",
        name:"power",
        component:() => import('../views/solution/power/index.vue'),
      },
      {
        title:"轨道交通",
        path:"/traffic/",
        name:"traffic",
        component:() => import('../views/solution/traffic/index.vue'),
      },
      {
        title:"石化行业",
        path:"/Petrochemical/",
        name:"Petrochemical",
        component:() => import('../views/solution/Petrochemical/index.vue'),
      },
      {
        title:"汽车行业",
        path:"/car/",
        name:"car",
        component:() => import('../views/solution/car/index.vue'),
      },
      {
        title:"物流自动化",
        path:"/logistics/",
        name:"logistics",
        component:() => import('../views/solution/logistics/index.vue'),
      },
      {
        title:"食品饮料",
        path:"/food/",
        name:"food",
        component:() => import('../views/solution/food/index.vue'),
      },
      {
        title:"冶金制造业",
        path:"/metallurgy/",
        name:"metallurgy",
        component:() => import('../views/solution/metallurgy/index.vue'),
      },
      {
        title:"公共服务业",
        path:"/service/",
        name:"service",
        component:() => import('../views/solution/service/index.vue'),
      },
    ]
  },
  {
    title:"联系我们",
    path:"/contact/",
    name:"contact",
    component: () => import('../views/contact/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
