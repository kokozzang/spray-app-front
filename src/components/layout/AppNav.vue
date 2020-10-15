<template>
  <div>
    <b-navbar toggleable="lg" variant="dark" type="light">
      <b-navbar-brand>
        
          <router-link to="/">
          <img width="20%" src="https://media.tenor.com/images/5b383382c5772096baf2afd6d0c48900/tenor.gif" class="d-inline-block" alt="Kitten">
뿌리기 앱</router-link>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link :to="{name: 'SprayMoney'}">뿌리기</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{name: 'SprayItemPrize'}">뿌리기 받기</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{name: 'SprayStatus'}">뿌리기 상태 조회</router-link>
          </b-nav-item>
          <b-nav-item v-show="isLogin()">
            <router-link :to="{name: 'AppLogout'}">나가기</router-link>
          </b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    isLogin: function () {
        return this.$store.getters.isLogin;
      }
  }
};
</script>

<style>
</style>