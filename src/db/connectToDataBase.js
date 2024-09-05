//connect to mongoose
const mongoose = require("mongoose");

async function  connectToDataBase() {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB", err);
      process.exit(1); // exit with failure status after 1 second
    });
}

module.exports = connectToDataBase;
