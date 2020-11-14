const burgerMenu = document.getElementById('burgerMenu');
let body = document.querySelector('body');

burgerMenu.onclick = function() {
  burgerMenu.classList.toggle('burger__label--show');
  body.classList.toggle('body--overflow-hidden')
}

const loginButton = document.getElementById('login');
const loginCloseForm = document.getElementById('login-close');
const loginForm = document.getElementById('login-form');

loginButton.onclick = function () {
  body.classList.add('body--overflow-hidden');
  loginForm.style.display = 'block';
}

loginCloseForm.onclick = function () {
  body.classList.remove('body--overflow-hidden');
  loginForm.style.display = 'none';
}

let eyeToggle = document.getElementById('toggle-eye');

eyeToggle.onclick = function () {

  let passwordField = document.getElementById('pass-field');

  if (passwordField.type == 'password') {
    passwordField.type = 'text';
  } else {
    passwordField.type = 'password';
  }
}

//start

const libraryFormOpen = document.getElementById('libraryFilterOpen');
const libraryFormClose = document.getElementById('libraryFilterClose');
let library = document.querySelector('.library');
let libraryFilter = document.getElementById('libraryFilter');

libraryFormOpen.onclick = function () {
  body.classList.add('body--overflow-hidden');
  libraryFilter.classList.add('library__search-form--show');
  library.classList.add('library--show');
}

libraryFormClose.onclick = function () {
  body.classList.remove('body--overflow-hidden');
  libraryFilter.classList.remove('library__search-form--show');
  library.classList.remove('library--show')
}
