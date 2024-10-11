const POST_URL = 'https://jsonplaceholder.typicode.com';
const getPost = async (id) => {
    try {
        const response = await fetch(`${POST_URL}/posts/${id}`);
        if (!response.ok) throw new Error('failed to fetch post');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};
const commentsPost = async (id) => {
    try {
        const response = await fetch(`${POST_URL}/comments?postId=${id}`);
        if (!response.ok) throw new Error('failed to fetch post');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

const toggleLoader = () => {
    const loader = document.querySelector('#loader');
    const isHidden = loader.hasAttribute('hidden');
    if (isHidden) loader.removeAttribute('hidden');
    else loader.setAttribute('hidden', '');
};

const create = (tag) => {
    return document.createElement(tag);
}
const addClass = (element, className) => {
    element.classList.add(className);
}
const addText = (element, text) => {
    element.textContent = text;
};
const selector = (selector) => {
    return document.querySelector(selector);
};

const templatePost = (post, comments) => {

    const blockPost = create('div');
    addClass(blockPost, 'post');
    /* title */
    const titlePost = create('h1');
    addClass(titlePost, 'post__title');//title
    addText(titlePost, post.title);
    /* a text of post*/
    const postText = create('p');
    addClass(postText, 'post__text');//body
    addText(postText, post.body);
    /* init Comments */
    const postComments = create('b');
    addClass(postComments, 'post-comments__text');
    addText(postComments, 'Comments:');
    /* block with all comments */
    const blockComments = create('div');
    addClass(blockComments, 'post-comments');
    blockPost.append(titlePost, postText, postComments);

    const container = create('ol');
    container.id = 'data-container';

    blockPost.append(container);
    document.body.prepend(blockPost);

    comments.forEach((comment) => {
        /* row */
        const row = create('li');
        /* decoration */
        const anchor = create('a');
        /* block with data*/
        const blockComment = create('div');
        addClass(blockComment, 'post-comment');
        /* author */
        const spanAuthor = create('span');
        addClass(spanAuthor, 'post-comment__author');//email
        addText(spanAuthor, comment.email);
        /* text */
        const spanText = create('span');
        addClass(spanText, 'post-comment__text');//body
        addText(spanText, comment.body);

        row.appendChild(blockComment);
        blockComment.appendChild(anchor);
        anchor.append(spanAuthor, spanText);

        container.appendChild(row);
    });
};

async function renderPost(id) {
    toggleLoader();
    const [post, comments] = await Promise.all([getPost(id), commentsPost(id)]);
    templatePost(post, comments);
    toggleLoader()
}

renderPost(1);