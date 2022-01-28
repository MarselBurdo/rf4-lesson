//https://javascript.info/event-loop

// case Promise

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 10);

// setTimeout(() => {
//   console.log(22);
// }, 0);

// fetch("https://rickandmortyapi.com/api/character")
//   .then((res) => {
//     console.log("firts resolve");
//     return res.json();
//   })
//   .then(console.log);

// console.log(3);

// console.log(4);

//  case ASYNC/AWAIT

// console.log(11);

// const getData = async () => {
//   console.log(1);
//   console.log(99);
//   console.log(88);
//   const response = await fetch("https://rickandmortyapi.com/api/character");
//   console.log(response);
//   const result = await response.json();
//   console.log(3);

//   console.log(result);
// };

// console.log(22);
// getData();

// console.log(33);

const getData = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  console.log(1);
  const result = await response.json();
  console.log(result);
};

getData();
fetch("https://rickandmortyapi.com/api/character")
  .then((res) => {
    console.log(2);
    return res.json();
  })
  .then(console.log);

//   getData();
// console.log(getData()); //Promise-pendeing

// getData().then(console.log);
