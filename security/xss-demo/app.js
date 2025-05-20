const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const comments = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const escape = (str) =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

app.get("/", (req, res) => {
  res.render("index", { comments });
});

app.post("/comment", (req, res) => {
  comments.push(req.body.content);
  res.redirect("/");
});

app.get("/safe", (req, res) => {
  res.render("safe", { comments, escape });
});

app.post("/safe-comment", (req, res) => {
  comments.push(req.body.content);
  res.redirect("/safe");
});

app.listen(3000, () => console.log("http://localhost:3000"));
