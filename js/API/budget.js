function calculateTotalBuget() {
  let budget = 0;
  let expanse = 0;
  let income = 0;
  let transactions =
    JSON.parse(localStorage.getItem("transactionsArray")) || [];
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].type == "income") {
      income += parseInt(transactions[i].amount);
      console.log(income);
    }

    if (transactions[i].type == "expanse") {
      expanse += parseInt(transactions[i].amount);
      console.log(expanse);
    }
  }

  displayBudget(income, expanse);
}

function displayBudget(income,expanse) {
  let budget = income - xpense;
  const budgetDisplay = document.getElementById("budgetDiv");
  budgetDisplay.innerHTML = "";

  const budgetElement = document.createElement("div");
  budgetElement.textContent = `Budget: ${budget}`;
  budgetDisplay.appendChild(budgetElement);

  const incomeElement = document.createElement("div");
  incomeElement.textContent = `Income: ${income}`;
  budgetDisplay.appendChild(incomeElement);

  const expenseElement = document.createElement("div");
  expenseElement.textContent = `Expanse: ${expanse}`;
  budgetDisplay.appendChild(expenseElement);
}
e