// Get references to the HTML elements
const inputBox = document.getElementById("input-box"); // Reference to the input box element
const listContainer = document.getElementById("list-container"); // Reference to the list container element
const addButton = document.getElementById("addTaskButton"); // Reference to the "Add Task" button element

// Function to add a task
function addTask(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Check if the input is empty
    if (inputBox.value === '') {
        alert("You must add a task");
    } else {
        // Create a new list item and set its innerHTML to the input value
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Append the list item to the list container
        listContainer.appendChild(li);

        // Create a close button (span) for the list item
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for close symbol

        // Append the close button to the list item
        li.appendChild(span);
    }

    // Clear the input box
    inputBox.value = "";

    // Save the updated data to localStorage
    saveData();
}

// Event listener for the "Add Task" button
addButton.addEventListener("click", addTask);

// Event listener for the list container (delegated for dynamic elements)
listContainer.addEventListener("click", function (e) {
    // Check if the clicked element is a list item
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle the "checked" class
    } else if (e.target.tagName === "SPAN") {
        // If the clicked element is a close button, remove its parent (the list item)
        e.target.parentElement.remove();
    }
}, false);

// Function to save data to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); // Save the HTML content of the list container
}

// Function to show tasks from localStorage on page load
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data"); // Retrieve and display saved tasks
}

// Call the showTasks function to display tasks on page load
showTasks();

