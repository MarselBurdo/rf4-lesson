import { api } from "./api.js";

export const renderCards = (infoArray, ref) => {
  // render restaurants CARDS
  ref.innerHTML = "";
  for (let restaurant of infoArray) {
    const cardDiv = document.createElement("div");
    const header = document.createElement("h4");
    const p = document.createElement("p");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    const btnPut = document.createElement("button");

    cardDiv.className = "card";

    btnPut.type = "button";
    btnPut.textContent = "Add rate";
    btnPut.className = "btn put";
    btnPut.dataset.superId = restaurant.id;

    btn.type = "button";
    btn.textContent = "Delete";
    btn.className = "btn";
    btn.id = restaurant.id;

    header.innerHTML = restaurant.name;

    p.innerHTML = restaurant.cool;

    span.innerHTML = restaurant.rate;

    cardDiv.append(header, p, span, btn, btnPut);
    ref.appendChild(cardDiv);
  }
};
