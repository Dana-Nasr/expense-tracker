const submitIncome = document.getElementById("submit");
submitIncome.addEventListener("click", () =>
  createTransaction("type", "date", "amount","notes")
);


function createTransaction(type, date, amount,notes) {
  let oldTransactions =
    JSON.parse(localStorage.getItem("transactionsArray")) || [];
  console.log(oldTransactions);


  const amountOfTransaction = document.getElementById(amount).value;
  const dateOfTransaction = document.getElementById(date).value;
  const noteOnTransaction = document.getElementById(notes).value;
  const typeOfTransaction = document.getElementById(type).value; //source or note



  let transaction = {
    type: typeOfTransaction,
    amount: amountOfTransaction,
    date:dateOfTransaction,
    notes: noteOnTransaction,
  };
  oldTransactions.push(transaction);

  localStorage.setItem("transactionsArray", JSON.stringify(oldTransactions));
}
