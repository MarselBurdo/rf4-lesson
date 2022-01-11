// 3. Создайте инпут,
// в который пользователь вводит дату своего рождения в формате
// '2014-12-31' (с конкретным годом).
// По потере фокуса выведите под инпутом сколько дней осталось до его дня рождения.

const DAY_PER_YEAR = 1000 * 60 * 60 * 24;

const inputDate = document.querySelector("#birthDate");
const result = document.querySelector(".resultDay");

inputDate.addEventListener("blur", (event) => {
  const { value } = event.target;

  const dateNow = new Date();
  const dateBD = new Date(value);
  dateBD.setFullYear(dateNow.getFullYear());

  console.log({ dateNow, dateBD });

  if (dateBD < dateNow) {
    console.log("In this year your BD been");
    dateBD.setFullYear(dateNow.getFullYear() + 1);
  }

  const dateNowMS = dateNow.getTime();
  const dateBDMS = dateBD.getTime();

  const daysByBD = Math.floor((dateBDMS - dateNowMS) / DAY_PER_YEAR);

  result.textContent = `${daysByBD} to your Birth Day`;
});
