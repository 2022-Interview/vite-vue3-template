import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
