const express = require("express");
// const http = require("http");
const app = express();

app.get("/", (req, res) => {
  return res.end("<h1>Hello from Express Home!</h1>");
});

app.get("/about", (req, res) => {
  return res.end("<h1>Hello from Express About!</h1>");
});

// const myserver = http.createServer(app);

app.listen(3000, () => console.log("Server Started!!"));
