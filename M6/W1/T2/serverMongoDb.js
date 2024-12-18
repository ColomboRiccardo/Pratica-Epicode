import express from "express";
import { MongoClient } from "mongodb";

const server = express();

server.use(express.json());

const uri = "mongodb://localhost:27017";

const connectAndQuery = async () => {
  const databaseClient = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await databaseClient.connect();
    console.log("Successfully connected to the database");
    const databaseLocal = databaseClient.db("local");
    const collection = databaseLocal.collection("clients");

    // const result = await collection
    //   .find({})
    //   .limit(5)
    //   .toArray();
    // console.log(result);

    const query = { total_purchases: { $gt: 50 } };

    const moreThan50Results = await collection
      .find(query)
      .sort({ total_purchases: -1 })
      .limit(5)
      .toArray();
    console.log(moreThan50Results);
  } catch (err) {
    console.log(err);
  }
};

connectAndQuery();

const port = 3001;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
