const API_URL = "http://localhost:2715/restarants";
const resDiv = document.querySelector(".restoraunts");
const formAdd = document.querySelector("form");

// ASYNC/AWAIT style
const getRes = async () => {
  const response = await fetch(API_URL);
  const result = await response.json();

  const element = result
    .map(
      (el) => `<div class="row">
  <div class="col s6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">${el.name}</span>
        <p>${el.cool}</p>
        <span class="badge">${el.rate}</span>
      </div>
      <div class="card-action">
      <a class="waves-effect waves-light btn-large" id='${el.id}'>Delete</a>
        <p>${el.id}</p>
      </div>
    </div>
  </div>
</div>`
    )
    .join("");
  resDiv.innerHTML = element;
};

getRes();

resDiv.addEventListener("click", async (e) => {
  if (!e.target.classList.contains("btn-large")) return;

  const resDelete = await fetch(API_URL + "/" + e.target.id, {
    method: "DELETE",
  });
  const result = await resDelete.json();

  if (result) {
    resDiv.innerHTML = "";
    getRes();
  }
});

formAdd.addEventListener("submit", async (e) => {
  e.preventDefault();

  const { name, rate } = e.target;

  const resPost = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name.value, rate: rate.value }),
  });

  const result = await resPost.json();

  //required  write JSON.parse in try...catch

  try {
    // console.log(1);
    const jsonRes = JSON.parse(result);
    // console.log(2);
    getRes();
  } catch (error) {
    // console.log(3);
  }
});
