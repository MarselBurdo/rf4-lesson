const seconds = document.querySelector(".seconds");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");

let resultSeconds = 0;
let intervalID = null;

start.addEventListener("click", () => {
  //   console.log(intervalID);
  if (!intervalID) {
    intervalID = setInterval(() => {
      resultSeconds += 1;
      seconds.textContent = resultSeconds;
    }, 1000);
  }
});

pause.addEventListener("click", () => {
  clearInterval(intervalID);
  //   console.log(intervalID);

  intervalID = null;
});

stop.addEventListener("click", () => {
  clearInterval(intervalID);
  resultSeconds = 0;
  intervalID = null;
  seconds.textContent = 0;
});
