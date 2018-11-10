import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import transactions from './modules/transactions'
import transactionsnew from './modules/transactionsnew'

import usernew from './modules/usernew'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    transactions,
    usernew,
    transactionsnew
  }
})
