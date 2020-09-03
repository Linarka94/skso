const burgerMenu = document.getElementById('burgerMenu');
let body = document.querySelector('body');

burgerMenu.onclick = function() {
  burgerMenu.classList.toggle('burger__label--show');
  body.classList.toggle('body--overflow-hidden')
}