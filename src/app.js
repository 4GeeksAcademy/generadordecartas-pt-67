/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
document.addEventListener("DOMContentLoaded", function() {
  const card = document.querySelector(".card");
  const counter = document.querySelector(".counter");
  const button = document.getElementById("button");
  const widthInput = document.getElementById("width");
  const heightInput = document.getElementById("height");

  function widthCard() {
    card.style.width = widthInput.value + "px";
  }

  function heightCard() {
    card.style.height = heightInput.value + "px";
  }

  function changeCard() {
    card.innerHTML = generateRandomCard();
  }

  widthInput.addEventListener("input", function() {
    widthCard();
  });
  heightInput.addEventListener("input", function() {
    heightCard();
  });

  function generateRandomCard() {
    const suits = ["♠", "♥", "♦", "♣"];
    const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    const suitsRandom = suits[Math.floor(Math.random() * suits.length)];
    const numbersRandom = numbers[Math.floor(Math.random() * numbers.length)];

    return `
   
            <span class="top-suit">${suitsRandom}</span>
            <span class="bottom-suit">${suitsRandom}</span>
            <span class="number">${numbersRandom}</span>
        `;
  }
  button.addEventListener("click", function() {
    changeCard();
    resetCounter();
  });

  let segundos = 10;
  let intervalo;

  function resetCounter() {
    clearInterval(intervalo);
    segundos = 10;
    counter.textContent = "00:10";
    intervalo = setInterval(function() {
      segundos--;
      const minutos = Math.floor(segundos / 60);
      const segundosRestantes = segundos % 60;
      const segundosFormateados =
        segundosRestantes < 10 ? "0" + segundosRestantes : segundosRestantes;
      counter.textContent = "0" + minutos + ":" + segundosFormateados;
      if (segundos === 0) {
        clearInterval(intervalo);
        changeCard();
        resetCounter();
      }
    }, 1000);
  }

  resetCounter();
});
