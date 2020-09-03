const root = document.querySelector(':root');
const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');
const bgWhite = document.getElementById('bgWhite');
const bgBlack = document.getElementById('bgBlack');
const bgBlue = document.getElementById('bgBlue');
const imgToggle = document.getElementById('imgToggle');


plusButton.onclick = function() {
  root.style.setProperty('--font-size', '24px');
}

minusButton.onclick = function() {
  root.style.setProperty('--font-size', '20px');
}

bgWhite.onclick = function() {
  root.style.setProperty('--background-color', '#FFFFFF');
  root.style.setProperty('--text-color', '#04092A');
}

bgBlack.onclick = function() {
  root.style.setProperty('--background-color', '#04092A');
  root.style.setProperty('--text-color', '#FFFFFF');
}

bgBlue.onclick = function() {
  root.style.setProperty('--background-color', '#BBD3FB');
  root.style.setProperty('--text-color', '#364FEE');
}

imgToggle.onclick = function() {
  if (imgToggle.textContent == 'Вкл') {
    imgToggle.textContent = 'Выкл';
  } else {
    imgToggle.textContent = 'Вкл';
  }
}

const login = document.getElementById('login');
const registration = document.querySelector('.header__navigation-button--reg');
const user = document.querySelector('.header__user');
let linksAuth = document.querySelectorAll('.nav__link--not-auth');

login.onclick = function() {
  login.classList.toggle('header__navigation-button--not-show');
  registration.classList.toggle('header__navigation-button--not-show');
  user.classList.toggle('header__user--show');

  linksAuth.forEach(element => {
    element.classList.toggle('nav__link--auth');    
  });
}

const disabilityPanel = document.getElementById('disability-panel');
const changeVision = document.getElementById('changeVision');
const normalVision = document.getElementById('regVision');
const images = document.querySelectorAll('img');
const links = document.querySelectorAll('a');


changeVision.onclick = function() {
  if (disabilityPanel.style.display == 'flex') {
    disabilityPanel.style.display = 'none';
    root.style.setProperty('--background-color', '#E5E5E5');
    root.style.setProperty('--text-color', '#04092A');
  } else {
    disabilityPanel.style.display = 'flex';
    root.style.setProperty('--background-color', '#FFFFFF');
    root.style.setProperty('--text-color', '#04092A');
  }
}

normalVision.onclick = function() {
  disabilityPanel.style.display = 'none';
  root.style.setProperty('--background-color', '#E5E5E5');
  root.style.setProperty('--text-color', '#04092A');
}
