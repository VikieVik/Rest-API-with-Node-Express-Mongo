const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//Middleware

//Routes
app.get("/", (req, res) => {
  res.send("we are live");
});

// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  return console.log("connected to DB");
});

//start listening
app.listen(3000);
