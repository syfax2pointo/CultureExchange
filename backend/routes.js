const router = require("express").Router();
const pool = require("../connection");
const country = require("./countries");

router.get("/country-name", (req, res) => {
  console.log(req.body);
  res.json(country);
});

module.exports = router;
