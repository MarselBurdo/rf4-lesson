// 3 - Сделайте цепочку из трех промисов.
// Пусть первый промис возвращает число.
// Сделайте так, чтобы каждый последующий промис через 3 секунды
// возводил в квадрат результат предыдущего промиса.
// После окончания манипуляций выведите число алертом на экран.

const timeot = 2000;

const mainPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, timeot);
});

const newPromiseGenerate = (number) => {
  console.log({ number });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number ** 2);
    }, timeot);
  });
};

mainPromise
  .then((res) => newPromiseGenerate(res)) //2
  .then((res) => newPromiseGenerate(res)) //4->16
  .then((res) => newPromiseGenerate(res)) // 16-> 256
  .then((res) => alert(res));
