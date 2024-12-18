import {
  queryAll,
  queryAuthorFromId,
} from "../controllers/authorsControllers.js";
import express from "express";
import Author from "../models/authors.js";

//const server = express();
const router = express.Router();

//posso mettere le query dentro nelle routes
router.get("/", async (request, response) => {
  try {
    const authors = await Author.find({});
    response.send(authors);
  } catch (error) {
    console.log(error);
  }
});

//oppure posso mettere le query dentro i controllers e importarle
router.get("/:id", queryAuthorFromId);

export { router };
