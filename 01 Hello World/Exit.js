const fs = require("fs");
const date = new Date();
fs.appendFileSync(
  "./log.txt",
  `\t${date.getHours().toString()}:${date.getMinutes().toString()}:${date
    .getSeconds()
    .toString()}`
);
