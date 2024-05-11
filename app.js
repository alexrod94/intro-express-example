const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

let black = true;

app.get("/", (req, res) => {
  const person = {
    name: "Alex",
    button: "<button>Click me</button>",
    surname: "Rodríguez",
    hobbies: ["Surfing", "Guitar", "Travel"],
    address: "asdfasdfasdf",
    black: black,
  };

  res.render("index.hbs", person);
});

app.get("/pokemon", (req, res) => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((response) => {
      const pokemon = response;
      res.render("pokemon.hbs", pokemon);
    });
});

app.get("/about", (req, res) => {
  const options = {
    black: black,
  };
  res.render("about.hbs", options);
});

app.listen(3000, () => {
  console.log("Server listening...");
});
