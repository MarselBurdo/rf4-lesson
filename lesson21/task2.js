// 2. Выведите на экран количество часов,
// прошедшее между 1 марта 1988 года и текущим моментом

const dateNow = new Date();
const dateLast = new Date("March 1, 1988");

const MILLISECOND_PER_HOUR = 1000 * 60 * 60;

// console.log({ dateNow, dateLast });

//wrong
// const result = Math.floor(dateNow.getHours() - dateLast.getHours());

dateNowMS = dateNow.getTime();
dateLastMS = dateLast.getTime();

// console.log({ dateNowMS, dateLastMS });

const result = Math.floor((dateNowMS - dateLastMS) / MILLISECOND_PER_HOUR);

console.log(result);
