const transactionsByMonthNew = (state, data) => {
  // Start by clearing the array...
  console.log('mutation transactionsByMonthNew')
  state.transactionsNew = []

  if (data && data.length > 0) {
    data.forEach(tx => {
      state.transactionsNew.push(mapTransaction(tx, state))
    })
  }
  console.log(state.transactionsNew)
  // console.log('Transactions by month mutated: ', state.transactionsNew)
}
const balanceChargesNew = (state, data) => {
  state.balanceChargesNew = data
}
const balanceDepositsNew = (state, data) => {
  state.balanceDepositsNew = data
}
const gotoMonthNew = (state, increment) => {
  let newMonth = state.currentMonthNew += increment
  // Sanity checks now...
  if (newMonth > 12) {
    newMonth = 1
    state.currentYearNew += 1
  } else if (newMonth < 1) {
    newMonth = 12
    state.currentYearNew -= 1
  }

  state.currentMonthNew = newMonth
}
const gotoCurrentMonthNew = (state) => {
  let dt = new Date(Date.now())
  state.currentMonthNew = dt.getUTCMonth() + 1
  state.currentYearNew = dt.getUTCFullYear()
}

// Helper functions section ------------------------------

function mapTransaction (tx, state) {
  const transDate = new Date(tx.transactionDate)
  const months = state.monthsNew
  let transaction = {
    transactionDate: months[transDate.getUTCMonth() + 1].abrev + '-' + transDate.getUTCDate(),
    transactionType: tx.transactionType,
    description: tx.description,
    charge: moneyFormatter(tx.charge),
    deposit: moneyFormatter(tx.deposit),
    balance: moneyFormatter(calcRunningBalance(tx, state))
  }
  return transaction
}

function moneyFormatter (amount) {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
    // the default value for minimumFractionDigits depends on the currency
    // and is usually already 2
  })

  return formatter.format(amount)
}

function calcRunningBalance (tx, state) {
  // any new charges?
  if (tx && tx.charge > 0) {
    state.balanceChargesNew += tx.charge
  } else if (tx && tx.deposit > 0) {
    state.balanceDepositsNew += tx.deposit
  }

  return state.balanceChargesNew - state.balanceDepositsNew
}

export default {
  transactionsByMonthNew,
  gotoMonthNew,
  gotoCurrentMonthNew,
  balanceChargesNew,
  balanceDepositsNew
}
