let type1 = "income";
let type2 = "expance";

const submitIncome = document.getElementById("submit");
submitIncome.addEventListener("click", () =>
  createTransaction("type", "date", "amount", "notes")
);

const viewAll = document.getElementById("view-all");
viewAll.addEventListener("click", () => {
  transactions = parse();
  type1 = "income";
  type2 = "expance";
  viewTransactions(type1, type2, transactions);
});

const viewIncome = document.getElementById("view-income");
viewIncome.addEventListener("click", () => {
  transactions = parse();
  type1 = "income";
  type2 = " ";
  viewTransactions(type1, type2, transactions);
});

const viewExpence = document.getElementById("view-expance");
viewExpence.addEventListener("click", () => {
  transactions = parse();
  type1 = "";
  type2 = "expance";
  viewTransactions(type1, type2, transactions);
});

const lessThan = document.getElementById("less-than");
lessThan.addEventListener("click", () => getLessThan(20, type1, type2));

const greaterThan = document.getElementById("greater-than");
greaterThan.addEventListener("click", () => getGreaterThan(20, type1, type2));

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
