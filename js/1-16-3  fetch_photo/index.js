const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const container = document.querySelector('#data-container');

const createPhotoHTML = (photo) => {
    const header = document.createElement('h3');
    const img = document.createElement('img');
    const row = document.createElement('li');

    header.classList.add('photo-item__item');
    header.textContent = photo.title;

    img.classList.add('photo-item__img');
    img.src = photo.thumbnailUrl;

    row.classList.add('photo-item');

    row.appendChild(img);
    row.appendChild(header);

    return row;
};

const toggleLoader = () => {
    const loader = document.querySelector('#loader');
    const isHidden = loader.hasAttribute('hidden');
    if (isHidden) loader.removeAttribute('hidden');
    else loader.setAttribute('hidden', '');
};

const getFastestLoadedPhoto = (ids) => {
    toggleLoader();
    Promise.all(ids.map(id => fetch(`${PHOTOS_URL}/${id}`)))
        .then(responses => {
            return Promise.all(responses.map(response => response.json()));
        })
        .then(photos => {
            photos.forEach(photo => container.appendChild(createPhotoHTML(photo)));
        })
        .catch(error => console.log(error))
        .finally(() => toggleLoader());
};

getFastestLoadedPhoto([60, 12, 55]);