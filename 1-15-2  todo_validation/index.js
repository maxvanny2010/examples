const errorEmptyInput = 'Название задачи не должно быть пустым';
const errorDuplicateTask = 'Задача с таким названием уже существует';
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
const blockTaskList = getSelector('.tasks-list');
/* init task list*/
tasks.forEach(task => setListChild(createTaskBlock(task)));

/* task block form listener*/
const form = document.querySelector('.create-task-block');
const input = document.querySelector('.create-task-block__input');
form.addEventListener('submit', event => addTask(event));

/* clear the input after one symbol print*/
input.addEventListener('input', event => clearError(event))

function getElement(tagName) {
    return document.createElement(tagName);
}

function getSelector(tagName) {
    return document.querySelector(tagName);
}

/* task template*/
function createTaskBlock(task) {
    /* base element */
    const blockTaskItem = getElement('div');
    blockTaskItem.className = 'task-item';
    blockTaskItem.dataset.taskId = task.id;
    /* container */
    const blockContainer = getElement('div');
    blockContainer.className = 'task-item__main-container';
    /* content */
    const blockContent = getElement('div');
    blockContent.className = 'task-item__main-content';
    /* form */
    const formCheckBox = getElement('form');
    formCheckBox.className = 'checkbox-box';
    /* label */
    const labelCheckBox = getElement('label');
    labelCheckBox.htmlFor = task.id;
    /* input */
    const inputTask = getElement('input');
    inputTask.className = 'checkbox-form__checkbox';
    inputTask.type = 'checkbox';
    inputTask.id = task.id;
    /* span */
    const spanTextTask = getElement('span');
    spanTextTask.className = 'task-item__text';
    spanTextTask.textContent = task.text;
    /* button */
    const buttonDeleter = getElement('button');
    buttonDeleter.className = 'task-item__delete-button default-button delete-button';
    buttonDeleter.textContent = 'Удалить';

    labelCheckBox.appendChild(inputTask);
    formCheckBox.appendChild(labelCheckBox);
    blockContent.append(formCheckBox, spanTextTask);
    blockContainer.append(blockContent, buttonDeleter);
    blockTaskItem.append(blockContainer);
    return blockTaskItem;
}

function addSpanError(message) {
    const spanError = getElement('span');
    spanError.className = 'error-message-block';
    spanError.textContent = message;
    form.append(spanError);
}

/*  add child to list*/
function setListChild(child) {
    blockTaskList.appendChild(child);
}

/* remove child from list*/
function deleteListChild(child) {
    blockTaskList.removeChild(child);
}

/* listener for submit input
*  clean remove block
*  check name for duplicate and exist
*  create a task - add the task to the tasks and DOM
* */
function addTask(event) {
    event.preventDefault();
    removeError();
    let taskName = getTaskName();
    if (!taskName) addSpanError(errorEmptyInput);
    else if (isDuplicate(taskName)) addSpanError(errorDuplicateTask);
    else {
        const task = {
            id: Date.now().toString(),
            completed: false,
            text: taskName
        };
        pushTask(task);
        setListChild(createTaskBlock(task));
        clearInput();
    }
}

function pushTask(task) {
    tasks.push(task);
}

function isDuplicate(taskName) {
    return tasks.some(task => task.text.toLowerCase() === taskName.toLowerCase());
}

/* task name without white spaces between */
function getTaskName() {
    return input.value.trim().split(' ').filter(Boolean).join(' ');
}

function removeError() {
    let errorBlock = form.querySelector('.error-message-block');
    if (errorBlock) errorBlock.remove();
}

/* clear input after push to the tasks*/
function clearInput() {
    input.value = '';
}
function clearError(event) {
    const spanError = getSelector('.error-message-block');
    if (event.target.value && spanError) spanError.remove();
}





