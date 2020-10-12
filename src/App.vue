<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import VueRouter from "vue-router";
import AppHeader from "./components/layout/AppNav.vue";
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
    AppHeader,
  },
  router: router,
};
</script>

<style>
</style>