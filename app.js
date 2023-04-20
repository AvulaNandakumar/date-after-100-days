const addDays = require("date-fns/addDays");
const express = require("express");
const format = require("date-fns/format");
const app = express();
const date = new Date();

app.get("/", (request, response) => {
  response.send(format(addDays(date, 100), "d/L/y"));
});
app.listen(3000);
module.exports = app;
