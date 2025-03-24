import "../index.css";
import khokhloma from "../images/khokhloma.svg";
import { saveTasks, loadTasks } from "./localStorage";

document.querySelector(".decor__image").src = khokhloma;

const addBtn = document.querySelector("#todo__add-btn");
const taskInput = document.querySelector("#popover__input");
const todoList = document.querySelector(".todo-list");
const taskTemplate = document.querySelector("template");
const closePopoverBtn = document.querySelector("#popover__close-btn");

loadTasks(addTaskToDOM);

function handleDeleteTodoLine(evt) {
  evt.currentTarget.closest(".todo__line").remove();
  saveTasks();
}

function handleChangeStatus(evt) {
  evt.currentTarget.closest(".todo__line").classList.toggle("done");
  saveTasks();
}

function addTaskToDOM(taskText, isDone = false) {
  const taskItem = taskTemplate.content.cloneNode(true);
  const taskElement = taskItem.querySelector(".todo__line");
  const taskTextElement = taskItem.querySelector(".todo__task");
  const deleteBtn = taskItem.querySelector(".todo__delete-btn");
  const statusBtn = taskItem.querySelector(".todo__status-btn");

  taskTextElement.textContent = taskText;
  if (isDone) {
    taskElement.classList.add("done");
  }

  deleteBtn.addEventListener("click", handleDeleteTodoLine);
  statusBtn.addEventListener("click", handleChangeStatus);
  todoList.append(taskElement);
}

function onAddTask(evt) {
  evt.preventDefault();
  if (taskInput.value.trim() === "") return;

  addTaskToDOM(taskInput.value);
  taskInput.value = "";
  saveTasks();
}

function handleClosePopover(evt) {
  evt.preventDefault();
  document.querySelector("#todo-list__popover").hidePopover();
}

closePopoverBtn.addEventListener("click", handleClosePopover);

addBtn.addEventListener("click", onAddTask);

taskInput.addEventListener("keydown", (evt) => {
  if (evt.code === "Enter" && !evt.shiftKey && !evt.ctrlKey) {
    onAddTask(evt);
  }
});
