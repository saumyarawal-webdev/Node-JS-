const fs = require("fs");
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

fs.appendFileSync("./test.txt", `${new Date().getDate().toLocaleString()}\n`);
