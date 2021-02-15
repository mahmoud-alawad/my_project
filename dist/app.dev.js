"use strict";

var btn = document.querySelector('.share__icon');
var socialIcons = document.querySelector('.social__icons');
btn.addEventListener('click', function () {
  socialIcons.classList.toggle('share__screen');
});