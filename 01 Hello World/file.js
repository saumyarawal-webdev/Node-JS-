const fs = require("fs");

// two types of functions - synchronous and asynchronous

//Sync....
// fs.writeFileSync("./test.txt", "hello there....2");

//Async call
// fs.writeFile("./test.txt", "Hello Async..!", (err) => {});

//-----------ReadFile-------//
//readFileSync -- directly return the data into variable
// const data = fs.readFileSync("./contacts.txt", "utf-8");

// console.log(data);

//readFile -- checks if error occured or not....! takes function with err,result
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(result);
//   }
// });

// append file
//fs.appendFileSync("./test.txt", `${new Date().getDate().toLocaleString()}\n`);

//copy file
//fs.cpSync("./test.txt", "copy.txt");

//delete file
//fs.unlinkSync("./copy.txt");

//status of file
//console.log(fs.statSync("./test.txt").isFile());

//make directory
//fs.mkdirSync("my-docs");
//fs.mkdirSync("my-docs/a", { recursive: true });
