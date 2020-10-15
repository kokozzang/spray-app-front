<template>
  <div class="row">
    <div class="col">
      <b-list-group style="max-width: 300px">
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            class="mr-3"
            src="https://i.pinimg.com/originals/ce/e9/73/cee973a58e0631cd50c67be3616a1c2e.jpg"
          ></b-avatar>
          <span class="mr-auto">{{ $store.getters.getUserId }}</span>
          <b-badge>Room ID: {{ $store.getters.getRoomId }}</b-badge>
        </b-list-group-item>
      </b-list-group>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  created: function () {
    var isLogin = this.fetchLoginStatus();
    if (!isLogin) {
      this.$router.push({ name: "AppLogin" });
    }
  },
  methods: {
    fetchLoginStatus: function () {
      return this.$store.getters.isLogin;
    },
  },
};
</script>

<style>
</style>