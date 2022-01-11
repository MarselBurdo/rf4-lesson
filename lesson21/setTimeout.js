/**
 * setTimeout setInterval
 */
let counter = 0;

const intervalID = setInterval(() => {
  counter += 1;
  console.log({ counter }, "first");
}, 2000);

const intervalIDNew = setInterval(() => {
  console.log({ counter }, "second");
}, 1000);

setTimeout(() => {
  console.log("Active timeout");
  console.log(intervalID);
  console.log(intervalIDNew);
  clearInterval(intervalID);
}, 7000);
