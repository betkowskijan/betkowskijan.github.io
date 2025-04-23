const tbody = document.getElementById('dane');
const resetBtn = document.querySelector('.clear');

document.addEventListener('DOMContentLoaded', refreshTable);

function refreshTable() {
  tbody.innerHTML = '';
  loadEntriesFromStorage();
}

function loadEntriesFromStorage() {
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
}

resetBtn.addEventListener('click', function () {
  localStorage.clear();
  refreshTable();
});
