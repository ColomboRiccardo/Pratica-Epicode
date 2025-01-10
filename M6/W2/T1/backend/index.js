import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());
mongoose.set("debug", true);

const databaseUri = "mongodb://127.0.0.1:27017/local";

const connectDatabase = async () => {
  try {
    await mongoose.connect(databaseUri);
    console.log("Successfully connected to the database");
  } catch (error) {
    console.error(
      "Error connecting to the database:",
      error
    );
  }
};

const userSchema = new mongoose.Schema({
  nome: String,
  cognome: String,
  email: String,
});

const User = mongoose.model("users", userSchema);

const queryAll = async () => {
  try {
    const users = await User.find({});
    //console.log("Query result:", users);
    return users;
  } catch (error) {
    console.error("Error querying users:", error);
    return [];
  }
};

const queryUser = async (useremail) => {
  try {
    const users = await User.find({ email: useremail });
    //console.log("Query result:", users);
    if (users.length === 0) {
      throw new Error("User not found");
    }
    return users;
  } catch (error) {
    console.error("Error querying users:", error);
    return [];
  }
};

const passwordMiddleware = (request, response, next) => {
  if (request.body.password === "pasword") {
    next();
  } else {
    response.sendStatus(401);
  }
};

server.use((req, res, next) => {
  console.log(
    `Request Method: ${req.method}, URL: ${req.url}`
  );
  next(); // Pass control to the next middleware
});

const main = async () => {
  await connectDatabase();
};

main();

server.get("/users", async (request, response) => {
  const users = await queryAll();
  response.send(users);
});

server.post(
  "/usernames",
  passwordMiddleware,
  async (request, response, next) => {
    const users = await queryUser(request.body.useremail);
    if (users.length === 0) {
      const error = new Error("Found no users");
      next(error);
    } else {
      response.send(users);
    }
  }
);

server.use((error, request, response, next) => {
  if ((error = "Found no users")) {
    response
      .status(404)
      .send("Non abbiamo trovato utenti con questo nome");
  }
  response.status(500).send(error.message);
});

const port = 3001;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
