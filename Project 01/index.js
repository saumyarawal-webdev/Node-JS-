const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const app = express();

const PORT = 8000;
//connect to db
mongoose
  .connect(
    "mongodb+srv://saumya007:saumya7103@cluster0.r0l6c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log("MongoDB connection error", err));
//schema
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
    job_title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//model
const User = mongoose.model("user", userSchema);

//middleware
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  // return res.json({ message: "Middleware interupted request." });
  console.log("Hello from middleware 1");

  next();
});

app.use((req, res, next) => {
  // return res.json({ message: "Middleware interupted request." });
  console.log("Hello from middleware 2");

  // res.end("Hello from middleware 2");
  next();
});

// Route
app.get("/users", async (req, res) => {
  const users = await User.find({});
  const html = `<ul>
    ${users
      .map((user) => `<li>${user.first_name} - ${user.email}</li>`)
      .join("")}
    </ul>`;
  res.send(html);
});

//REST API
app.get("/api/users", async (req, res) => {
  const allusers = await User.find({});
  res.setHeader("X-myName", "Saumya");
  return res.json(allusers);
});

app.get("/api/users/:id", async (req, res) => {
  const finduser = await User.findById(req.params.id);

  if (!finduser) {
    return res.status(404).json({ msg: "User not found" });
  }
  return res.json(finduser);
});

app.post("/api/users", async (req, res) => {
  //TODO : create new user
  const body = req.body;
  if (
    !body ||
    !body.email ||
    !body.last_name ||
    !body.first_name ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });

  return res.status(201).json({ msg: "success" });
});

app.patch("/api/users/:id", async (req, res) => {
  //TODO : update existing user
  await User.findByIdAndUpdate(req.params.id, { first_name: "Shreya" });
  return res.json({ status: "Success" });
});

app.delete("/api/users/:id", async (req, res) => {
  //TODO : delete user with id
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "success" });
});
app.listen(PORT, () => {
  console.log(
    "%c✔ Success! server is stated at ",
    "color: green; font-weight: bold;",
    `${PORT}✅`
  );
});
