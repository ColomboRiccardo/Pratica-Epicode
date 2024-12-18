import path from "path";
import express from "express";

import { getAllUsers } from "../controllers/userController.js";

const router = express.Router();

const __dirname = path.resolve();

router.get("/", (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.sendFile("/views/home/index.html", {
    root: path.join(__dirname),
  });
  // response.send("Get homepage 3001");
});

router.get("/style.css", (req, res) => {
  res.sendFile(
    path.join(__dirname, "/views/home/style.css")
  );
});

router.get("/users", async (req, res) => {
  const users = await getAllUsers();
  res.send(JSON.stringify(users));
});

export default router;
