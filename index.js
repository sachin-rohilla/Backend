require("dotenv").config();
const express = require("express");
const app = express();
const port = 6000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.json({ name: "user", email: "@email.com" });
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
