
const logInUserNew = (state, payload) => {
  console.log('should come in mutation loginUserNew second time')
  state.isLoggedInNew = true
  state.email = payload.email
  state.first = payload.first
  state.last = payload.last
  state.userId = payload.userId
  console.log(state)
}
const loginErrorNew = (state) => {
  state.isLoggedInNew = false
  state.loginErrorNew = 'Email and/or Password are invalid. Login failed.'
}
export default {
  logInUserNew,
  loginErrorNew
}
