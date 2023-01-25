// document.addEventListener('DOMContentLoaded', function() {

//     eventListeners();
// });

// function eventListeners() {
//     const mobileMenu = document.querySelector('.header__icon-open');

//     mobileMenu.addEventListener('click', navegacionResponsive);
// }

// function navegacionResponsive() {
//     const navegacion = document.querySelector('.header__barra');

//     navegacion.classList.toggle('mostrar')
// }

const openMobileMenu = document.querySelector('.header__icon-open');
const closeMobileMenu = document.querySelector('.header__icon-close');
const barra = document.querySelector('.header__barra');
const body = document.querySelector('body');

if(openMobileMenu) {
    openMobileMenu.addEventListener('click', function() {
        barra.classList.add('mostrar');
        body.classList.add('block-scroll');
    });
}

if(closeMobileMenu) {
    closeMobileMenu.addEventListener('click', function() {
        barra.classList.add('ocultar');
        setTimeout( () => {
            barra.classList.remove('mostrar');
            barra.classList.remove('ocultar');
            body.classList.remove('block-scroll');
        }, 300);
    })
}

// Eliminar la clase 'mostrar' en un tamaño de tablet o mayor
const anchoPantalla = document.body.clientWidth;

window.addEventListener('resize', function() {
    const anchoPantalla = document.body.clientWidth;
    if(anchoPantalla >= 768) {
        barra.classList.remove('mostrar');
        body.classList.remove('block-scroll');
    }
})