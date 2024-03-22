import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const rootRoutes: RouteRecordRaw[] = [
  {
    path: "home",
    name: "Home",
    component: () => import("@/views/HomePage/HomePage.vue"),
    redirect: "/home/discover",
    children: [
      {
        path: "discover",
        name: "Discover",
        component: () => import("@/views/HomeDiscover/HomeDiscover.vue"),
      },
      {
        path: "follow",
        name: "Follow",
        component: () => import("@/views/HomeFollow/HomeFollow.vue"),
      },
      {
        path: "near",
        name: "Near",
        component: () => import("@/views/HomeNear/HomeNear.vue"),
      },
    ]
  },
]

const routes: RouteRecordRaw[] = [
    {
      path: "/",
      name: "App",
      component: () => import("@/views/TheRoot.vue"),
      redirect: "/home",
      children: rootRoutes,
    },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router
  