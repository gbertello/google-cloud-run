const express = require("express");
const app = express();
const port = 8080;

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.listen(port, function () {
  console.log(`Google cloud run app listening on port ${port}!`);
});