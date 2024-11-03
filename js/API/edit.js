function editTransaction(editIndex, type1, type2) {
  let transactions =
    JSON.parse(localStorage.getItem("transactionsArray")) || [];

  let toBEdited = transactions[editIndex];
  let edit = " ";
  edit += `<tr class="edittransaction">
  <td class="type"><input id="Ntype" type="text"  value="${toBEdited.type}" placeholder="Type"/></td>
  <td class="amount"><input id="Namount" type="text"  value="${toBEdited.amount}" placeholder="Type"/></td>
  <td class="date"><input id ="Ndate" type="text" value="${toBEdited.date}" placeholder="Type"/></td>
  <td class="notes"><input id="Nnotes" type="text"  value="${toBEdited.notes}" placeholder="Type"/></td>
  <td><button id="save" value=${editIndex}> save</button></td>
</tr>`;

  appendHTML("edit", edit);
  const saveButtons = document.getElementById("save");
  saveButtons.addEventListener("click", () =>
    save(editIndex, type1, type2, transactions)
  );
}

function save(editIndex, type1, type2, transactions) {
  const type =
    document.getElementById("type").value || transactions[editIndex].type;
  const amount =
    document.getElementById("Namount").value || transactions[editIndex].amount;
  const date =
    document.getElementById("Ndate").value || transactions[editIndex].date;
  const notes =
    document.getElementById("Nnotes").value || transactions[editIndex].notes;

  transactions[editIndex] = {
    type: type,
    amount: amount,
    date: date,
    notes: notes,
  };
  console.log("HELLO");

  localStorage.setItem("transactionsArray", JSON.stringify(transactions));
  viewTransactions(type1, type2);
  document.getElementById("edit").innerHTML = "";
}
