"use strict";

const express = require("express");
const app = new express();
require('dotenv').config()

const PORT=process.env.PORT
app.get("/", (req, res) => {
  res.status(200).send("every thing is good");
});

app.use(express.static("./public"));

function start() {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}

module.exports = { start: start };