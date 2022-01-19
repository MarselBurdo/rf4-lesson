const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 1019;

app.use(cors());

let allSocks = [
  { name: "cool", price: 200, size: "L", color: "red" },
  { name: "no", price: 210, size: "L", color: "red" },
  { name: "lazy", price: 100, size: "M", color: "blue" },
  { name: "killBill", price: 200, size: "s", color: "yellow" },
  { name: "R&M", price: 50, size: "W", color: "white" },
];

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/", (req, res) => {
  res.send("My first Server in JS");
});

app.get("/socks", (req, res) => {
  res.json(allSocks);
});

app.post("/addSock", (req, res) => {
  allSocks.push(req.body);
  res.json("200");
});
app.delete("/deleteSock", (req, res) => {
  allSocks = allSocks.filter((el) => el.name !== req.body.name);
  res.json("200");
});

app.listen(PORT, () => {
  console.log(`His alive in ${PORT}`);
});
