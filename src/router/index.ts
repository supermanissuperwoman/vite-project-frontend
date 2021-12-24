import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    component: () => import("../views/login/VLogin.vue"),
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/index",
    component: () => import("../views/index/VInex.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
