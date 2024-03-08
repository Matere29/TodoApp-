# Task List Web App

This is a simple web application that allows users to add and remove tasks. The application utilizes HTML, CSS, and JavaScript to create a dynamic task list.

## Features

- **Add Task:** Users can add tasks to the list by typing in the input box and clicking the "Add" button.
- **Task Completion:** Clicking on a task toggles its completion status, visually marking it as completed or not.
- **Remove Task:** Users can remove a task by clicking on the "x" icon next to each task.
- **Persistent Storage:** The application utilizes localStorage to save tasks, ensuring that added tasks persist even after refreshing the page.

## Getting Started

1. Clone the repository or download the code.

    ```bash
    git clone https://github.com/yourusername/task-list-app.git
    ```

2. Open the `index.html` file in your web browser.

3. Start managing your tasks!

## Usage

1. Open the application in your web browser.
2. Type a task in the input box.
3. Click the "Add" button to add the task to the list.
4. Click on a task to mark it as completed or not.
5. Click on the "x" icon next to a task to remove it from the list.

## Code Overview

- **index.html:** Contains the structure of the web page.
- **styles.css:** Defines the styling for the web page.
- **script.js:** Implements the functionality of the task list.

## How it Works

- The `addTask` function is triggered when the user clicks the "Add" button. It checks if the input is empty and alerts the user if so. Otherwise, it creates a new task element and appends it to the task list.
- The `listContainer` has an event listener that toggles the completion status of a task when clicked. It also removes a task if the user clicks the "x" icon.
- The `saveData` function stores the task list in the browser's localStorage.
- The `showTasks` function retrieves the task list from localStorage and displays it on page load.

