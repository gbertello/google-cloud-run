const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello world again!");
});

app.listen(8080);