const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];
const blockTaskList = document.querySelector('.tasks-list');

const form = document.querySelector('.create-task-block');
const input = document.querySelector('.create-task-block__input');

tasks.forEach(task => blockTaskList.appendChild(createTaskBlock(task)));

form.addEventListener('submit', event => addTask(event));

function createTaskBlock(task) {
    /* base element */
    const blockTaskItem = document.createElement('div');
    blockTaskItem.className = 'task-item';
    blockTaskItem.dataset.taskId = task.id;
    /* container */
    const blockContainer = document.createElement('div');
    blockContainer.className = 'task-item__main-container';
    /* content */
    const blockContent = document.createElement('div');
    blockContent.className = 'task-item__main-content';
    /* form */
    const formCheckBox = document.createElement('form');
    formCheckBox.className = 'checkbox-box';
    /* label */
    const labelCheckBox = document.createElement('label');
    labelCheckBox.htmlFor = task.id;
    /* input */
    const inputTask = document.createElement('input');
    inputTask.className = 'checkbox-form__checkbox';
    inputTask.type = 'checkbox';
    inputTask.id = task.id;
    /* span */
    const spanTextTask = document.createElement('span');
    spanTextTask.className = 'task-item__text';
    spanTextTask.textContent = task.text;
    /* button */
    const buttonDeleter = document.createElement('button');
    buttonDeleter.className = 'task-item__delete-button default-button delete-button';
    buttonDeleter.textContent = 'Удалить';

    labelCheckBox.appendChild(inputTask);
    formCheckBox.appendChild(labelCheckBox);
    blockContent.append(formCheckBox, spanTextTask);
    blockContainer.append(blockContent, buttonDeleter);
    blockTaskItem.append(blockContainer);
    return blockTaskItem;
}

/* listener for submit input
*  clean remove block
*  check name for duplicate and exist
*  create a task - add the task to the tasks and DOM
* */
function addTask(event) {
    event.preventDefault();
    let taskName = getTaskName();
    if (taskName) {
        const task = {
            id: Date.now().toString(),
            completed: false,
            text: taskName
        };
        tasks.push(task);
        setListChild(createTaskBlock(task));
        clearInput();
    }
}

/* task name without white spaces between */
function getTaskName() {
    return input.value.trim().split(' ').filter(Boolean).join(' ');
}

/*  add child to list*/
function setListChild(child) {
    blockTaskList.appendChild(child);
}

/* clear input after push to the tasks*/
function clearInput() {
    input.value = '';
}
