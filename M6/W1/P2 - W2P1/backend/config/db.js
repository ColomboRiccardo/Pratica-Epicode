import mongoose from "mongoose";

const databaseUri = "mongodb://localhost:27017/local";

const databaseConnect = async () => {
  try {
    await mongoose.connect(databaseUri);
    console.log(
      "Connessione al database effettuata con successo"
    );
  } catch (error) {
    console.log(error);
  }
};

export default databaseConnect;
