const form = document.createElement('form');
form.className = 'create-user-form_1';

const labelUserName = document.createElement('label');
const inputUserName = document.createElement('input');
inputUserName.setAttribute('type', 'text');
inputUserName.setAttribute('name', 'userName');
inputUserName.setAttribute('placeholder', 'Введите ваше имя');
labelUserName.textContent = 'Имя';

const labelUserPassword = document.createElement('label');
const inputUserPassword = document.createElement('input');
inputUserPassword.setAttribute('type', 'password');
inputUserPassword.setAttribute('name', 'password');
inputUserPassword.setAttribute('placeholder', 'Придумайте пароль');
labelUserPassword.textContent = 'Пароль';

const buttonSubmit = document.createElement('button');
buttonSubmit.setAttribute('type', 'submit');
buttonSubmit.textContent = 'Подтвердить';

labelUserName.append(inputUserName);
labelUserPassword.append(inputUserPassword);
form.append(labelUserName, labelUserPassword, buttonSubmit);
document.body.appendChild(form);

document.body.innerHTML += `
<form class="create-user-form_2">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>
`;