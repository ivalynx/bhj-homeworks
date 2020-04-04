'use strict'

function todo() {
  const inputTask = document.getElementById('task__input');
  const submitTask = document.getElementById('tasks__add');
  const taskList = document.getElementById('tasks__list');
  let btnsTaskRemove = null;
  submitTask.addEventListener('click', (event) => {
    event.preventDefault();
    if( inputTask.value != '' ) {
      const task = document.createElement('div');
      const taskText = inputTask.value.trim();
      task.classList.add('task');
      task.innerHTML = `
        <div class="task__title">
          ${taskText}
        </div>
        <a href="#" class="task__remove">&times;</a>
      `
      taskList.appendChild(task);
      inputTask.value = '';
      btnsTaskRemove = document.querySelectorAll('.task__remove');
      for (const btnTaskRemove of btnsTaskRemove) {
        btnTaskRemove.addEventListener('click', deleteTask);
      };
    }
  });
  function deleteTask(event) {
    event.preventDefault();
    event.target.closest('.task').remove();
  }
};

document.addEventListener('DOMContentLoaded', todo);