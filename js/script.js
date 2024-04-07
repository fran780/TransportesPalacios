document.addEventListener("DOMContentLoaded", ()=>{
    caruselInit();
});

function caruselInit(){

    const nav = document.querySelector("header .nav");
    const abrir = document.querySelector("header .abrir-menu");
    const cerrar = document.querySelector("header .cerrar-menu");
    
    abrir.addEventListener("click",()=>{
        nav.classList.add("visible");
    });
    
    cerrar.addEventListener("click",()=>{
        nav.classList.remove("visible");
    });
}