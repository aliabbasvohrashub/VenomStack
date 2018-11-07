import Vue from 'vue'
// import bcrypt from 'bcryptjs'

const state = {
  email: '',
  userId: null,
  first: '',
  last: '',
  isLoggedIn: false,
  loginError: ''
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  userId: state => state.userId,
  loginError: state => state.loginError
}

const actions = {
  async logInUser ({ commit }, payload) {
    console.log(Vue.axios.baseURL)
    await Vue.axios.get('/user/email/' + payload.email)
      .then((resp) => {
        let data = resp.data
        if (data && data.length > 0) {
          console.log(data)
          const pwd = data[0].password
          if (payload.password === pwd) {
            console.log('password check passed')
            const user = data[0]
            payload.email = user.email
            payload.userId = user._id
            payload.first = user.first
            payload.last = user.last
            commit('logInUser', payload)
          } else {
            commit('loginError')
          }
        }
      })
      .catch(() => {
        commit('loginError')
      })
  }
}

const mutations = {
  logInUser (state, payload) {
    state.isLoggedIn = true
    state.email = payload.email
    state.first = payload.first
    state.last = payload.last
    state.userId = payload.userId
    console.log('state filled with user info')
    console.log(state)
  },
  loginError (state) {
    state.isLoggedIn = false
    state.loginError = 'Email and/or Password supplied incorrect. Login failed'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
