<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col">
          <h4>뿌리기 받기</h4>

          <div v-show="isPrized">
            <b-alert variant="success" v-bind:show="isPrizeSuccess">뿌리기 받기 성공! 당첨금: {{ response.prizeMoney }}</b-alert>
            <b-alert variant="danger" v-bind:show="!isPrizeSuccess">뿌리기 받기 실패</b-alert>
          </div>

          <b-form v-on:submit.prevent="prizeMoney">
            <div class="row">
              <div class="col">
                <b-form-group
                  id="input-group-token"
                  label="Token: "
                  label-for="input-token"
                >
                  <b-form-input
                    id="input-token"
                    v-model="token"
                    required
                    placeholder="토큰을 입력하세요."
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <b-form-group
                  id="input-group-user-id"
                  label="User ID: "
                  label-for="input-user-id"
                >
                  <b-form-input
                    id="input-user-id"
                    type="number"
                    v-model="userId"
                    required
                    placeholder="사용자 아이디를 입력하세요."
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <b-form-group
                  id="input-group-room-id"
                  label="Room ID: "
                  label-for="input-room-id"
                >
                  <b-form-input
                    id="input-room-id"
                    v-model="roomId"
                    required
                    placeholder="대화방 아이디를 입력하세요."
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <b-button type="submit" variant="primary">받기</b-button>
              </div>
            </div>          

          </b-form>

        </div>
      </div>
    </div>
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