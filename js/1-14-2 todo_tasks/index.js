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
const divTaskList = document.querySelector('.tasks-list');

tasks.forEach((task) => {
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
    divTaskList.appendChild(blockTaskItem);
});