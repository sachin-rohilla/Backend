import express from "express";
export const app = express();
app.get("/", (req, res, next) => {
  res.send("hello world");
});
