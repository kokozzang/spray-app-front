<template>
  <div>
    뿌리기
    <div v-show="isSprayed">
        <b-alert variant="success" v-bind:show="isSpraySuccess">뿌리기 성공! 토큰: {{response.token}}</b-alert>
        <b-alert variant="danger" v-bind:show="!isSpraySuccess">뿌리기 실패</b-alert>
    </div>
    
    <b-form v-on:submit.prevent="sprayMoney">
      <label class="sr-only" for="form-input-user-id">User ID</label>
      <b-input
        id="form-input-user-id"
        placeholder="유저 아이디"
        v-model="userId"
      ></b-input>

      <label class="sr-only" for="form-input-room-id">Room ID</label>
      <b-input
        id="form-input-room-id"
        placeholder="룸 아이디"
        v-model="roomId"
      ></b-input>

      <label class="sr-only" for="form-input-budget">뿌릴 금액</label>
      <b-input id="form-input-budget" placeholder="뿌릴 금액" v-model="budget"></b-input>

      <label class="sr-only" for="form-input-number-of-people">인원수</label>
      <b-input id="form-input-number-of-people" placeholder="인원수" v-model="numberOfPeople"></b-input>

      <b-button type="submit" variant="primary">뿌리기</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      userId: "",
      roomId: "",
      budget: "",
      numberOfPeople: "",
      response: {
          token: ''
      },
      isSpraySuccess: false,
      isSprayed: false
    };
  },
  methods: {
    sprayMoney: function () {
      var vm = this;

      var config = {
        method: 'post',
        url: 'http://localhost:8080/spray',
        headers: {
          'X-USER-ID': vm.userId,
          'X-ROOM-ID': vm.roomId,
        },
        data: {
            budget: vm.budget,
            numberOfPeople: vm.numberOfPeople
        }
      };

      axios
        .request(config)
        .then(function (response) {
          vm.response.token = response.data.data.token;
          vm.isSprayed = true;
          vm.isSpraySuccess = true;
        })
        .catch(function (error) {
          console.error(error);
          vm.isSprayed = true;
          vm.isSpraySuccess = false;
        });
    },
  },
};

</script>

<style>
</style>