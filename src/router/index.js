import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
  ],
});
