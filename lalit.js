const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      ${taskText}
      <span class="delete-button" onclick="removeTask(this)">Delete</span>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function removeTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}