const taskList = document.getElementById('task-list');
const inputTask = document.getElementById('new-task');

const addTask = (taskText) => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    taskElement.innerHTML = `
        <div class="task__title">${taskText}</div>
        <a href="#" class="task__remove">&times;</a>
    `;

    const removeButton = taskElement.querySelector('.task__remove');
    removeButton.addEventListener('click', () => {
        taskList.removeChild(taskElement);
    });

    taskList.appendChild(taskElement);
};

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', () => {
    if (inputTask.value.trim() !== '') {
        addTask(inputTask.value);
        inputTask.value = '';
    }
});

inputTask.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && inputTask.value.trim() !== '') {
        addTask(inputTask.value);
        inputTask.value = '';
    }
});
