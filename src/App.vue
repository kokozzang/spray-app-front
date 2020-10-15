<template>
  <div id="app">
    <app-nav></app-nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import VueRouter from "vue-router";
import AppNav from "./components/layout/AppNav.vue";
import AppMain from "./components/login/AppMain.vue";
import AppLogin from "./components/login/AppLogin.vue";
import AppLogout from "./components/login/AppLogout.vue";
import SprayMoney from "./components/SprayMoney/SprayMoney.vue";
import SprayStatus from "./components/SprayStatus/SprayStatus.vue";
import SprayItemPrize from "./components/SprayItemPrize/SprayItemPrize.vue";

import store from "./store";

function loginChecker(to, from, next) {
  var isLogin = store.getters.isLogin;
  if (!isLogin) {
    next({ name: "AppLogin" });
  }
  next();
}

var router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "AppMain",
      component: AppMain,
      beforeEnter: loginChecker,
      children: [
        {
          path: "/spray",
          name: "SprayMoney",
          component: SprayMoney,
        },
        {
          path: "/spraystatus",
          name: "SprayStatus",
          component: SprayStatus,
        },
        {
          path: "/prize-money",
          name: "SprayItemPrize",
          component: SprayItemPrize,
        },
      ],
    },
    {
      path: "/login",
      name: "AppLogin",
      component: AppLogin,
      beforeEnter: function (to, from, next) {
        if (store.getters.isLogin) {
          next({ name: "AppMain" });
        }
        next();
      },
    },
    {
      path: "/logout",
      name: "AppLogout",
      component: AppLogout,
      beforeEnter: loginChecker,
    },
  ],
});

export default {
  components: {
    AppNav,
  },
  router: router,
};
</script>

<style>
</style>