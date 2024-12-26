function readData(filePath) {
  const fs = require("fs");
  const data = fs.readFileSync("./contacts.txt", "utf-8");
  return data;
}

module.exports = readData;
