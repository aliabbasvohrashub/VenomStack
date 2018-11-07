import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import transactions from './modules/transactions'

import usernew from './modules/usernew'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    transactions,
    usernew
  }
})
