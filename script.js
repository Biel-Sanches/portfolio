// Revelação suave dos elementos ao rolar a página.
// Progressive enhancement: sem JavaScript, tudo fica visível normalmente.
"use strict";

document.body.classList.add("js");

const observador = new IntersectionObserver((entradas) => {
  for (const entrada of entradas) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visivel");
      observador.unobserve(entrada.target);
    }
  }
}, { threshold: 0.12 });

document.querySelectorAll(".revelar").forEach((el) => observador.observe(el));
