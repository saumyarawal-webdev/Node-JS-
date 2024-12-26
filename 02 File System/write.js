const writeData = (filePath, data) => {
  const fs = require("fs");
  fs.writeFileSync(filePath, data);

  console.log("file written successful....!!");
};

module.exports = writeData;
