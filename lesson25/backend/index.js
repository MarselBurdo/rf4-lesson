const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();

const PORT = 2715;

let restaurants = [
  { name: "Gorod", cool: true, rate: 9, id: uuidv4() },
  { name: "LzyArnold", cool: false, rate: 3, id: uuidv4() },
  { name: "TigerLily", cool: true, rate: 10, id: uuidv4() },
  { name: "JakiJan", cool: false, rate: 4, id: uuidv4() },
  { name: "JakiJan", cool: false, rate: 4, id: uuidv4() },
  { name: "JakiJan", cool: false, rate: 4, id: uuidv4() },
  { name: "JakiJan", cool: false, rate: 4, id: uuidv4() },
  { name: "JakiJan", cool: false, rate: 4, id: uuidv4() },
  { name: "JakiJan", cool: false, rate: 4, id: uuidv4() },
  { name: "JakiJan", cool: false, rate: 4, id: uuidv4() },
  { name: "JakiJan", cool: false, rate: 4, id: uuidv4() },
  { name: "JakiJan", cool: false, rate: 4, id: uuidv4() },
  { name: "JakiJan", cool: false, rate: 4, id: uuidv4() },
  { name: "JakiJan", cool: false, rate: 4, id: uuidv4() },
  { name: "JakiJan", cool: false, rate: 4, id: uuidv4() },
  { name: "Tsar", cool: true, rate: 7, id: uuidv4() },
  { name: "Tsar", cool: true, rate: 7, id: uuidv4() },
  { name: "Tsar", cool: true, rate: 7, id: uuidv4() },
  { name: "Tsar", cool: true, rate: 7, id: uuidv4() },
  { name: "Tsar", cool: true, rate: 7, id: uuidv4() },
  { name: "Tsar", cool: true, rate: 7, id: uuidv4() },
  { name: "Tsar", cool: true, rate: 7, id: uuidv4() },
  { name: "Tsar", cool: true, rate: 7, id: uuidv4() },
  { name: "Tsar", cool: true, rate: 7, id: uuidv4() },
  { name: "Tsar", cool: true, rate: 7, id: uuidv4() },
  { name: "Tsar", cool: true, rate: 7, id: uuidv4() },
  { name: "Tsar", cool: true, rate: 7, id: uuidv4() },
  { name: "Tsar", cool: true, rate: 7, id: uuidv4() },
  { name: "Tsar", cool: true, rate: 7, id: uuidv4() },
  { name: "Tsar", cool: true, rate: 7, id: uuidv4() },
  { name: "Tsar", cool: true, rate: 7, id: uuidv4() },
  { name: "Tsar", cool: true, rate: 7, id: uuidv4() },
];

app.use(cors());
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

//required GET request
app.get("/", (req, res) => {
  res.send(`Our server alive in ${PORT}`);
});

// GET all restaurants
app.get("/restarants", (req, res) => {
  res.json(restaurants.reverse());
});

//DELETE one restaurant
app.delete("/restarants/:id", (req, res) => {
  const { id } = req.params;

  restaurants = restaurants.filter((el) => el.id !== id);

  res.json("super");
});

app.put("/restarants/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  restaurants = restaurants.map((el) => {
    if (el.id === id) {
      return { ...el, rate: 1 };
    }
    return el;
  });
  res.json("super");
});

app.post("/restarants", (req, res) => {
  const { name, rate } = req.body;

  restaurants.push({
    name,
    rate,
    cool: true,
    id: uuidv4(),
  });
  // res.json("POST");
  res.json('{ "name": "POST" }');
});

app.listen(PORT, () => {
  console.log(`His alive in ${PORT}`);
});
