// Пример 4 - Переделайте предыдущую задачу так,
// чтобы один из промисов в цепочке выполнился с ошибкой.
// В конце цепочки расположите метод catch, который поймает эту ошибку.
const promiseStatus = document.querySelector(".promiseStatus");

const timeot = 2000;

promiseStatus.textContent = "Start Promise";

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

const rejected = () => {
  return new Promise((res, rej) => {
    rej("Failed!!!!");
  });
};

mainPromise
  .then((res) => newPromiseGenerate(res)) //2
  .then((res) => newPromiseGenerate(res)) //4->16
  //   .then((res) => Promise.reject("Failed!!!!"))
  .then((res) => rejected())
  .then((res) => newPromiseGenerate(res)) //16-> 256
  .catch((err) => console.log(err))
  .finally((res) => (promiseStatus.textContent = "All requests end"));
