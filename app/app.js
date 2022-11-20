const express = require("express");
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');

const app = express();
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(yaml.load('app/openapi.yaml')))

app.get("/", function (req, res) {
  res.send("Hello world!");
});

//

app.listen(8080);
