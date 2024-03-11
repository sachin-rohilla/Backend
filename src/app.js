import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
export const app = express();

// middleware is like to check/validation type for example if user send some request so we want to check if user is logged or not
// middleware start

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// we use this becuase we don't want server overload from too many json requests/data
app.use(express.json({ limit: "50kb" }));

// we use this because in urls sometime we see +/% so it encoded and help us
app.use(express.urlencoded({ extended: true }));

// we use this if we want to save image/pdf or any assets to our server
app.use(express.static("public"));
// we use this from my server want to access user cookies and set cookies and perfome crud operation
app.use(cookieParser());

// middlewares end

app.get("/", (req, res, next) => {
  res.send("hello world");
});
