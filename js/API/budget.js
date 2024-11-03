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

  displayBudget(income, expance);
}

function displayBudget(income, expense) {
  let budget = income - expense;
  const budgetDisplay = document.getElementById("budgetDiv");
  budgetDisplay.innerHTML = "";

  let budgetdiv = document.createElement("div");
  const budgetElement = document.createElement("p");
  budgetElement.textContent = `Budget: ${budget}`;
  budgetdiv.appendChild(budgetElement);

  const incomeElement = document.createElement("p");
  incomeElement.textContent = `Income: ${income}`;
  budgetdiv.appendChild(incomeElement);

  const expenseElement = document.createElement("p");
  expenseElement.textContent = `Expense: ${expense}`;
  budgetdiv.appendChild(expenseElement);

  budgetDisplay.appendChild(budgetdiv);
}
