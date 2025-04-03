const mongoose = require("mongoose");

async function connectMongoDb(url) {
  //connect to db
  return mongoose
    .connect(url)
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log("MongoDB connection error", err));
}

module.exports = {
  connectMongoDb,
};
