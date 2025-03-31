const express = require("express");
const { connectMongoDb } = require("./connection");

const { logReqRes } = require("./middlewares");

const app = express();

const userRouter = require("./routes/user");
const PORT = 8000;

//connection
connectMongoDb(
  "mongodb+srv://saumya007:saumya7103@cluster0.r0l6c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
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

app.use(logReqRes("log.txt"));
// Routes
app.use("/api/users", userRouter);
app.listen(PORT, () => {
  console.log(
    "%c✔ Success! server is stated at ",
    "color: green; font-weight: bold;",
    `${PORT}✅`
  );
});
