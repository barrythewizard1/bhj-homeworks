document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('tasks__list');
    const inputTask = document.getElementById('task__input');
    const addButton = document.getElementById('tasks__add');
    const tasksForm = document.getElementById('tasks__form');

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
            updateLocalStorage();
        });

        taskList.appendChild(taskElement);
        updateLocalStorage();
    };

    const updateLocalStorage = () => {
        const tasks = Array.from(taskList.children).map(task => task.querySelector('.task__title').textContent);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const loadTasksFromLocalStorage = () => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            const tasks = JSON.parse(storedTasks);
            tasks.forEach(taskText => addTask(taskText));
        }
    };

    if (!addButton) {
        console.error("Element with id 'tasks__add' not found");
    } else {
        addButton.addEventListener('click', () => {
            if (inputTask.value.trim() !== '') {
                addTask(inputTask.value);
                inputTask.value = '';
            }
        });
    }

    tasksForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (inputTask.value.trim() !== '') {
            addTask(inputTask.value);
            inputTask.value = '';
        }
    });

    taskList.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('task__remove')) {
            const taskElement = target.parentElement;
            taskList.removeChild(taskElement);
            updateLocalStorage();
        }
    });

    loadTasksFromLocalStorage();
});
