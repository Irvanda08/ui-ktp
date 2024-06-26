const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "register.html"));
});

app.get("/edit/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "edit.html"));
});

app.get("/input_data", (req, res) => {
  res.sendFile(path.join(__dirname, "input_data.html"));
});

app.get('/data', (req, res) => {
  res.json({ message: 'This is a CORS-enabled response.' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}...`);
});
