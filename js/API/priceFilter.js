function getLessThan(value, type1, type2) {
  let transactions =
    JSON.parse(localStorage.getItem("transactionsArray")) || [];
  let priceFillteredTransaction = [];
  for (let i = 0; i < transactions.length; i++) {
    if (parseInt(transactions[i].amount) <= value) {
      priceFillteredTransaction.push(transactions[i]);
    }
  }
  console.log(priceFillteredTransaction);
  viewTransactions(type1, type2, priceFillteredTransaction);
}

function getGreaterThan(value, type1, type2) {
  let transactions =
    JSON.parse(localStorage.getItem("transactionsArray")) || [];
  let priceFillteredTransaction = [];
  for (let i = 0; i < transactions.length; i++) {
    if (parseInt(transactions[i].amount) >= value) {
      priceFillteredTransaction.push(transactions[i]);
    }
  }
  console.log(priceFillteredTransaction);
  viewTransactions(type1, type2, priceFillteredTransaction);
}
