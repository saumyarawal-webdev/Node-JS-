const express = require("express");
const fs = require("fs");
const app = express();

const PORT = 8000;

//middleware
app.use(express.urlencoded({ extended: false }));
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
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id === id);

  return res.json(user);
});

app.post("/api/users", (req, res) => {
  //TODO : create new user
  const body = req.body;
  console.log(body);
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("./fake_data.json", JSON.stringify(users), (err, data) => {});
  return res.json({ status: "success", id: users.length });
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
