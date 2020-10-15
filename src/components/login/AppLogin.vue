<template>
  <div class="text-center">
    <b-form class="form-signin" v-on:submit.prevent="login">
      <img
        class="mb-4"
        src="https://media.tenor.com/images/5b383382c5772096baf2afd6d0c48900/tenor.gif"
        alt=""
        width="72"
        height="72"
      />
      <h1 class="h3 mb-3 font-weight-normal">대화방 입장하기</h1>

      <b-form-group id="input-group-user-id" label-for="input-user-id">
        <b-form-input
          id="input-user-id"
          type="number"
          v-model="userId"
          required
          placeholder="사용자 아이디를 입력하세요."
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-room-id" label-for="input-room-id">
        <b-form-input
          id="input-room-id"
          v-model="roomId"
          required
          placeholder="대화방 아이디를 입력하세요."
        ></b-form-input>
      </b-form-group>

      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
    </b-form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      userId: null,
      roomId: null,
    };
  },
  methods: {
    login: function () {
      var vm = this;
      this.$store.commit("login", {
        userId: vm.userId,
        roomId: vm.roomId,
      });
      this.$router.push({ name: "AppMain" });
      this.$emit('LOGINED');
    },
  },
};
</script>

<style>
</style>