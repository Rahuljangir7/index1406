const cardText = document.querySelectorAll(".card-text");

function card(item) {
  item.innerText = item.innerText.substring(0, 90);
}

cardText.forEach(card);