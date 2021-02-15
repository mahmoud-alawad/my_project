let btn = document.querySelector('.share__icon');
let socialIcons = document.querySelector('.social__icons');

btn.addEventListener('click', ()=>{

    socialIcons.classList.toggle('share__screen');
});