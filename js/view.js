const viewAll = document.getElementById("view-all");
viewAll.addEventListener("click", viewAllTransactions);

const viewIncome = document.getElementById("view-income");
viewIncome.addEventListener("click", viewIncomeTransactions);

let transactions = JSON.parse(localStorage.getItem("transactionsArray"));

function viewAllTransactions() {
  let allTransactions = " ";
  for (let i in transactions) {
    allTransactions += `<tr class="transaction">
    <td class="type">${transactions[i].type}</td>
    <td class="amount">${transactions[i].amount}</td>
    <td class="date">${transactions[i].date}</td>
    <td class="notes">${transactions[i].notes}</td>

  </tr>`;
  }
  appendHTML("view-all-transactions", allTransactions);
}

function viewIncomeTransactions() {
  let incomeTransactions = " ";
  for (let i in transactions) {
    if ((transactions[i].type == "income")) {
      incomeTransactions += `<tr class="transaction">
    <td class="amount">${transactions[i].amount}</td>
    <td class="date">${transactions[i].date}</td>
    <td class="notes">${transactions[i].notes}</td>

  </tr>`;
    }
  }
  appendHTML("view-income-transactions", incomeTransactions);
}

function appendHTML(div, html) {
  document.getElementById(div).innerHTML = html;
}
