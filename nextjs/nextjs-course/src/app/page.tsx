export default async function Home() {
    let response = await fetch("https:/jsonplaceholder.typicode.com/users")
        .then(res => res.json());

    return (
        <>
            <div>Home Page Content:</div>
            <br/>
            <div>{
                response.map((user: any) => {
                    return (
                        <div key={user.id}>{user.name}</div>
                    )
                })}
            </div>
        </>
    )
}

