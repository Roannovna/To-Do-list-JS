import "../index.css";
import khokhloma from "../images/khokhloma.svg";

document.querySelector(".decor__image").src = khokhloma;

const addBtn = document.querySelector("#todo__add-btn");
const taskInput = document.querySelector("#popover__input");
const todoList = document.querySelector(".todo-list");
const taskTemplate = document.querySelector("template");

function onAddTask(evt) {
  evt.preventDefault();
  if (taskInput.value.trim() === "") return;

  const taskItem = taskTemplate.content.cloneNode(true);
  const taskText = taskItem.querySelector(".todo__task");
  const deleteBtn = taskItem.querySelector(".todo__delete-btn");
  const statusBtn = taskItem.querySelector(".todo__status-btn");

  taskText.textContent = taskInput.value;

  deleteBtn.addEventListener("click", () => taskItem.remove());

  statusBtn.addEventListener("click", () => {
    statusBtn.classList.toggle(".done");
  });

  todoList.append(taskItem);

  taskInput.value = "";
}

addBtn.addEventListener("click", onAddTask);

// taskInput.addEventListener("keydown", (evt) => {
//   if (evt.key === "Enter") {
//     onAddTask();
//   }
// });
