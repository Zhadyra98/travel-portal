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

let slides = document.querySelectorAll('.single__slide');
let slider = [];
for(let i=0; i<slides.length; i++){
    slider[i] = slides[i].src;
    slides[i].remove();
}
console.log(slider);

let step = 0;
let offset = 0;

function draw() {
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('single-slide');
    img.style.left = offset*860 +'px';
    document.querySelector('.slide').append(img);
    step++;
    offset=1;
}

draw();draw();
