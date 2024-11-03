const viewAll = document.getElementById("view-all");
viewAll.addEventListener("click", () => viewTransactions("income", "expance"));

const viewIncome = document.getElementById("view-income");
viewIncome.addEventListener("click", () => viewTransactions("income", " "));

const viewExpence = document.getElementById("view-expance");
viewExpence.addEventListener("click", () => viewTransactions("expance", " "));

function viewTransactions(type1, type2) {
  let transactions =
    JSON.parse(localStorage.getItem("transactionsArray")) || [];
  let Transactions = "";

  for (let i in transactions) {
    if (transactions[i].type == type1 || transactions[i].type == type2) {
      Transactions += `<tr class="transaction">
          <td class="type">${transactions[i].type}</td>
          <td class="amount">${transactions[i].amount}</td>
          <td class="date">${transactions[i].date}</td>
          <td class="notes">${transactions[i].notes}</td>
          <td><button class="delete" value="${i}">delete</button></td>
          <td><button class="edit" value="${i}">edit</button></td>
        </tr>`;
    }
  }
  appendHTML("transactions", Transactions);

  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((btn) => {
    const removeIndex = btn.value;
    btn.addEventListener("click", () => deleteTransaction(removeIndex,type1, type2));
  });

  const editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((btn) => {
    const editIndex = btn.value;
    btn.addEventListener("click", () => editTransaction(editIndex,type1, type2));
  });
}

function appendHTML(div, html) {
  document.getElementById(div).innerHTML = html;
}
