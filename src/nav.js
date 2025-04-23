//              MENU BTN (RESPONSYWNOŚĆ)

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    menu.classList.add('hide');
    setTimeout(() => {
      menu.classList.remove('hide');
      menu.style.visibility = 'hidden';
    }, 300);
  } else {
    menu.classList.add('show');
    menu.style.visibility = 'visible';
  }
  document.querySelector('.overlay').classList.toggle('active');
}

function additem(text) {
  const display = document.querySelector('.glowna-text1');
  const msg = document.createElement('p');
  msg.innerHTML = text;
  display.append(msg);
}
