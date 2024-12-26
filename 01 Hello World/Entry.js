const fs = require("fs");
const date = new Date();
fs.appendFileSync(
  "./log.txt",
  `\n${date.getDate().toLocaleString()}-${date.getMonth().toString()}-${date
    .getFullYear()
    .toString()}   :   ${date.getHours().toString()}:${date
    .getMinutes()
    .toString()}:${date.getSeconds().toString()}`
);
