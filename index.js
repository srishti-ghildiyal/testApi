const express = require("express");

const app = express();
const port = 3000;

const apiData = require("./data.json");
app.get("/", (req, res) => {
  res.send(apiData);
});

app.listen(port, () => {
  console.log("I am live");
});
