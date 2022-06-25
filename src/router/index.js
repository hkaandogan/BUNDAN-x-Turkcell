import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Menu",
      component: ()=> import("../views/Menu.vue"),
    },
  ],
  mode: "history"
});



export default router;

