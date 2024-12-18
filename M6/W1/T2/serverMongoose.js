import express from "express";
import mongoose from "mongoose";

const server = express();

server.use(express.json());

const uri = "mongodb://localhost:27017/local";

const port = 3001;

const connectAndQuery = async () => {
  await mongoose.connect(uri);
  console.log("Successfully connected to the database");
};

const clientSchema = new mongoose.Schema({
  "First Name": String,
  "Last Name": String,
  Company: String,
  Country: String,
  Email: String,
  "Subscription Date": String,
  total_purchases: Number,
});

const Clients = mongoose.model("clients", clientSchema);

const getAllClients = async (req, res) => {
  const users = await Clients.find({});
  return users;
};

const getClientsmoreThan50 = async (req, res) => {
  const users = await Clients.find({
    total_purchases: { $gt: 50 },
  })
    .sort({ total_purchases: -1 })
    .limit(5);
  return users;
};

const main = async () => {
  try {
    await connectAndQuery();
    // const clients = await getAllClients();
    // console.log(clients);
    const moreThan50 = await getClientsmoreThan50();
    console.log(moreThan50);
  } catch (error) {
    console.log(error);
  }
};

main();

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
