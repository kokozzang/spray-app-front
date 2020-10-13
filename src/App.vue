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
import SprayMoney from "./components/SprayMoney/SprayMoney.vue";
import SprayStatus from "./components/SprayStatus/SprayStatus.vue";
import SprayItemPrize from "./components/SprayItemPrize/SprayItemPrize.vue";

var router = new VueRouter({
  routes: [
    {
      path: "/spray",
      component: SprayMoney,
    },
    {
      path: "/spraystatus",
      component: SprayStatus,
    },
    {
      path: "/prize-money",
      component: SprayItemPrize,
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