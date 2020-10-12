<template>
  <div>
    뿌리기 상태 조회

    <b-form v-on:submit.prevent="getSprayStatus">
      <label class="sr-only" for="form-input-token">Token</label>
      <b-input
        id="form-input-token"
        placeholder="토큰"
        v-model="form.token"
      ></b-input>

      <label class="sr-only" for="form-input-user-id">User ID</label>
      <b-input
        id="form-input-user-id"
        placeholder="유저 아이디"
        v-model="form.userId"
      ></b-input>

      <label class="sr-only" for="form-input-room-id">Room ID</label>
      <b-input
        id="form-input-room-id"
        placeholder="룸 아이디"
        v-model="form.roomId"
      ></b-input>

      <b-button type="submit" variant="primary">조회</b-button>

      
    </b-form>

    <spray-status-result v-bind:sprayStatus="sprayStatus"></spray-status-result>
    <!-- <b-table striped hover :items="sprayItems"></b-table> -->
  </div>
</template>

<script>
import axios from "axios";

import SprayStatusResult from './SprayStatusResult.vue'

export default {
  components: {
    SprayStatusResult
  },
  data: function () {
    return {
      form: {
        token: "",
        userId: "",
        roomId: "",
      },

      sprayStatus: {
        createdAt: '',
        budget: '',
        paidPrizeMoney: '',
        paymentDetails: []
      },
    };
  },
  methods: {
    getSprayStatus: function () {
      var vm = this;
      
      var config = {
        method: "get",
        url: "http://localhost:8080/spray/" + vm.form.token,
        headers: {
          "X-USER-ID": vm.form.userId,
          "X-ROOM-ID": vm.form.roomId,
        },
      };

      axios
        .request(config)
        .then(function (response) {
          vm.sprayStatus = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>