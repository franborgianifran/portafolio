const buttonResponsive = document.querySelector('.nav--bar-button');
const navMenu = document.querySelector('.nav--bar-menu');
buttonResponsive.addEventListener('click', ()=>{
    navMenu.classList.toggle('nav--menu-active');
    navMenu.addEventListener('click', ()=>{
        navMenu.classList.remove('nav--menu-active');
    })
})




// LOADER
const loaderElement = document.getElementById('loader');
window.addEventListener('load', ()=>{
    loaderElement.classList.toggle('loader2');
})