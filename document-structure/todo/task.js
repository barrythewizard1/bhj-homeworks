const addTask = (taskText) => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.textContent = taskText;
    
    const removeButton = document.createElement('a');
    removeButton.href = "#";
    removeButton.classList.add('task__remove');
    removeButton.innerHTML = '&times;';
    
    removeButton.addEventListener('click', () => {
      taskList.removeChild(taskElement);
    });
    
    taskElement.appendChild(taskTitle);
    taskElement.appendChild(removeButton);
    
    taskList.appendChild(taskElement);
  };
  