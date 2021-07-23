import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/test-one",
    name: "TestOne",
    component: () => import(/* webpackChunkName: "one" */ './widgets/test-one.paytmwidget.vue')
  },
  {
    path: "/test-two",
    name: "TestTwo",
    component: () => import(/* webpackChunkName: "two" */ './widgets/test-two.paytmwidget.vue')
  },
  {
    path: "/test-three",
    name: "TestThree",
    component: () => import(/* webpackChunkName: "three" */ './widgets/test-three.paytmwidget.vue')
  },
  {
    path: "/test",
    name: "Test",
    component: () => import(/* webpackChunkName: "test" */ './widgets/test.paytmwidget.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
