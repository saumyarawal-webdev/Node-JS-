const express = require("express");
const fs = require("fs");
const app = express();

const PORT = 8000;

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
let users = require("./fake_data.json");
// Route
app.get("/users", (req, res) => {
  const html = `<ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
  res.send(html);
});

//REST API
app.get("/api/users", (req, res) => {
  res.setHeader("X-myName", "Saumya");
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }
  return res.json(user);
});

app.post("/api/users", (req, res) => {
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
  console.log(body);
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("./fake_data.json", JSON.stringify(users), (err, data) => {});
  return res.status(201).json({ status: "success", id: users.length });
});

app.patch("/api/users/:id", (req, res) => {
  //TODO : update existing user
  return res.json({ status: "pending" });
});

app.delete("/api/users/:id", (req, res) => {
  //TODO : delete user with id
  return res.json({ status: "pending" });
});
app.listen(PORT, () => {
  console.log(
    "%c✔ Success! server is stated at ",
    "color: green; font-weight: bold;",
    `${PORT}✅`
  );
});
