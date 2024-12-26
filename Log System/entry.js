// entry.js
const fs = require("fs");

const logEntry = () => {
  const now = new Date();
  const formattedDate = now.toLocaleDateString("en-GB").replace(/\//g, "-"); // Format: DD-MM-YY
  const formattedTime = now.toLocaleTimeString("en-GB", { hour12: true }); // Format: HH:MM:SS AM/PM

  const columnTitles = "DATE         Entry Time    Exit Time      Tasks\n";

  // Check if file exists
  fs.readFile("log.txt", "utf8", (err, data) => {
    if (err && err.code === "ENOENT") {
      // File does not exist, create it with column titles
      fs.writeFile("log.txt", columnTitles, (err) => {
        if (err) {
          console.error("Error creating log file:", err);
          return;
        }
        console.log("Log file created with column titles.");
        appendEntry();
      });
    } else if (err) {
      console.error("Error reading log file:", err);
    } else {
      // File exists, check the last line
      const lines = data.trim().split("\n");
      const lastLine = lines[lines.length - 1];

      if (lines.length === 1) {
        // Only column titles exist, safe to log entry
        appendEntry();
        return;
      }

      const columns = lastLine.split(/\s{2,}/); // Split by two or more spaces
      const hasExitTime = columns.length > 2 && columns[2].trim(); // Check if 'Exit Time' is filled

      if (!hasExitTime) {
        console.error(
          "Cannot log a new entry without logging an exit for the previous entry."
        );
        return;
      }

      appendEntry();
    }
  });

  const appendEntry = () => {
    const logLine = `${formattedDate}     ${formattedTime}               \n`;
    fs.appendFile("log.txt", logLine, (err) => {
      if (err) console.error("Error writing to log file:", err);
      else console.log("Entry time logged successfully!");
    });
  };
};

logEntry();
