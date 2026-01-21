import {Metadata, ResolvingMetadata} from "next";

type RouteParams = {
    id: string;
}
type PageParams = {
    params: Promise<RouteParams>;
}
type UserDetailsPageParams = PageParams;

export default async function UserDetailPage({params}: PageParams) {

    const {id} = await params;
    const user = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {next: {revalidate: 60}}
    ).then((response) => response.json());
    console.log(user);
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

export async function generateMetadata(
    {params}: UserDetailsPageParams,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const {id} = await params

    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())

    return {
        title: user.username,
        description: `user info ${user.email}`,
        keywords: ["Next.js", "TypeScript", "React"],
        openGraph: {
            title: `OG ${user.username}`,
            description: `OG ${user.email}`,

        },
    }
}