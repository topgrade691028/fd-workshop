import Vue from "vue";
import Router from "vue-router";
import Home from "./Home";
import Demo_1_01_Scroll from "./demos/1.01-scroll/Inheritance";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/1.01-scroll",
      component: Demo_1_01_Scroll
    }
  ]
});
