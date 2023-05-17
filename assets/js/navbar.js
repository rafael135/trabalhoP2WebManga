let mobileMenuBtn = document.getElementById("mobileMenu");
let mobileMenu = document.getElementById("ul-mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});

// Ao clicar no fundo da tela com o menu aberto, ele fecha
mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});