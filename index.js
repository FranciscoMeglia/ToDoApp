const btnAdd = document.getElementById("btnAdd");
const taskInput = document.getElementById("taskInput");
const tasks = document.getElementById("tasks");

// SAVE TASKS INTO LOCAL STORAGE EN DEPLOY IT WHEN THE WEB IS LOADED
window.addEventListener("load", () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  storedTasks.forEach((task) => {
    createTaskElement(task);
  });
});

// FUNCTION TO CREATE TASKS ELEMENTS 
function createTaskElement(task) {
  const newDiv = document.createElement("div");
  const divContent = document.createElement("p");
  const imgDelete = document.createElement("img");

  // SETTING ELEMENTS
  imgDelete.classList.add("btnRemove");
  imgDelete.src = "/delete.png";
  divContent.innerText = task;

  // ADD ELEMENTS TO TASK CONTAINER
  newDiv.appendChild(divContent);
  newDiv.appendChild(imgDelete);
  newDiv.classList.add("taskCreate");
  tasks.appendChild(newDiv);

  // ADD EVENT TO REMOVE TASK 
  imgDelete.addEventListener("click", () => {
    tasks.removeChild(newDiv);
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    const updatedTasks = storedTasks.filter((storedTask) => storedTask !== task);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  });
}

// ADD TASK
btnAdd.addEventListener("click", () => {
  if (taskInput.value.length > 10) {
    const task = taskInput.value;
    createTaskElement(task);

    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  } else {
    console.log("Su palabra es muy corta");
  }
});


