export class Component {
    #props;
    #state;
    #$rootElement;

    constructor(props = {}) {
        this.#props = props;
        this.#state = {};
        this.#$rootElement = null;
        if (this.constructor === Component) {
            throw new Error("Cannot instantiate abstract class");
        }
        this.setup(props);
    }

    get component() {
        return this.#$rootElement;
    }

    set component(component) {
        return this.#$rootElement = component;
    }

    set setText(text) {
        this.component.textContent = text;
    }

    setup() {
        throw new Error("Method 'setup' must be implemented by derived classes");
    }

    attribute(key, value) {
        this.#$rootElement.setAttribute(key, value);
    }

    query(element) {
        return document.querySelector(element);
    }

    setFieldComponent(field, value) {
        this.#$rootElement[field] = value;
    }

    getFieldComponent(field) {
        return this.#$rootElement[field];
    }

    setFieldState(field, value) {
        this.#state[field] = value;
    }

    getFieldState(field) {
        return this.#state[field];
    }

    getFieldProps(field) {
        return this.#props[field];
    }
}
