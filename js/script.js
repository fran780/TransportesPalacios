document.addEventListener("DOMContentLoaded", () => {
    const abrir = document.querySelector("header .abrir-menu");
    const cerrar = document.querySelector("header .cerrar-menu");

    abrir.addEventListener("click", () => {
        toggleMenu();
    });

    cerrar.addEventListener("click", () => {
        toggleMenu();
    });

    function toggleMenu() {
        const nav = document.querySelector("header .nav");
        nav.classList.toggle("visible");
    }
});
