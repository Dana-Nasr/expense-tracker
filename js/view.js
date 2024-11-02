const viewAll = document.getElementById("view-all");
viewAll.addEventListener("click", viewAllTransactions);

function viewAllTransactions() {
  let transactions = JSON.parse(localStorage.getItem("transactionsArray"));
  let allTransactions=" ";
  for (let i in transactions) {
    console.log(transactions[i]);
    allTransactions += `<div class="transaction">
    <div class="type">${transactions[i].type}</div>
    <div class="messaage">${transactions[i].message}</div>
  </div>`;
  }
  document.getElementById("view-all-transactions").innerHTML = allTransactions;
}

function