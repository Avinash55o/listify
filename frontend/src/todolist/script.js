// Get DOM elements
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to get current date and time
function getCurrentDateTime() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Add a new task
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText) {
        // Create new list item
        const li = document.createElement('li');
        
        // Create the text for the task
        const textNode = document.createTextNode(taskText);
        li.appendChild(textNode);

        // Get the current date and time when the task is added
        const dateTime = getCurrentDateTime();

        // Create a span to display the date and time
        const dateTimeSpan = document.createElement('span');
        dateTimeSpan.classList.add('dateTime');
        dateTimeSpan.textContent = `${dateTime}`;
        li.appendChild(dateTimeSpan);

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.textContent = 'Delete';
        li.appendChild(deleteBtn);

        // Create edit button
        const editBtn = document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.textContent = 'Edit';
        li.appendChild(editBtn);

        // Mark task as completed on click
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Delete task
        deleteBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent task click event
            li.remove();
        });

        // Edit task
        editBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent task click event
            const newTaskText = prompt("Edit your task:", taskText);
            if (newTaskText !== null && newTaskText.trim() !== "") {
                li.firstChild.textContent = newTaskText.trim(); // Update task text
            }
        });

        // Append the task to the list
        taskList.appendChild(li);
        taskInput.value = ''; // Clear input field
    }
});

// Optionally, allow pressing 'Enter' to add a task
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTaskBtn.click();
    }
});
