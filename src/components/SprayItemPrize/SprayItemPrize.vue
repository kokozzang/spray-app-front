<template>
  <div>
    뿌리기 받기
    <div v-show="isPrized">
      <b-alert variant="success" v-bind:show="isPrizeSuccess">뿌리기 받기 성공! 당첨금: {{ response.prizeMoney }}</b-alert>
      <b-alert variant="danger" v-bind:show="!isPrizeSuccess">뿌리기 받기 실패 {{}}</b-alert>
    </div>


    <b-form v-on:submit.prevent="prizeMoney">
      <label class="sr-only" for="form-input-token">토큰</label>
      <b-input
        id="form-input-token"
        placeholder="토큰"
        v-model="token"></b-input>

      <label class="sr-only" for="form-input-user-id">User ID</label>
      <b-input
        id="form-input-user-id"
        placeholder="유저 아이디"
        v-model="userId"></b-input>

      <label class="sr-only" for="form-input-room-id">Room ID</label>
      <b-input
        id="form-input-room-id"
        placeholder="룸 아이디"
        v-model="roomId"></b-input>

      <b-button type="submit" variant="primary">뿌리기 받기</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      token: '',
      userId: '',
      roomId: '',
      response: {
        prizeMoney: ''  // 당첨금
      },
      isPrizeSuccess: false,
      isPrized: false
    }
  },
  methods: {
    prizeMoney: function () {
      var vm = this;

      var config = {
        method: 'post',
        url: 'http://localhost:8080/spray/' + vm.token + '/prize-money',
        data: {
          token: vm.token,

        },
        headers: {
          'X-USER-ID': vm.userId,
          'X-ROOM-ID': vm.roomId,
        },
      }

      axios.request(config)
        .then(function(response) {
          vm.response.prizeMoney = response.data.data.prizeMoney;
          vm.isPrized = true;
          vm.isPrizeSuccess = true;
        }).catch(function(error) {
          console.error(error);
          vm.isPrized = true;
          vm.isPrizeSuccess = false;
        })

    },
  },
};
</script>

<style>
</style>