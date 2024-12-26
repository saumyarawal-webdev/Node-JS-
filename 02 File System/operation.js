const writeData = require("./write");
const readData = require("./read");
const appendData = require("./append");

const data = readData("../01 Hello World/contacts.txt");
console.log(data);

// writeData("./operation.js", 'console.log("hello there")');
// appendData("../01 Hello World/contacts.txt", "Shreena 221260116019");
