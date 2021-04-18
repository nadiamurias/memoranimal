"use strict";

let animalCards = ["🐹", "🐵", "🐷", "🐮", "🐶", "🦁", "🐱", "🐰"];
let totalCards = animalCards.concat(animalCards);

function getCards() {
  let table = document.querySelector(".table");
  totalCards.forEach(function (element) {
    let card = document.createElement("div");

    card.innerHTML =
      "<div class='card'>" +
      "<div class='card__content'>" +
      element +
      "</div>" +
      "</div>";

    table.appendChild(card);
  });
}
getCards();
