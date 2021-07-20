import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/test-one",
    name: "TestOne",
    component: () => import(/* webpackChunkName: "one" */ './test-one.paytmwidget.vue')
  },
  {
    path: "/test-two",
    name: "TestTwo",
    component: () => import(/* webpackChunkName: "two" */ './test-two.paytmwidget.vue')
  },
  {
    path: "/test-three",
    name: "TestThree",
    component: () => import(/* webpackChunkName: "three" */ './test-three.paytmwidget.vue')
  },
  {
    path: "/test",
    name: "Test",
    component: () => import(/* webpackChunkName: "three" */ './test.paytmwidget.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
