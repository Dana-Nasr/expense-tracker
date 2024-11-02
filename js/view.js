const viewAll = document.getElementById("view-all");
viewAll.addEventListener("click", viewAllTransactions);

function viewAllTransactions() {
  let transactions = JSON.parse(localStorage.getItem("transactionsArray"));
  let allTransactions = " ";
  for (let i in transactions) {
    allTransactions += `<div class="transaction">
    <div class="type">${transactions[i].type}</div>
    <div class="amount">${transactions[i].amount}</div>
    <div class="date">${transactions[i].date}</div>
    <div class="notes">${transactions[i].notes}</div>

  </div>`;
  }
  appendHTML("view-all-transactions", allTransactions);
}

function appendHTML(div, html) {
  document.getElementById(div).innerHTML = html;
}
