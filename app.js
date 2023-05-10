const express = require("express");
const cors = require("cors");
const snacksController = require("./controllers/snacks.js");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Snack-a-Log!");
});

app.use("/snacks", snacksController);

module.exports = app;
