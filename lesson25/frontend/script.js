import { api } from "./utils/api.js";
import { renderCards } from "./utils/render.js";

const restaurantsDiv = document.querySelector(".restaurants");

api.get().then((data) => {
  renderCards(data, restaurantsDiv);
});

restaurantsDiv.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn")) return;
  //method DELETE
  //   if (!e.target.classList.contains("put")) {
  //     api.delete(e.target.id).then(console.log);
  //     api.get().then((data) => {
  //       renderCards(data, restaurantsDiv);
  //     });
  //   }

  // method PUT
  api.put(e.target.dataset.superId).then((data) => {
    if (data === "super") {
      api.get().then((data) => {
        console.log({ data });
        renderCards(data, restaurantsDiv);
      });
    }
  });
});
