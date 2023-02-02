import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
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
  },
  plugins: [createPersistedState()]
})
