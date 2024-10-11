let USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const container = document.querySelector("#data-container");

const createUserHTML = (user) => {
    const row = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = '#';
    anchor.textContent = user.name;

    row.appendChild(anchor);
    return row;
}

const toggleLoader = () => {
    const loader = document.querySelector('#loader');
    const isHidden = loader.hasAttribute('hidden');
    if (isHidden) loader.removeAttribute('hidden');
    else loader.setAttribute('hidden', '');
}

const getAllUsers = () => {
    toggleLoader();
    fetch(USERS_URL)
        .then(response => {
            if (!response.ok) throw new Error("Error fetching users.");
            return response.json();
        })
        .then(users => users.forEach(user => container.appendChild(createUserHTML(user))))
        .catch(err => console.log(err))
        .finally(() => toggleLoader());
}

getAllUsers();
    

