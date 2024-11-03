const submitIncome = document.getElementById("submit");
submitIncome.addEventListener("click", () =>
  createTransaction("type", "date", "amount", "notes")
);
const viewAll = document.getElementById("view-all");
viewAll.addEventListener("click", () => viewTransactions("income", "expance"));

const viewIncome = document.getElementById("view-income");
viewIncome.addEventListener("click", () => viewTransactions("income", " "));

const viewExpence = document.getElementById("view-expance");
viewExpence.addEventListener("click", () => viewTransactions("expance", " "));
function appendHTML(div, html) {
  document.getElementById(div).innerHTML = html;
}
