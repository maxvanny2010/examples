const ALBUM_URL = 'https://jsonplaceholder.typicode.com/albums';

const createContainer = () => {
    const container = document.createElement('ol');
    const span = document.createElement('span');
    container.id = 'data-container';

    span.id = 'loader';
    span.setAttribute('hidden', '');
    span.textContent = 'Loading...';

    container.prepend(span);
    document.body.appendChild(container);
    return container;
};
const toggleLoader = () => {
    const loader = document.querySelector('#loader');
    const isHidden = loader.hasAttribute('hidden');
    if (isHidden) loader.removeAttribute('hidden');
    else loader.setAttribute('hidden', '');
}
const createAlbumHTML = (album) => {
    const row = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = album.title;
    anchor.href = `${ALBUM_URL}/${album.id}`;
    row.appendChild(anchor);
    return row;
}
const renderAlbums = async () => {
    const container = createContainer();
    toggleLoader();
    try {
        const response = await fetch(ALBUM_URL);
        if (!response.ok) throw new Error('Произошла ошибка в получении данных об альбомах...');
        const albums = await response.json();
        if (albums.length > 0) {
            albums.forEach(album => container.appendChild(createAlbumHTML(album)));
        }
    } catch (error) {
        container.textContent = error.message;
    } finally {
        toggleLoader();
    }
};
renderAlbums();
