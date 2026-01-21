type RouteParams = {
    slug: string[];
}
type UserDetailsProps = {
    params: Promise<RouteParams>;
}
export default async function UserDetailPage({params}: UserDetailsProps) {
    const {slug} = await params;
    console.log(`Slug >> ${slug}`);
    return (
        <div>
        </div>
    );
}