# Task Time Logger 📜

Welcome to the **Task Time Logger**, a simple Node.js-based system to track daily work logs with **entry** and **exit** times, along with task details. This system ensures structured logging and prevents duplicate entries or exits, keeping your log file organized and accurate. 🚀

---

## 📋 Features

- Logs **entry time**, **exit time**, and **tasks** in a single file (`log.txt`).
- Prevents duplicate entries or exits for the same day.
- Automatically formats logs as:

- Designed for **ease of use** and **error-free tracking**.

---

## 📦 Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v14 or above)  
  [Download Node.js](https://nodejs.org/)

---

## 🚀 Installation

1. **Clone this repository**:

```bash
git clone https://github.com/saumyarawal-webdev/LogMaster.git
cd Task-Time-Logger
```

## Install dependencies:

No external dependencies are required! 🎉

## Setup log.txt:

Create an empty file named log.txt in the project directory.

The system automatically formats the log file with column headers when you run it.

## 🔄 Usage

This system is divided into two scripts: entry.js and exit.js. Follow the steps below to use them effectively.

## Step 1: Logging an Entry

```base
node entry.js
```

## What it does:

Checks if there’s already an exit logged for the previous entry.
Logs the current date and entry time in the log.txt file.
Ensures no duplicate entries are logged.

## Step 2: Logging an Exit

Run the exit.js script to log your exit time and task details for the day.

```bash
node exit.js
```

## What it does:

Prompts you to enter the number of tasks and their titles.
Logs the tasks and exit time for the same day in the log.txt file.
Prevents duplicate exits if tasks are already logged for the day.

## 📂 Log File Format

Your log.txt file will look like this after using the system:

```txt
DATE         Entry Time     Exit Time      Tasks
DD-MM-YY     HH:MM:SS AM    HH:MM:SS PM    [Task 1, Task 2]
```

## 🛠 Functional Details

Here’s how the system works behind the scenes:

**entry.js:**

Adds a new entry with the current date and time.
Prevents logging a new entry if the previous exit is missing.

**exit.js:**

Checks for an existing entry on the same day.
Prompts for tasks and logs them alongside the exit time.
Prevents duplicate exits by verifying the Tasks column.

**Error Handling:**

Ensures no accidental overwrites or incomplete logs.
Displays meaningful messages for duplicate entries or exits.

## 🧩 Future Enhancements

Add file encryption for enhanced log security.
Allow export to formats like CSV or JSON.
Introduce a web-based interface for easier interaction.

## 🤝 Contribution

Feel free to contribute to this project! Fork the repository, make your changes, and submit a pull request. Let's build something amazing together! 🚀
