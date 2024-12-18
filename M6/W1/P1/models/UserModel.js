import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nome: String,
  cognome: String,
  email: String,
  data_di_nascita: Date,
});

const User = mongoose.model("user", userSchema);

export default User;
