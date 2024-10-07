const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;
const createNewPost = () => {
    isLoading = true;
    fetch(POSTS_URL, {method: "POST"})
        .then((response) => response.json())
        .then((result) => {
            console.log("result", result);
        })
        .catch((error) => {
            console.log("error", error);
        })
        .finally(() => {
            isLoading = false;
        });
};
/***********************/
const createNewPOST = async () => {
    isLoading = true;
    try {
        const response = await fetch(POSTS_URL, {method: "POST"});
        if (!response.ok) throw new Error('Request failed');
        const result = await response.json();
        console.log("result", result);
    } catch (error) {
        console.log("error", error);
    } finally {
        isLoading = false;
    }
};


createNewPost();
createNewPOST();

