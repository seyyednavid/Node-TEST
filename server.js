const express = require("express");

const app = express();
let counter = 0;
app.get("/", (req, res) => {
  res.send({ hello: "class10" });
});

app.get("/counter", (req, res) => {
  counter = counter + 1;
  res.send({ counter: counter });
});

const port = 57777;
app.listen(port, () => {
  console.log(`My app is listening on port ${port}`);
});
