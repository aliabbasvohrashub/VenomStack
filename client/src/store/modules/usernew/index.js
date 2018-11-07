import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  messages: [],
  email: '',
  userId: null,
  first: '',
  last: '',
  isLoggedInNew: false,
  loginErrorNew: ''
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
