import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录成功的token值
    token: ''
  },
  getters: {
  },
  mutations: {
    updateToken (token, newToken) {
      // eslint-disable-next-line no-undef
      state.token = newToken
    }
  },
  actions: {
  },
  modules: {
  }
})
