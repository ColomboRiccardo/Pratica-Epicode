const express = require("express");
const cors = require("cors");

const server = express();

var corsOptions = {
  origin: "https://vite-terza-volta.vercel.app",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

server.use(cors(corsOptions));
server.use(express.json());

server.get("/api", (request, response) => {
  response.send("Hello World");
});

server.get("/api/input", (request, response) => {
  response.json(request.body.input);
});

server.listen(3001, () => {
  console.log("Server running on port 3001");
});

module.exports = server;
