<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col">
          <h4>뿌리기</h4>

          <div v-show="isSprayed">
            <b-alert variant="success" v-bind:show="isSpraySuccess"
              >뿌리기 성공! 토큰: {{ response.token }}</b-alert
            >
            <b-alert variant="danger" v-bind:show="!isSpraySuccess"
              >뿌리기 실패</b-alert
            >
          </div>

          <b-form v-on:submit.prevent="sprayMoney">
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
                <b-form-group
                  id="input-group-room-budget"
                  label="뿌릴 금액: "
                  label-for="input-room-budget"
                >
                  <b-form-input
                    id="input-room-budget"
                    type="number"
                    v-model="budget"
                    required
                    placeholder="뿌릴 금액을 입력하세요."
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <b-form-group
                  id="input-group-number-of-people"
                  label="인원수: "
                  label-for="input-number-of-people"
                >
                  <b-form-input
                    id="input-number-of-people"
                    type="number"
                    v-model="numberOfPeople"
                    required
                    placeholder="인원수를 입력하세요."
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <b-button type="submit" variant="primary">뿌리기</b-button>
              </div>
            </div>
          </b-form>
        </div>
      </div>
    </div>
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
        token: "",
      },
      isSpraySuccess: false,
      isSprayed: false,
    };
  },
  methods: {
    sprayMoney: function () {
      var vm = this;

      var config = {
        method: "post",
        url: "http://localhost:8080/spray",
        headers: {
          "X-USER-ID": vm.userId,
          "X-ROOM-ID": vm.roomId,
        },
        data: {
          budget: vm.budget,
          numberOfPeople: vm.numberOfPeople,
        },
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