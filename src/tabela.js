const tbody = document.getElementById('dane');
const resetBtn = document.querySelector('.clear');
document.addEventListener('DOMContentLoaded', function () {
  const przyklady = [
    {
      name : "Cześć! Chciałabym zapytać o dostępność produktu.",
      email : "anna.kowalska@email.com",
      message : "Cześć! Chciałabym zapytać o dostępność produktu."
    },
    {
      name : "Jan Nowak",
      email : "jan.nowak@email.com",
      message : "Proszę o więcej informacji na temat oferty."
    },
    {
      name : "Marta Wiśniewska",
      email : "marta.wisniewska@email.com",
      message : "Zastanawiam się nad współpracą. Jakie warunki"
    },
    {
      name : "Piotr Zieliński",
      email : "piotr.zielinski@email.com",
      message : "Cześć, mam pytanie dotyczące zwrotów."
    }
  ]
  localStorage.setItem('formEntries', JSON.stringify(przyklady));
  refreshTable()
});

function refreshTable() {
  tbody.innerHTML = '';
  loadEntriesFromStorage();
}

function loadEntriesFromStorage() {
  if (localStorage.getItem('formEntries')) {
    console.log("JAKAŚ TABELA JEST!")
    const entries = JSON.parse(localStorage.getItem('formEntries'));
    entries.forEach((entry) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${entry.name}</td>
        <td>${entry.email}</td>
        <td>${entry.message}</td>
      `;
      tbody.appendChild(row);
    });
  } else {
    console.log("PUSTO!")
    alert("Brak informacji w tabeli! Odśwież strone aby wyświetlić przykładowe informacje!")
  }
}

resetBtn.addEventListener('click', function () {
  localStorage.clear();
  refreshTable();
});
