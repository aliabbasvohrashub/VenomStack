import Vue from 'vue'
const getTransactionsByMonthNew = ({ commit, state, rootState }, payload) => {
  // Make API call... Pass in selected Month and Year + UserId in hearder...
  // Once transaction data is retrieved... commit the mutation to update state...
  console.log('action call getTransactionsByMonthNew')
  if (rootState.user.userId === null) {
    console.log('came at right place in Tnew')
    rootState.user = {
      isLoggedInNew: true,
      email: rootState.usernew.email,
      first: rootState.usernew.first,
      last: rootState.usernew.last,
      userId: rootState.usernew.userId
    }
    console.log('rootstate.user')
    console.log(rootState.user)
  }
  Vue.axios.get('/transaction/' + state.currentYearNew + '/' + state.currentMonthNew,
    {headers: { 'userId': rootState.user.userId }})
    .then((resp) => {
      let data = resp.data
      if (data && data.length > 0) {
        console.log('transactionsByMonthNew commit called with length ')
        console.log(data.length)
        commit('transactionsByMonthNew', data)
      }
    })
    .catch((err) => {
      console.log('Darn! There was an error getting transactions by month: ' + err)
    })
}
const getPreviousMonthsBalancesNew = ({ commit, state, rootState }, payload) => {
  console.log('transactionsByMonthNew commit called with length 0')
  commit('transactionsByMonthNew', [])
  // Make API call... Pass in selected Month and Year + UserId in hearder...
  console.log('rootState')
  console.log(rootState)
  console.log('state')
  console.log(state)
  // console.log(rootState.user.userId)
  // console.log(state.user.userId)
  Vue.axios.get('/transaction/balance/' + state.currentYearNew + '/' + state.currentMonthNew,
    {headers: { 'userId': rootState.usernew.userId }})
    .then((resp) => {
      console.log('GET transaction/balance', resp)
      let data = resp.data
      if (data && data.length > 0) {
        commit('balanceChargesNew', data[0].charges)
        commit('balanceDepositsNew', data[0].deposits)
      } else {
        commit('balanceChargesNew', 0)
        commit('balanceDepositsNew', 0)
      }
    })
    .catch((err) => {
      console.log('getPreviousMonthsBalancesNew Darn! There was an error getting balances: ' + err)
    })
}
const gotoMonthNew = async ({ commit }, increment) => {
  commit('gotoMonthNew', increment)
}
const gotoCurrentMonthNew = async ({ commit }) => {
  commit('gotoCurrentMonthNew')
}
const saveTransactionNew = ({ commit, dispatch, state, rootState }, transaction) => {
  // Add the logged in userId to the transaction payload...
  transaction.userId = rootState.user.userId

  Vue.axios.post('/transaction', transaction)
    .then((resp) => {
      dispatch('getTransactionsByMonthNew').then(() => {
        dispatch('getPreviousMonthsBalancesNew')
      })
    })
    .catch((err) => {
      console.log('Error saving transaction')
      console.log(err)
    })
}

export default {
  getTransactionsByMonthNew,
  getPreviousMonthsBalancesNew,
  gotoMonthNew,
  gotoCurrentMonthNew,
  saveTransactionNew
}
