import express from "express";
import mongoose from "mongoose";

const server = express();
server.use(express.json());

const databaseUri = "mongodb://localhost:27017/Authores";

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

const authorSchema = new mongoose.Schema({
  nome: String,
  cognome: String,
  email: String,
  "data di nascita": Date,
});

const Author = mongoose.model(
  "authores_collection",
  authorSchema
);

const queryAll = async () => {
  try {
    const authors = await Author.find({});
    console.log("Query result:", authors);
    return authors;
  } catch (error) {
    console.error("Error querying authors:", error);
    return [];
  }
};

const main = async () => {
  await connectDatabase();
  const authors = await queryAll();
  console.log("Found authors:", authors);
  if (authors.length === 0) {
    console.log("No authors found in the database.");
  }
};

main();

const port = 3001;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
