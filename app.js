"use strict";

const buscador = document.querySelector(".logoBuscador__buscador");
const input = document.querySelector(".logoBuscador__buscador--input input");

input.addEventListener("click", () => {
  buscador.classList.add("active");
});
