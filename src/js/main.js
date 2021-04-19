"use strict";

const animalCards = ["🐹", "🐵", "🐷", "🐮", "🐶", "🦁", "🐱", "🐰"];
const totalCards = animalCards.concat(animalCards);

function shuffleCards() {
  let result;
  result = totalCards.sort(function () {
    return 0.5 - Math.random();
  });
  return result;
}

function getCards() {
  const table = document.querySelector(".table");
  const shuffledCards = shuffleCards();
  shuffledCards.forEach(function (element) {
    const card = document.createElement("div");

    card.innerHTML =
      "<div class='card'>" +
      "<div class='card__content'>" +
      element +
      "</div>" +
      "</div>";

    table.appendChild(card);
  });
}

function discover() {
  let discover;
  let totalDiscover = document.querySelectorAll(".discovered");
  if (totalDiscover.length > 1) {
    return;
  } else {
    this.classList.add("discovered");
  }

  discover = document.querySelectorAll(".discovered");
  if (discover.length < 2) {
    return;
  }
  if (discover[0].textContent === discover[1].textContent) {
    return console.log("acierto");
  } else {
    return console.log("error");
  }
}

getCards();

const allCards = document.querySelectorAll(".card");
allCards.forEach(function (element) {
  element.addEventListener("click", discover);
});
