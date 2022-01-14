// 5 - Сделайте 3 промиса,
// в каждом из которых расположена функция setTimeout
// со случайно задержкой от 1 до 5 секунд.
// Пусть каждый промис своим результатом возвращает эту задержку.
// С помощью Promise.all получите массив результатов,
// найдите его сумму, выведите на экран.

const generatePromise = () => {
  const timeout = Math.round(Math.random() * 5) * 1000;

  return new Promise((res, rej) => {
    setTimeout(() => {
      res(timeout);
    }, timeout);
  });
};

const promise1 = generatePromise();
const promise2 = generatePromise();
const promise3 = generatePromise();

Promise.all([promise1, promise2, promise3]).then(
  (result) => console.log(result.reduce((acc, cur) => acc + cur))
  //   console.log(result)
);
