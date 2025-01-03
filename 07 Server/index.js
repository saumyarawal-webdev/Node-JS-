const http = require("http");
const fs = require("fs");
const port = 3000;
const server = http.createServer((req, res) => {
  console.log("New Request received.");
  const log = `${Date.now()}: New Request at ${req.url} on port ${port}\n`;
  let html = ``;
  switch (req.url) {
    case "/":
      html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Server Response</title>
</head>
<body style="margin: 0; font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f4;">
  <div style="background-color: #007bff; color: white; padding: 20px;">
      <h1 style="margin: 0;">Welcome to My Server</h1>
  </div>
  <div style="padding: 20px;">
      <p style="font-size: 18px; color: #333;">
          This is a dynamically generated HTML response.
      </p>
      <button style="padding: 10px 20px; background-color: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer;">
          Click Me
      </button>
  </div>
</body>
</html>`;
      break;
    case "/about":
      html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Server Response</title>
</head>
<body style="margin: 0; font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f4;">
  <div style="background-color:rgb(209, 185, 31); color: white; padding: 20px;">
      <h1 style="margin: 0;">Welcome to My Server</h1>
  </div>
  <div style="padding: 20px;">
      <p style="font-size: 18px; color: #333;">
          This is a dynamically generated HTML response.
      </p>
      <button style="padding: 10px 20px; background-color:rgb(138, 56, 103); color: white; border: none; border-radius: 5px; cursor: pointer;">
          Click Me
      </button>
  </div>
</body>
</html>`;
      break;
    default:
      html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Server Response</title>
</head>
<body style="margin: 0; font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f4;">
  <div style="background-color:rgb(209, 31, 31); color: white; padding: 20px;">
      <h1 style="margin: 0;">Opps! :( Page not Found.</h1>
  </div>
  <div style="padding: 20px;">
      <p style="font-size: 18px; color: #333;">
          This is a dynamically generated HTML response.
      </p>
      <button style="padding: 10px 20px; background-color:rgb(138, 56, 103); color: white; border: none; border-radius: 5px; cursor: pointer;">
          Go back Home
      </button>
  </div>
  
</body>
</html>`;
  }

  fs.appendFile("log.txt", log, (err, data) => {
    res.setHeader("Content-Type", "text/html");
    res.end(html);
  });
});

server.listen(port, () => {
  console.log(`Server is started at localhost:${port}`);
});
