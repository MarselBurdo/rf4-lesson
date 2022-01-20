import { api } from "./api.js";

const pokemonsDiv = document.querySelector(".pokemons");
const paginationDiv = document.querySelector(".pagination");
const selectLimit = document.querySelector(".selectLimit");

let page = 1;
let perPage = 10;

const getOffset = () => {
  /** считаем интервал данных для отображения */
  return (page - 1) * perPage;
};

const allPokemonsRender = (infoArray) => {
  /** отрисовываем карточки покемонов */
  const pokemons = infoArray.map(
    (el, index) => `
    <div class="card">
        <p>${getOffset() + index + 1}</p>
        <h3>${el.name}</h3>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          getOffset() + index + 1
        }.png" alt="${el.name}" width=150 height=150/>
    </div>
    `
  );
  pokemonsDiv.innerHTML = pokemons.join("");
};

const allPaginationRender = (infoCount) => {
  /** отрисовываем пагинацию */
  const pages = Math.ceil(infoCount / perPage);
  const numbers = Array(pages)
    .fill(0)
    .map((el, i) => i + 1)
    .map(
      (el) =>
        `<button type="button" class="btn ${
          el === page ? "active" : ""
        }">${el}</button>`
    );

  let step = 5;

  const start = page - step > 0;
  const end = page + step < numbers.length - 1;

  const sliceStart = start ? page - step : 0;
  const sliceEnd = end ? page + step : numbers.length - 1;

  const slicedArray = numbers.slice(sliceStart, sliceEnd);

  console.log({ slicedArray });

  paginationDiv.innerHTML =
    (start ? numbers[0] + "..." : "") +
    slicedArray.join("") +
    (end ? "..." + numbers[numbers.length - 1] : "");
};

const getPokemons = () => {
  /** получаем данные со сторонеей API */
  api
    .get(perPage, getOffset())
    .then((res) => res.json())
    .then((data) => {
      const { results, count } = data;
      allPokemonsRender(results);
      allPaginationRender(count);
    });
};

getPokemons();

paginationDiv.addEventListener("click", (event) => {
  /** работа пагинации */

  if (event.target === event.currentTarget) return;
  page = Number(event.target.textContent);
  getPokemons();
});

selectLimit.addEventListener("change", (e) => {
  /** работа лимита отображения */
  page = 1;
  perPage = Number(e.target.value);
  getPokemons();
});
