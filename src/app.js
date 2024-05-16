/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
document.addEventListener("DOMContentLoaded", function() {
  const card = document.querySelector(".card");
  const contador = document.querySelector(".contador");
  const boton = document.getElementById("boton");
  const anchoInput = document.getElementById("ancho");
  const altoInput = document.getElementById("alto");

  function cambiarCarta() {
    card.style.width = anchoInput.value + "px";
    card.style.height = altoInput.value + "px";
    card.innerHTML = generateRandomCarta();
  }

  function generateRandomCarta() {
    const palos = ["♠", "♥", "♦", "♣"];
    const numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    const palo = palos[Math.floor(Math.random() * palos.length)];
    const numero = numeros[Math.floor(Math.random() * numeros.length)];
    return `
            <span class="top-suit">${palo}</span>
            <span class="bottom-suit">${palo}</span>
            <span class="number">${numero}</span>
        `;
  }

  boton.addEventListener("click", function() {
    cambiarCarta();
    reiniciarContador();
  });

  let segundos = 10;
  let intervalo;

  function reiniciarContador() {
    clearInterval(intervalo);
    segundos = 10;
    contador.textContent = "00:10";
    intervalo = setInterval(function() {
      segundos--;
      const minutos = Math.floor(segundos / 60);
      const segundosRestantes = segundos % 60;
      const segundosFormateados =
        segundosRestantes < 10 ? "0" + segundosRestantes : segundosRestantes;
      contador.textContent = "0" + minutos + ":" + segundosFormateados;
      if (segundos === 0) {
        clearInterval(intervalo);
        cambiarCarta();
        reiniciarContador();
      }
    }, 1000);
  }

  reiniciarContador(); // Iniciar el contador al cargar la página
});
