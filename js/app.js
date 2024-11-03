let transaction = " ";
function parse() {
  let transactions =
    JSON.parse(localStorage.getItem("transactionsArray")) || [];
  return transactions;
}

document.addEventListener("DOMContentLoaded", () => {
  viewTransactions(parse());
});
