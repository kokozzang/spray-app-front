<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">설명</th>
        <th scope="col">값</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">뿌린 시각</th>
        <td>{{ sprayStatus.createdAt }}</td>
      </tr>
      <tr>
        <th scope="row">뿌린 금액</th>
        <td>{{ sprayStatus.budget }}</td>
      </tr>
      <tr>
        <th scope="row">받기 완료된 금액</th>
        <td>{{ sprayStatus.paidPrizeMoney }}</td>
      </tr>
      <tr>
        <th scope="row">받기 완료 상세</th>
        <td>
          <b-table
            striped
            hover
            :items="sprayStatus.paymentDetails"
            :fields="paymentDetailFields"
          ></b-table>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    sprayStatus: {
      type: Object,
    },
  },
  data: function () {
    return {
      paymentDetailFields: [
        { key: "userId", label: "받은 사용자 아이디" },
        { key: "prizeMoney", label: "받은 금액" },
      ],
    };
  },
};
</script>

<style>
</style>