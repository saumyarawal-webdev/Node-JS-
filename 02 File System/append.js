const appendData = (filePath, data) => {
  const fs = require("fs");
  fs.appendFileSync(filePath, data);
};

module.exports = appendData;
