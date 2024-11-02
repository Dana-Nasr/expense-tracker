const submitIncome = document.getElementById("submit-income");
submitIncome.addEventListener("click", () =>
  createTransaction("income", "source")
);

const submitExpance = document.getElementById("submit-expance");
submitExpance.addEventListener("click", () =>
  createTransaction("expance", "notes")
);

function createTransaction(type, message) {
  let oldTransactions =
    JSON.parse(localStorage.getItem("transactionsArray")) || [];
  console.log(oldTransactions);

  const typeOfTransaction = document.getElementById(type).value;
  const messageOnTransaction = document.getElementById(message).value;
  console.log(typeOfTransaction);

  let transaction = {
    type: typeOfTransaction,
    message: messageOnTransaction,
  };
  oldTransactions.push(transaction);

  localStorage.setItem("transactionsArray", JSON.stringify(oldTransactions));
}
