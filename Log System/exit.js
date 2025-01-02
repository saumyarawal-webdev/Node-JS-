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

  // Read the file and process the last entry
  fs.readFile("log.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading log file:", err);
      return;
    }

    const lines = data.trim().split("\n");
    if (lines.length === 1) {
      console.error("No entry found to log exit for.");
      return;
    }

    const lastLine = lines[lines.length - 1];
    const columns = lastLine.split(/\s{2,}/); // Split by two or more spaces

    // Check if Exit Time is already logged
    if (columns.length > 2 && columns[2].trim()) {
      console.error("Exit time has already been logged for the last entry.");
      process.exit();
      return;
    }

    // Ask for tasks
    rl.question("How many tasks did you complete? ", (taskCount) => {
      const taskCountNum = parseInt(taskCount, 10);
      if (isNaN(taskCountNum) || taskCountNum <= 0) {
        console.error("Invalid number of tasks.");
        rl.close();
        return;
      }

      rl.question(
        "Enter the titles of the tasks, separated by commas: ",
        (tasks) => {
          const taskList = tasks
            .split(",")
            .map((task) => task.trim())
            .join(", ");
          const updatedLine = `${lastLine.trim()}    ${formattedTime}    ${taskList}`;
          lines[lines.length - 1] = updatedLine;

          // Write back to the file
          fs.writeFile("log.txt", lines.join("\n") + "\n", (err) => {
            if (err) console.error("Error updating log file:", err);
            else console.log("Exit time and tasks logged successfully!");
            rl.close();
          });
        }
      );
    });
  });
};

logExit();
