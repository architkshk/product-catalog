const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://admin:admin@cluster0-q1ze7.mongodb.net/test?retryWrites=true&w=majority";

module.exports = () => {
  mongoose.connect(MONGO_URI);

  mongoose.connection.on("connected", () => console.log("Connected to DB"));

  mongoose.connection.on("error", err => console.log("Error : " + err));

  mongoose.connection.on("disconnected", () => console.log("DB disconnected"));
};
