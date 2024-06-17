const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

function createTaskItem(
  taskInput,
  descriptionInput,
  priorityInput,
  deadlineInput,
  timeInput
) {
  const taskItem = document.createElement("div");
  taskItem.classList.add("task");
  taskItem.dataset.priority = priorityInput;
  taskItem.innerHTML = `
        <p><strong>${taskInput}</strong></p>
        ${descriptionInput ? `<p>${descriptionInput}</p>` : ""}
        <div class="task-details">
            <p>Priority: ${priorityInput}</p>
            <p>Deadline: ${deadlineInput} ${timeInput}</p>
            <button class="mark-done">Mark Done</button>
            <button class="edit-task">Edit Task</button>
            <button class="close-task">Close</button>
            <button class="delete-task">Delete</button>
        </div>
    `;
  return taskItem;
}

addTaskButton.addEventListener("click", () => {
  const taskInput = document.getElementById("task").value.trim();
  const descriptionInput = document.getElementById("description").value.trim();
  const priorityInput = document.getElementById("priority").value;
  const deadlineInput = document.getElementById("deadline").value;
  const timeInput = document.getElementById("time").value;

  if (!taskInput || !deadlineInput || !timeInput) {
    alert(
      "Please enter a task and select valid date and time for the deadline."
    );
    return;
  }

  const selectedDate = new Date(`${deadlineInput}T${timeInput}`);
  const currentDate = new Date();

  if (selectedDate <= currentDate) {
    alert("Please select an upcoming date and time for the deadline.");
    return;
  }

  const taskItem = createTaskItem(
    taskInput,
    descriptionInput,
    priorityInput,
    deadlineInput,
    timeInput
  );

  taskList.appendChild(taskItem);

  document.getElementById("task").value = "";
  document.getElementById("description").value = "";
  document.getElementById("priority").value = "top";
  document.getElementById("deadline").value = "";
  document.getElementById("time").value = "";

  taskItem.addEventListener("click", () => {
    if (taskItem.classList.contains("expanded")) {
      taskItem.classList.remove("expanded");
    } else {
      const expandedTasks = document.querySelectorAll(".task.expanded");
      expandedTasks.forEach((task) => {
        task.classList.remove("expanded");
      });
      taskItem.classList.add("expanded");
    }
  });

  taskItem.querySelector(".close-task").addEventListener("click", (event) => {
    taskItem.classList.remove("expanded");
    event.stopPropagation();
  });

  taskItem.querySelector(".delete-task").addEventListener("click", (event) => {
    event.stopPropagation();
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      taskItem.classList.add("shrink");
      taskItem.addEventListener("transitionend", () => {
        taskItem.remove();
      });
    }
  });

  taskItem.querySelector(".edit-task").addEventListener("click", () => {
    document.getElementById("task").value = taskInput;
    document.getElementById("description").value = descriptionInput;
    document.getElementById("priority").value = priorityInput;
    document.getElementById("deadline").value = deadlineInput;
    document.getElementById("time").value = timeInput;

    taskItem.remove();
  });
});

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const priority = button.dataset.priority;
    filterTasks(priority);
  });
});

const showAllButton = document.querySelector(".show-all-btn");
showAllButton.addEventListener("click", () => {
  filterTasks("all");
});

function filterTasks(priority) {
  const tasks = document.querySelectorAll(".task");

  tasks.forEach((task) => {
    if (priority === "all" || task.dataset.priority === priority) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
