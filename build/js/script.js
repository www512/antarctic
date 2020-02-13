'use strict';

let header = document.querySelector('.header');
let headerToggle = header.querySelector('.header__toggle-on');
let logoImage = header.querySelector('.header__image-on');
let headerNav = header.querySelector('.header-navigation');
let map = document.querySelector('.contact-map');

function offButton() {
  header.classList.remove('header__on');
  headerToggle.classList.remove('header__toggle-on');
  headerToggle.classList.add('header-toggle');
  logoImage.classList.add('logo-image');
  logoImage.classList.remove('header__image-on');
  headerNav.classList.add('navigation-off');
}

function onButton() {
  header.classList.add('header__on');
  headerToggle.classList.add('header__toggle-on');
  headerToggle.classList.remove('header-toggle');
  logoImage.classList.add('header__image-on');
  logoImage.classList.remove('logo-image');
  headerNav.classList.remove('navigation-off');
}

offButton();

headerToggle.addEventListener('click', function () {
  if (header.classList.contains('header__on')) {
    offButton();
  } else {
    onButton();
  }
});
