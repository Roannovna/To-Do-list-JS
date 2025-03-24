function saveTasks() {
  let tasks = [];
  document.querySelectorAll(".todo__line").forEach(function (item) {
    tasks.push({
      text: item.querySelector(".todo__task").textContent.trim(),
      status: item.classList.contains("done"),
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(onAddTaskFromStorage) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => onAddTaskFromStorage(task.text, task.status));
}

export { saveTasks, loadTasks };
