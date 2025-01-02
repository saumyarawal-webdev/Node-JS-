// exit.js
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const logExit = () => {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString("en-GB", { hour12: true }); // Format: HH:MM:SS AM/PM

  rl.question("How many tasks did you complete? ", (taskCount) => {
    const taskNumber = parseInt(taskCount, 10);

    if (isNaN(taskNumber) || taskNumber < 1) {
      console.error("Invalid number of tasks. Exiting...");
      rl.close();
      return;
    }

    const tasks = [];
    const getTaskTitles = (index) => {
      if (index < taskNumber) {
        rl.question(`Enter title for task ${index + 1}: `, (task) => {
          tasks.push(task);
          getTaskTitles(index + 1);
        });
      } else {
        const tasksLog = tasks.join(", ");
        fs.readFile("log.txt", "utf8", (err, data) => {
          if (err) {
            console.error("Error reading log file:", err);
            rl.close();
            return;
          }

          const lines = data.trim().split("\n");
          const lastLine = lines.pop();

          if (lastLine.includes("Exit Time")) {
            console.error("Exit time already logged for the last entry.");
            rl.close();
            return;
          }

          const updatedLine = `${lastLine.trim()}    ${formattedTime}    ${tasksLog}`;
          lines.push(updatedLine);

          fs.writeFile("log.txt", lines.join("\n") + "\n", (err) => {
            if (err) console.error("Error writing to log file:", err);
            else console.log("Exit time and tasks logged successfully!");
            rl.close();
          });
        });
      }
    };

    getTaskTitles(0);
  });
};

logExit();
