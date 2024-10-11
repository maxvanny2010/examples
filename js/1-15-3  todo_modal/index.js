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

/* a task-list listener*/
const blockTaskList = getSelector('.tasks-list');
blockTaskList.addEventListener('click', event => showModal(event, modalElements));

/* init a task list*/
tasks.forEach(task => setListChild(createTaskBlock(task)));

/* a task block form listener*/
const input = document.querySelector('.create-task-block__input');
const form = document.querySelector('.create-task-block');
form.addEventListener('submit', event => addTask(event));

/* clear the input after one symbol print*/
input.addEventListener('input', event => clearError(event))

/* create a modal and a listeners*/
const modalElements = createModal();
setDeleteModalListeners(modalElements);

/* modal buttons listeners*/
function setDeleteModalListeners({blockModal, btnDeleteModal, btnCancelModal}) {
    btnDeleteModal.addEventListener('click', (event) => deleteTask(event, blockModal));
    btnCancelModal.addEventListener('click', () => blockModal.classList.add('modal-overlay_hidden'));
}

function getElement(tagName) {
    return document.createElement(tagName);
}

function getSelector(tagName) {
    return document.querySelector(tagName);
}

/* a task template*/
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

/*  add a child to the list*/
function setListChild(child) {
    blockTaskList.appendChild(child);
}

/* remove a child from the list*/
function deleteListChild(child) {
    blockTaskList.removeChild(child);
}

/* listener for submit input
*  clean remove a block
*  check a name for duplicate and exist
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

function deleteTask(event, blockModal) {
    event.preventDefault();
    blockModal.classList.add('modal-overlay_hidden');
    const taskID = blockModal.dataset.taskId;
    const index = tasks.findIndex(task => task.id === taskID);
    const task = getSelector(`.task-item[data-task-id="${taskID}"]`);
    if (index !== -1 && task) {
        tasks.splice(index, 1);
        deleteListChild(task);
    }
}

function pushTask(task) {
    tasks.push(task);
}

function isDuplicate(taskName) {
    return tasks.some(task => task.text.toLowerCase() === taskName.toLowerCase());
}

/* a task name without white spaces between */
function getTaskName() {
    return input.value.trim().split(' ').filter(Boolean).join(' ');
}

function removeError() {
    let errorBlock = form.querySelector('.error-message-block');
    if (errorBlock) errorBlock.remove();
}

/* clear a input after push to the tasks*/
function clearInput() {
    input.value = '';
}

function clearError(event) {
    const spanError = getSelector('.error-message-block');
    console.log(spanError);
    console.log(event.target.value);
    if (event.target.value && spanError) spanError.remove();
}

function showModal(event, modalElements) {
    event.preventDefault();
    const {target} = event;
    const button = target.closest('.task-item__delete-button');
    if (button) {
        const {blockModal} = modalElements;
        blockModal.classList.remove('modal-overlay_hidden');
        const taskID = button.closest('.task-item').dataset.taskId;
        blockModal.setAttribute('data-task-id', taskID);
    }
}

function createModal() {
    const blockModal = getElement('div');
    blockModal.className = 'modal-overlay modal-overlay_hidden';
    const blockDeleteModal = getElement('div');
    blockDeleteModal.className = 'delete-modal';
    const headerModal = getElement('h3');
    headerModal.className = 'delete-modal__question';
    headerModal.textContent = 'Вы действительно хотите удалить эту задачу?';
    const blockModalButtons = getElement('div');
    blockModalButtons.className = 'delete-modal__buttons';
    const btnCancelModal = getElement('button');
    btnCancelModal.className = 'delete-modal__button delete-modal__cancel-button';
    btnCancelModal.textContent = 'Отмена'
    const btnDeleteModal = getElement('button');
    btnDeleteModal.textContent = 'Удалить'
    btnDeleteModal.className = 'delete-modal__button delete-modal__confirm-button';
    blockModalButtons.append(btnCancelModal, btnDeleteModal);
    blockDeleteModal.append(headerModal, blockModalButtons);
    blockModal.appendChild(blockDeleteModal);
    document.body.appendChild(blockModal);
    return {blockModal, btnDeleteModal, btnCancelModal};
}
