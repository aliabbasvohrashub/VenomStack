
const getTransactionsByMonth = ({ commit, state, rootState }, payload) => {
  // Make API call... Pass in selected Month and Year + UserId in hearder...
  // Once transaction data is retrieved... commit the mutation to update state...
  console.log('came at getTransactionsByMonth')
  console.log(rootState.user.userId)
  if (rootState.user.userId === null) {
    console.log('came at right place')
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

  console.log('state')
  console.log(state)
  console.log('rootState')
  console.log(rootState)
  console.log('rootState.user.userId')
  console.log(rootState.user.userId)

  Vue.axios.get('/transaction/' + state.currentYear + '/' + state.currentMonth,
    {headers: { 'userId': rootState.user.userId }})
    .then((resp) => {
      let data = resp.data
      if (data && data.length > 0) {
        commit('transactionsByMonth', data)
      }
    })
    .catch((err) => {
      console.log('Darn! There was an error getting transactions by month: ' + err)
    })
}
const getPreviousMonthsBalances = ({ commit, state, rootState }, payload) => {
  commit('transactionsByMonth', [])
  // Make API call... Pass in selected Month and Year + UserId in hearder...
  Vue.axios.get('/transaction/balance/' + state.currentYear + '/' + state.currentMonth,
    {headers: { 'userId': rootState.user.userId }})
    .then((resp) => {
      console.log('GET transaction/balance', resp)
      let data = resp.data
      if (data && data.length > 0) {
        commit('balanceCharges', data[0].charges)
        commit('balanceDeposits', data[0].deposits)
      } else {
        commit('balanceCharges', 0)
        commit('balanceDeposits', 0)
      }
    })
    .catch((err) => {
      console.log('Darn! There was an error getting balances: ' + err)
    })
}
const gotoMonth = async ({ commit }, increment) => {
  commit('gotoMonth', increment)
}
const gotoCurrentMonth = async ({ commit }) => {
  commit('gotoCurrentMonth')
}
const saveTransaction = ({ commit, dispatch, state, rootState }, transaction) => {
  // Add the logged in userId to the transaction payload...
  transaction.userId = rootState.user.userId

  Vue.axios.post('/transaction', transaction)
    .then((resp) => {
      dispatch('getTransactionsByMonth').then(() => {
        dispatch('getPreviousMonthsBalances')
      })
    })
    .catch((err) => {
      console.log('Error saving transaction')
      console.log(err)
    })
}
