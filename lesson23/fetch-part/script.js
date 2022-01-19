const info = document.querySelector(".name");
const body = document.body;

fetch("https://rickandmortyapi.com/api/character/3")
  .then((response) => {
    if (!response.ok) {
      return { error: "Request Failed!!!" };
    }
    return response.json();
  })
  .then((data) => {
    console.log({ data });
    const img = document.createElement("img");
    img.width = 200;
    img.height = 200;
    img.src = data.image;
    info.textContent = data.name;
    body.appendChild(img);
  })
  .catch((err) => console.log(err.error));
