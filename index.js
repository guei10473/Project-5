const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes/auth-route");

mongoose
  .connect(
    "mongodb+srv://user_1:SS3uvIlGsPZpsna6@cluster0.ooo7zht.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connect to mongodb atlas.");
  })
  .catch((err) => {
    console.log(err);
  });

// middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRoute);

// route

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, () => console.log("Server is running on port 8080."));
