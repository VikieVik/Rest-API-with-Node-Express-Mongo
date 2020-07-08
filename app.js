const express = require("express");
mofule;
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
require("dotenv/config");

/*
1) Use postman for simple test
2) use npm cors module  for accesing this server 
from broswers using nroemal http request
*/

//Middlewares
app.use(bodyparser.json());

// import routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

// Routes
app.get("/", (req, res) => {
  res.send("we are on home");
});

// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  return console.log("connected to DB");
});

//start listening
app.listen(3000);
