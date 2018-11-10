import Vue from 'vue'
import bcrypt from 'bcryptjs'

const loginUserNew = async ({ commit }, payload) => {
  console.log('should come in action loginUserNew first')
  await Vue.axios.get('/user/email/' + payload.email)
    .then((resp) => {
      let data = resp.data
      if (data && data.length > 0) {
        console.log(data)
        // Test password entered (payload) against user object
        const pwdHash = data[0].password
        // if (bcrypt.compareSync(payload.password, pwdHash)) {
        if (payload.password === pwdHash) {
          const user = data[0]
          payload.userId = user._id
          payload.first = user.first
          payload.last = user.last
          payload.email = user.email
          console.log('payload')
          console.log(payload)
          // payload.userId = '5a777f0a75f64a1698221d98'
          commit('logInUserNew', payload)
        } else {
          commit('loginErrorNew')
        }
      }
    })
    .catch(() => {
      commit('loginErrorNew')
    })
}
const loadUserProfileNew = async ({ commit }) => {
  // get the user object for the currently logged in user...
  await Vue.axios.get('/user/' + this.userId)
    .then((resp) => {
      let data = resp.data
      console.log('loadUserProfile data:', data)
    })
}
const updateUserProfileNew = ({ commit }, payload) => {
  // TODO: encrypt the user's password
  bcrypt.hash(payload.password, 8, (err, hash) => {
    if (!err) {
      payload.password = hash
      console.log('password hash: ', payload.password)
      Vue.axios.put('/user/' + this.state.user.userId, payload)
        .then((resp) => {
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  })
}

export default {
  loginUserNew,
  loadUserProfileNew,
  updateUserProfileNew
}
