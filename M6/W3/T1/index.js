import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import {
  addNewPost,
  saveComments,
} from "./controllers/postController.js";

const server = express();
server.use(cors());
server.use(express.json());

const databaseUri = "mongodb://localhost:27017/local";

server.listen(3001, () => {
  console.log("Server running on port 3001");
});

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

const mainDatabaseAction = async () => {
  try {
    await saveComments();
    await addNewPost();
  } catch (error) {
    console.log(error);
  }
};

connectDatabase();
mainDatabaseAction();
