function viewTransactions(transactions) {
  const transactionsTable = document.getElementById("transactions");
  transactionsTable.innerHTML = " ";
  const table = document.createElement("table");
  table.setAttribute("id", "table");
  transactionsTable.appendChild(table);
  for (let i in transactions) {
    const row = document.createElement("tr");
    row.className = "transaction";

    const type = document.createElement("td");
    type.className = "type";
    type.textContent = transactions[i].type;
    row.appendChild(type);

    const amount = document.createElement("td");
    amount.className = "amount";
    amount.textContent = transactions[i].amount;
    row.appendChild(amount);

    const date = document.createElement("td");
    date.className = "date";
    date.textContent = transactions[i].date;
    row.appendChild(date);

    const notes = document.createElement("td");
    notes.className = "notes";
    notes.textContent = transactions[i].notes;
    row.appendChild(notes);

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.value = i;
    deleteButton.textContent = "delete";
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    const edit = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.className = "edit";
    editButton.value = i;
    editButton.textContent = "edit";
    edit.appendChild(editButton);
    row.appendChild(edit);

    table.appendChild(row);
  }

  // Add event listeners for the delete buttons
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((btn) => {
    const removeIndex = btn.value;
    btn.addEventListener("click", () => deleteTransaction(removeIndex));
  });

  // Add event listeners for the edit buttons
  const editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((btn) => {
    const editIndex = btn.value;
    btn.addEventListener("click", () => editTransaction(editIndex));
  });
}
