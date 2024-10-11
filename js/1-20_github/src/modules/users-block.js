import DetailsBlock from "./details-block.js";
import {createImg, getRemoteData, insertRow} from "./utils.js";

export default class UsersBlock {
    #table;
    #loader;

    constructor() {
        this.#table = document.querySelector("#users");
        this.#loader = document.querySelector("#users-loader");
        this.#loader.classList.toggle("invisible");
    }

    async showUsers() {
        try {
            const users = await getRemoteData("users?per_page=10");
            users.forEach((user) => {
                const elements = [createImg(user.avatar_url), user.login];
                insertRow(
                    this.#table,
                    elements,
                    async () =>
                        await new DetailsBlock(user.login).showDetails()
                );
            });
        } catch (error) {
            console.error(error);
        } finally {
            this.#loader.classList.toggle("invisible");
        }
    }
}