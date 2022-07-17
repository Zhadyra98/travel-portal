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