// 2 - Сделайте промис, который через 5 секунд случайным
// образом выполнится или с успехом,
// или с ошибкой.
// Примените метод catch для отлавливания ошибок.

const secondPromise = new Promise((resolve, reject) => {
  const rnd = Math.round(Math.random() * 10);

  setTimeout(() => {
    if (rnd > 5) {
      resolve(rnd);
    } else {
      reject(rnd);
    }
  }, 5000);
});

secondPromise
  .then((result) => console.log("Sucsess!!!!!", result))
  .catch((error) => console.log("Failed!!!!", error));
