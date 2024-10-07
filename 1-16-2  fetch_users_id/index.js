const USERS_URL = `https://jsonplaceholder.typicode.com/users`;
const dataContainer = document.querySelector('#data-container');

const toggleLoader = () => {
    const loader = document.querySelector('#loader');
    const isHidden = loader.hasAttribute('hidden');
    if (isHidden) loader.removeAttribute('hidden');
    else loader.setAttribute('hidden', '');
};

const createElementHTML = (user) => {
    const row = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = `#`;
    anchor.textContent = user.name;
    row.appendChild(anchor);
    return row;
};

getUsersByIds = (ids) => {
    toggleLoader();
    Promise.all(ids.map(id => fetch(`${USERS_URL}/${id}`)))
        .then(responses => {
            return Promise.all(responses.map(res => res.json()));
        })
        .then(users => users.forEach(user =>
            dataContainer.appendChild(createElementHTML(user)))
        )
        .catch((error) => console.log(error))
        .finally(() => toggleLoader());

}
getUsersByIds([5, 6, 2, 1]);
