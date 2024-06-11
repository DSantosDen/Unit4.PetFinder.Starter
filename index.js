// import the pets array from data.js
const pets = require("./data");

// init express app
const express = require("express");
const app = express();

const PORT = 3000;

// GET - / - returns homepage
// serve up the public folder as static index.html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// hello world route
app.get("/api", (req, res) => {
  res.send("Hello World!");
});

// get all pets from the database
// send the pets array as a response
app.get("/api/v1/pets", (req, res) => {
  res.json(pets);
});

// get pet by owner with query string
// get the owner from the request
// find the pet in the pets array
// send the pet as a response
app.get("/api/v1/pets/owner/:owner", (req, res) => {
  const owner = req.params.owner;
  const pet = pets.filter((pet) => pet.owner === owner);
  res.json(pet);
});

// get pet by name
// get the name from the request
// find the pet in the pets array
// send the pet as a response
app.get("/api/v1/pets/:name", (req, res) => {
  const name = req.params.name;
  const pet = pets.find((pet) => pet.name === name);
  res.json(pet);
});

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});

module.exports = app;
