const express = require("express");
//const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
//const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//Connect to MongoDB
/*mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});*/

//User Schema
/*const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});*/

//const User = mongoose.model("User", userSchema);

// Register route
/*app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    username,
    password: hashedPassword,
  });
  await user.save();
  res.status(201).send("User registered");
});*/

// Login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const isUserValid = username === "Riccardo";
  const isPasswordValid = password === "banana";

  //Flusso normale con bcrypt e database
  /* const user = await User.findOne({ username });
  const isPasswordValid = await bcrypt.compare(
    password,
    user.password
  ); */

  if (!isUserValid || !isPasswordValid) {
    res.status(400).send("Invalid credentials");
  }

  // const token = jwt.sign({ id: user._id }, "secret", {

  const token = jwt.sign({ id: "Riccardo" }, "cocomero", {
    expiresIn: "1h",
    audience: "ourApp",
    issuer: "ourCompany",
  });
  res.json({ token });

  //res.status(200).json("Tutto ok");
});

// Protected route
app.get("/protected", (req, res) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(token, "cocomero", {
      audience: "ourApp",
      issuer: "ourCompany",
    });
    // if(req.body.username === verified.id){

    // }
    //req.user = verified;
    res.status(200).json({
      userName: verified.id,
      surname: "Colombo",
      address: "Via garibaldi 15",
      city: "Milano",
    });
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      res.status(401).send("Token expired");
    } else {
      res.status(400).send("Invalid token");
    }
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
