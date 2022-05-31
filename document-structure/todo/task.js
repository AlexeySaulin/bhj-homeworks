const taskInput = document.getElementById('task__input');
const taskAddBtn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

taskAddBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (taskInput.value !== '') {
        taskList.insertAdjacentHTML('afterEnd', `<div class="task">
        <div class="task__title">
          ${taskInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`)
    }
    taskInput.value = '';

    const taskRemoveBtn = document.querySelector('.task__remove');

    taskRemoveBtn.addEventListener('click', (event) => {
        event.preventDefault();
        taskRemoveBtn.parentElement.remove();
    });

});