const table = document.querySelector(".items");
const form = document.querySelector(".addItems");

const getItems = () => {
  fetch("http://localhost:1019/socks")
    .then((res) => res.json())
    .then((data) => {
      const tableHeader = `
      <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Size</th>
      <th>Color</th>
      <th>Tag to DELETE</th>
    </tr>`;
      const socksFromBackend = data
        .map(
          (el) => `
        <tr>
    <td>${el.name}</td>
    <td>${el.price}</td>
    <td>${el.size}</td>
    <td>${el.color}</td>
    <td><button name='${el.name}' type='button' class='delete'>DELETE</button></td>
  </tr>
      `
        )
        .join("");

      table.innerHTML = tableHeader + socksFromBackend;
    });
};

getItems();

table.addEventListener("click", (e) => {
  if (!e.target.classList.contains("delete")) return;
  const { name } = e.target;

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  };

  fetch("http://localhost:1019/deleteSock", options)
    .then((res) => res.json())
    .then((status) => {
      if (status === "200") {
        getItems();
      }
    });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { name, price, color, size } = event.target;

  const newData = {
    name: name.value,
    price: price.value,
    color: color.value,
    size: size.value,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  };

  fetch("http://localhost:1019/addSock", options)
    .then((res) => res.json())
    .then((status) => {
      if (status === "200") {
        getItems();
      }
    })
    .finally(() => event.target.reset());
});
