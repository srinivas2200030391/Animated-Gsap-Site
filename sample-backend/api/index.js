const express = require("express");
const app = express();
const port = 1329;

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});
app.get("/", (req, res) => {
  res.send(`Example app listening at http://localhost:${port}`);
});

app.listen(port, (req, res) => {
  console.log(`Example app listening at http://localhost:${port}`);
});
