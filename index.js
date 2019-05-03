const express = require("express");
const app = express();
const state_hash = require("./states_hash.json");
const state_titlecase = require("./states_titlecase.json");

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

// Code to state function
app.get("/codeToState", function(req, res) {
  console.log("Calling code to state endpoint in data-service");
  const code = req.query.code;
  const state = state_hash[code];
  res.send({ state: state || "" });
});

// State to code function
app.get("/stateToCode", function(req, res) {
  console.log("Calling state to code endpoint in data-service");
  const state = req.query.state;
  const code = state_titlecase.find(element => element.name === state)
    .abbreviation;
  res.send({ code: code || "" });
});
