let transaction = " ";

const submitIncome = document.getElementById("submit");
submitIncome.addEventListener("click", () =>
  createTransaction("type", "date", "amount", "notes")
);

const viewAll = document.getElementById("view-all");
viewAll.addEventListener("click", () => {
  transactions = parse();
  viewTransactions(transactions);
});

const viewIncome = document.getElementById("view-income");
viewIncome.addEventListener("click", () => {
  transactions = parse();
  addTypeFilter("income");
});

const viewExpence = document.getElementById("view-expance");
viewExpence.addEventListener("click", () => {
  transactions = parse();

  viewTransactions(transactions);
});

const lessThan = document.getElementById("less-than");
lessThan.addEventListener("click", () => addLessAmountFilter(20));

const greaterThan = document.getElementById("greater-than");
greaterThan.addEventListener("click", () => addGreaterAmountFilter(20));

const budget = document.getElementById("budget");
budget.addEventListener("click", calculateTotalBuget);

function appendHTML(div, html) {
  document.getElementById(div).innerHTML = html;
}

function parse() {
  let transactions =
    JSON.parse(localStorage.getItem("transactionsArray")) || [];
  return transactions;
}
