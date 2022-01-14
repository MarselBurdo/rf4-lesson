// 1 - Функции resolve и reject

// Сделайте промис,
// внутри которого будет задержка
// setTimeout в 3 секунды,
// после которой промис должен зарезолвится
// (то есть выполнится успешно).

// bad practice
// new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Sucsess!!!!!");
//   }, 3000);
// }).then((result) => console.log(result));

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (null) {
      resolve("Sucsess!!!!!");
    } else {
      reject("Failed!!!!");
    }
  }, 3000);
});

const onResolved = (result) => console.log(result);
const onRejected = (error) => console.log(error);

firstPromise.then(onResolved, onRejected);
