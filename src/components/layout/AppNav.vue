<template>
  <div>
    <!-- As a link -->
    <b-navbar variant="info" type="dark">
      <b-navbar-brand>
          <router-link to="/">뿌리기 앱</router-link>
          </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/spray">뿌리기</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/spraystatus">뿌리기 상태 조회</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/prize-money">뿌리기 받기</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>