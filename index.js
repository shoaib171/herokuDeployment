/** @format */

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const Port = process.env.PORT || 3000;
const ApiData = require("./data.json");
app.get("/", (req, res) => {
  res.send("Hey This is Api practice");
});
app.get("/service", (req, res) => {
  res.send(ApiData);
});
app.listen(Port, () => {
  console.log("Hello I am Api");
});
