export const create = (tag) => {
    return document.createElement(tag);
};

export const text = (element, value) => {
    return value ? (element.textContent = value) : element.textContent
};

export const node = (text) => {
    return document.createTextNode(text);
};