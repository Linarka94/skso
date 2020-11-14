const root = document.querySelector(':root');
const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');
const bgWhite = document.getElementById('bgWhite');
const bgBlack = document.getElementById('bgBlack');
const bgBlue = document.getElementById('bgBlue');
const imgToggle = document.getElementById('imgToggle');

let size = [16, 20, 24, 28],
    currentSize = 1;

function changeSize(increment = false) {
    if (increment) {
        if (currentSize < size.length - 1) {
            currentSize++;
        }
    } else {
        if (currentSize > 0) {
            currentSize--;
        }
    }
    root.style.setProperty('--font-size', size[currentSize] + 'px');
}

plusButton.onclick = function () {
    changeSize(true);
}

minusButton.onclick = function () {
    changeSize();
}

bgWhite.onclick = function () {
    document.body.setAttribute('data-type', 'white');
}

bgBlack.onclick = function () {
    document.body.setAttribute('data-type', 'black');
}

bgBlue.onclick = function () {
    document.body.setAttribute('data-type', 'blue');
}

imgToggle.onclick = function () {
    if (imgToggle.classList.contains('active')) {
        imgToggle.classList.remove('active');
        document.body.setAttribute('data-image', '');
        imgToggle.textContent = 'Выкл';
        return false;
    }
    imgToggle.classList.add('active');
    document.body.setAttribute('data-image', 'none');
    imgToggle.textContent = 'Вкл';
}

const login = document.getElementById('login');
const registration = document.querySelector('.header__navigation-button--reg');
const user = document.querySelector('.header__user');
let linksAuth = document.querySelectorAll('.nav__link--not-auth');

login.onclick = function () {
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


changeVision.onclick = function () {
    if (disabilityPanel.style.display == 'flex') {
        clear();
        return false;
    }
    disabilityPanel.style.display = 'flex';
    document.body.setAttribute('data-type', 'white');

}

function clear() {
    currentSize = 1;
    disabilityPanel.style.display = 'none';
    document.body.setAttribute('data-type', '');
    root.style.setProperty('--font-size', '20px');
}

normalVision.onclick = function () {
    clear();
}
