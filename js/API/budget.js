function calculateTotalBuget() {
  let budget = 0;
  let expance = 0;
  let income = 0;
  let transactions =
    JSON.parse(localStorage.getItem("transactionsArray")) || [];
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].type == "income") {
      income += parseInt(transactions[i].amount);
      console.log(income);
    }

    if (transactions[i].type == "expance") {
      expance += parseInt(transactions[i].amount);
      console.log(expance);
    }
  }

  budget = income - expance;
  totalBudget = `<div><p>${budget}</p></div>`;
  appendHTML("budgetDiv", totalBudget);
}
