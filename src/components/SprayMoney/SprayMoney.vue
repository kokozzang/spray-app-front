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
              >뿌리기 실패! {{errorMessage}}</b-alert
            >
          </div>

          <b-form v-on:submit.prevent="sprayMoney">
            
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
      budget: "",
      numberOfPeople: "",
      response: {
        token: "",
      },
      isSpraySuccess: false,
      isSprayed: false,
      errorMessage: ''
    };
  },
  methods: {
    sprayMoney: function () {
      var vm = this;

      var config = {
        method: "post",
        url: "http://localhost:8080/spray",
        headers: {
          "X-USER-ID": vm.$store.getters.getUserId,
          "X-ROOM-ID": vm.$store.getters.getRoomId
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
          vm.isSprayed = true;
          vm.isSpraySuccess = false;
          vm.errorMessage = error.response.data.message;
        });
    },
  },
};
</script>

<style>
</style>