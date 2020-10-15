import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    isLogin: false,
    userId: '',
    roomId: ''
  },
  getters: {
    isLogin(state) {
      return state.isLogin;
    },
    getUserId(state) {
      return state.userId;
    },
    getRoomId(state) {
      return state.roomId;
    }
  },
  mutations: {
    login (state, user) {
      console.log(user.userId + user.roomId)
      state.isLogin = true;
      state.userId = user.userId;
      state.roomId = user.roomId;
      
    },
    logout (state) {
      state.isLogin = false;
      state.userId = '';
      state.roomId = '';
    }
  }
});