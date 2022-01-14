// 6 - Сделайте 3 промиса,
// в каждом из которых расположена функция setTimeout
// со случайно задержкой от 1 до 5 секунд.
// Пусть первый промис возвращает число 1, второй - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса
// и выведите результат его работы на экран.

const generatePromise = (number) => {
  const timeout = Math.round(Math.random() * 5) * 1000;

  return new Promise((res, rej) => {
    setTimeout(() => {
      res(number);
    }, timeout);
  });
};

const promise1 = generatePromise(1);
const promise2 = generatePromise(2);
const promise3 = generatePromise(3);

Promise.race([promise1, promise2, promise3]).then((result) =>
  console.log(result)
);
Promise.any([promise1, promise2, promise3]).then((result) =>
  console.log(result)
);
