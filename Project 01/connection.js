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

// mongodb+srv://saumya007:saumya7103@cluster0.r0l6c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
