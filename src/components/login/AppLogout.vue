<template>
  <div>로그아웃 완료</div>
</template>

<script>
export default {
    created: function(){
        this.logout();
    },
    methods: {
        logout: function () {
            this.$store.commit('logout');
        }
    }
}
</script>

<style>

</style>