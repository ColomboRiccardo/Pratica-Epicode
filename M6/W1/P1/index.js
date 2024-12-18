import express from "express";
import homeRoutes from "./routes/homeRoutes.js";

//db config import
import dbMain from "./config/db-config.js";

const server = express();

server.use(express.json());
server.use("/", homeRoutes);

const port = 3001;

dbMain().catch((err) => console.log(err));

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
