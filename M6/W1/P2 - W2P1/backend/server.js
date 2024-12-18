//const express = require("express");

import cors from "cors";
import express from "express";
import databaseConnect from "./config/db.js";
import { router as authorRouter } from "./routes/authorRoutes.js";
import {
  errorMiddleware,
  loggingMiddleware,
} from "./middlewares/errorMiddleware.js";

const server = express();

server.use(express.json());
server.use(cors());
server.use(loggingMiddleware);
server.use("/api/authors", authorRouter);

databaseConnect();

const port = 3001;

server.use(errorMiddleware);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
