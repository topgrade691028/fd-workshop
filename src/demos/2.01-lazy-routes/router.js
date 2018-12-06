import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("./Home")
    },
    {
      path: "/1.01-scroll",
      component: () => import("./demos/1.01-scroll/Inheritance")
    },
    {
      path: "/1.02-scroll-component",
      component: () => import("./demos/1.02-scroll-component")
    },
    {
      path: "/1.03-adaptive-multiselect",
      component: () => import("./demos/1.03-adaptive-multiselect")
    },
    {
      path: "/1.04-modal",
      component: () => import("./demos/1.04-modal")
    },
    {
      path: "/1.05-search",
      component: () => import("./demos/1.05-search")
    }
  ]
});
