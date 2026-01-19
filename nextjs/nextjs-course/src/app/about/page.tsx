import {UserList} from "@/components";

export default async function AboutPage() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => res.json());

    return (
        <div>
            About Page Content:
            <br></br>
            {data.title}
            <UserList/>
        </div>
    )
}