import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const server = express();
server.use(cors());
server.use(express.json());

const databaseUri = "mongodb://127.0.0.1:27017/examples";
const saltRounds = 10;

const connectDb = async () => {
  try {
    await mongoose.connect(databaseUri);
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log(error);
  }
};

connectDb();

const hashExamplesSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const HashExample = mongoose.model(
  "hash_examples",
  hashExamplesSchema
);

server.post("/signup", async (request, response) => {
  const { email, password } = request.body;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      console.log("hash", hash);
      const hashExample = HashExample.create({
        email,
        password: hash,
      });
    });
  });
  response.status(201).json("aggiunto con successo!");
});

server.post("/signin", async (request, response) => {
  const { email, password } = request.body;
  const user = await HashExample.findOne({ email });
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      response.status(201).json("login con successo!");
    } else {
      response.status(401).json("login fallito!");
    }
  });
});

server.listen(3001, () => {
  console.log("Server running on port 3001");
});
