import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";

const app = express();
app.use(cors());
app.use(express.json());
const upload = multer({ dest: "uploads/" });

const databaseUri = "mongodb://localhost:27017/local";

const crazyFunction = () => {
  const myNum = Math.random();
  if (myNum > 0.5) {
    return myNum;
  } else {
    throw new Error("crazy error");
  }
};

//middleware

const loggingMiddleware = (request, response, next) => {
  console.log(
    `Request Method: ${request.method}, URL: ${request.url}`
  );
  next(); // Pass control to the next middleware
};

const onlySometimeMiddleware = (
  request,
  response,
  next
) => {
  console.log("Non funziono per tutte le volte");
  next();
};

const errorMiddleware = (
  error,
  request,
  response,
  next
) => {
  response.status(500).json(error.message);
  console.log({ error });
};

app.use(loggingMiddleware);

//database
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
  data_di_nascita: Date,
  avatar: String,
});

const Authors = mongoose.model("authors", authorSchema);

connectDatabase();

const queryAll = async () => {
  try {
    const allAuthors = await Authors.find({});
    crazyFunction();
    return allAuthors;
  } catch (error) {
    throw new Error(error);
  }
};

//router
app.get(
  "/",
  onlySometimeMiddleware,
  (request, response) => {
    response.json("Benvenuto nella tua back end");
  }
);

app.get("/authors", async (request, response, next) => {
  try {
    const authors = await queryAll();
    response.json(authors);
  } catch (error) {
    next(error);
  }
});

app.post(
  "/immagine",
  upload.single("avatar"),
  (request, response) => {
    console.log(request.file);
  }
);

app.post("/email", (request, response) => {
  const { email } = request.body;
  sgMail
    .send(email)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.use(errorMiddleware);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
