import express, { request } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import { PEXELS_API_KEY } from "./secrets.js";

const server = express();
server.use(cors());
server.use(express.json());

console.log(PEXELS_API_KEY);
//console.log(process.env);

server.get("/api/images", async (request, response) => {
  const pexelResponse = await fetch(
    `https://api.pexels.com/v1/curated?per_page=20&page=1`,
    {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    }
  );

  const images = await pexelResponse.json();
  response.send(pexelResponse);
});

server.post("/login", (request, response) => {
  const { username, password } = request.body;
  if (username === "riccardo" && password === "cocomero") {
    response.json({
      isLoggedIn: true,
      token: jwt.sign({ id: "riccardo" }, "cocomero", {
        expiresIn: "10000",
      }),
    });
  }
});

server.listen(3001, () => {
  console.log("Server running on port 3001");
});
