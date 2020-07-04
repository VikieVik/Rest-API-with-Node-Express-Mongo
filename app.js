const express = require("express");
const app = express();

//Middleware

//Routes
app.get("/", (req, res) => {
  res.send("we are live");
});

//start listening
app.listen(3000);
