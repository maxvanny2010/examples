type RouteParams = {
    id: string;
}
type UserDetailsProps = {
    params: Promise<RouteParams>;
}
export default async function UserDetailPage({params}: UserDetailsProps) {

    const {id} = await params;
    const user = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {next: {revalidate: 60}}
    ).then((response) => response.json());

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">User Detail Page</h1>
            <p>Here you can see {user.username} detail page.</p>
        </div>
    );
}

export async function generateStaticParams() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json());
    return users.map((user: any) => ({
        id: user.id.toString(),
    }))
}
