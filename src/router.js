import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: () => import("./views/Homepage.vue"),
      meta: { transition: "overlay-right-full" }
    },
    {
      path: "/anime/:id",
      name: "anime.detail",
      component: () => import("./views/DetailAnime.vue"),
      meta: { transition: "overlay-left-full" }
    }
  ]
});
