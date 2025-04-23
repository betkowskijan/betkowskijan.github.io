const form = document.querySelector('.form-kontakt');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('userName').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('reason').value;
  const newEntry = { name, email, message };

  let entries = JSON.parse(localStorage.getItem('formEntries')) || [];

  entries.push(newEntry);
  localStorage.setItem('formEntries', JSON.stringify(entries));
  form.reset();
  alert('Wysłano wiadomość');
});
