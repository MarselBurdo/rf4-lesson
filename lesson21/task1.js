// 1. Задача. Выведите на экран текущие
// день, месяц и год в формате 'год-месяц-день'.

const dateNow = new Date();

// console.log(dateNow);
// console.dir(dateNow);

const date = dateNow.getDate();
const day = dateNow.getDay();
const mouth = dateNow.getMonth();
const year = dateNow.getFullYear();

// console.log({ date, day, mouth, year });

alert(`${year} - ${mouth + 1} - ${date}`);
