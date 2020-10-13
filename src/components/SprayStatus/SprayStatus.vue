<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col">
          <h4>뿌리기 상태 조회</h4>

          <b-form v-on:submit.prevent="getSprayStatus">
            <div class="row">
              <div class="col">
                <b-form-group
                  id="input-group-token"
                  label="Token: "
                  label-for="input-token"
                >
                  <b-form-input
                    id="input-token"
                    v-model="form.token"
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
                    v-model="form.userId"
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
                    v-model="form.roomId"
                    required
                    placeholder="대화방 아이디를 입력하세요."
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <b-button type="submit" variant="primary">조회</b-button>
              </div>
            </div>          
          </b-form>
        </div>
      </div>

      <div class="row" v-show="isShowSprayStatusResult">
        <div class="col">
          <spray-status-result
            v-bind:sprayStatus="sprayStatus"
          ></spray-status-result>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import SprayStatusResult from "./SprayStatusResult.vue";

export default {
  components: {
    SprayStatusResult,
  },
  data: function () {
    return {
      form: {
        token: "",
        userId: "",
        roomId: "",
      },
      isShowSprayStatusResult: false,
      sprayStatus: {
        createdAt: "",
        budget: "",
        paidPrizeMoney: "",
        paymentDetails: [],
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
          vm.isShowSprayStatusResult = true;
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