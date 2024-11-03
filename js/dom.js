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
  addTypeFilter("expance");
});

const lessThan = document.getElementById("less-than");
lessThan.addEventListener("click", () => addLessAmountFilter(20));

const greaterThan = document.getElementById("greater-than");
greaterThan.addEventListener("click", () => addGreaterAmountFilter(20));

const greaterThanDate = document.getElementById("greater-than-Date");
greaterThanDate.addEventListener("click", () =>
  addGreaterDateFilter("2024-11-05")
);

const lessThanDate = document.getElementById("less-than-Date");
lessThanDate.addEventListener("click", () =>
  addLessDateFilter("Tue Nov 05 2024 02:00:00 GMT+0200")
);

const findWord = document.getElementById("word-find");
findWord.addEventListener("click", () => addNotesFilter("he"));

const budget = document.getElementById("budget");
budget.addEventListener("click", calculateTotalBuget);

function appendHTML(div, html) {
  document.getElementById(div).innerHTML = html;
}


