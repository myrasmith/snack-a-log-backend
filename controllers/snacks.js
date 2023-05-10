const snacks = require("express").Router();
const { getAllSnacks } = require("../queries/snacks");

snacks.get("/", async (req, res) => {
  const { error, result } = await getAllSnacks();
  if (error) {
    res.status(500).json({ error: "Internal Server Error" });
  } else res.json({ result });
});

module.exports = snacks;
