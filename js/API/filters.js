// function getLessThan(value, type1, type2) {
//   let transactions =
//     JSON.parse(localStorage.getItem("transactionsArray")) || [];
//   let priceFillteredTransaction = [];
//   for (let i = 0; i < transactions.length; i++) {
//     if (parseInt(transactions[i].amount) <= value) {
//       priceFillteredTransaction.push(transactions[i]);
//     }
//   }
//   console.log(priceFillteredTransaction);
//   viewTransactions(type1, type2, priceFillteredTransaction);
// }

// function getGreaterThan(value, type1, type2) {
//   let transactions =
//     JSON.parse(localStorage.getItem("transactionsArray")) || [];
//   let priceFillteredTransaction = [];
//   for (let i = 0; i < transactions.length; i++) {
//     if (parseInt(transactions[i].amount) >= value) {
//       priceFillteredTransaction.push(transactions[i]);
//     }
//   }
//   console.log(priceFillteredTransaction);
//   viewTransactions(type1, type2, priceFillteredTransaction);
// }

function addTypeFilter(type) {
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      value = td.textContent;
      if (type != value) {
        tr[i].style.display = "none";
      }
    }
  }
}

