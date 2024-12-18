import mongoose from "mongoose";

async function dbMain() {
  await mongoose.connect("mongodb://localhost:27017/local");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

export default dbMain;
