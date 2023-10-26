const elHamburgerBtn = document.querySelector(".header__hamburger");
const elHeader = document.querySelector(".header");

elHamburgerBtn.addEventListener('click', ()=> {
    elHeader.classList.toggle('header--open');
})

const elBtn = document.querySelector(".question__item-btn");
const elItem = document.querySelector(".question__item");

elBtn.addEventListener('click', ()=> {
    elItem.classList.toggle("question__item--open");
})