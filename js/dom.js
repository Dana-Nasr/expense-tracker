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
  addTypeFilter("expanse");
});

const lessThan = document.getElementById("less-than");
lessThan.addEventListener("click", () => {
  let minprice = document.getElementById("priceFilter").value;
  addLessAmountFilter(minprice);
});
const greaterThan = document.getElementById("greater-than");
greaterThan.addEventListener("click", () => {
  let maxprice = document.getElementById("priceFilter").value;
  addGreaterAmountFilter(maxprice);
});

const greaterThanDate = document.getElementById("greater-than-Date");
greaterThanDate.addEventListener("click", () => {
  let dateFilter = document.getElementById("dateFilter").value;
  addGreaterDateFilter(dateFilter);
});
const lessThanDate = document.getElementById("less-than-Date");
lessThanDate.addEventListener("click", () => {
  let dateFilter = document.getElementById("dateFilter").value;
  addLessDateFilter(dateFilter);
});

const findWord = document.getElementById("word-find");
findWord.addEventListener("click", () => {
  let noteFilter = document.getElementById("noteFilter").value;
  addNotesFilter(noteFilter);
});

const budget = document.getElementById("budget");
budget.addEventListener("click", calculateTotalBuget);

function appendHTML(div, html) {
  document.getElementById(div).innerHTML = html;
}
