const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu){
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}
document.querySelectorAll(".menu__link")
    .forEach(n => n.addEventListener("click", () => {
        iconMenu.classList.remove('active');
        menuBody.classList.remove('active');
    }))



/* =========================Slider ============================*/

const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");
const ITEM_CENTER = document.querySelector("#item-center");
const CAROUSEL = document.querySelector("#carousel");
const DOTS = document.querySelectorAll(".dot");

ITEM_LEFT.addEventListener("click", () => {
    CAROUSEL.classList.add('left');
    CAROUSEL.classList.remove('center');
    DOTS[0].classList.add('active__dot');
    DOTS[1].classList.remove('active__dot');
});
ITEM_RIGHT.addEventListener("click", () => {
    CAROUSEL.classList.add('right');
    CAROUSEL.classList.remove('center');
    DOTS[2].classList.add('active__dot');
    DOTS[1].classList.remove('active__dot');
});
ITEM_CENTER.addEventListener("click", () => {
    CAROUSEL.classList.add('center');
    DOTS[1].classList.add('active__dot');
    if(CAROUSEL.classList.contains('left')){
        CAROUSEL.classList.remove('left');
        DOTS[0].classList.remove('active__dot');
    }else{
        CAROUSEL.classList.remove('right');
        DOTS[2].classList.remove('active__dot');
    }
});
