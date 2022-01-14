// 7 - Даны 3 картинки.
// С помощью Promise.all дождитесь окончания загрузки
// всех картинок и выведите их на экран.
const promiseStatus = document.querySelector(".promiseStatus");
const btn = document.querySelector(".btn");
const imagesDiv = document.querySelector(".images");

const images = [
  "https://images.unsplash.com/photo-1611542088053-8da2ed40f5bd?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8cm5TS0RId3dZVWt8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1602840123100-d27048f0e9c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1602840123100-d27048f0e9c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1602840123100-d27048f0e9c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1602840123100-d27048f0e9c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1602840123100-d27048f0e9c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1602840123100-d27048f0e9c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1602840123100-d27048f0e9c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1602840123100-d27048f0e9c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1602840123100-d27048f0e9c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1602840123100-d27048f0e9c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1602840123100-d27048f0e9c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  "https://images.unsplash.com/photo-1579558448624-1a4b3d50d17c?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cm5TS0RId3dZVWt8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
];

const getImage = (url) => {
  const img = document.createElement("img");
  img.src = url;
  img.width = 200;
  img.height = 200;
  return new Promise((res, rej) => {
    img.addEventListener("load", () => {
      res(img);
      // imagesDiv.appendChild(img);
    });
  });
};

btn.addEventListener("click", () => {
  promiseStatus.textContent = "Images download";
  imagesDiv.textContent = "";
  const promise = images.map(getImage);

  Promise.all(promise)
    .then((result) => {
      console.log(result);
      imagesDiv.append(...result);
    })
    .finally(() => (promiseStatus.textContent = "Download Done"));
});
