import {Metadata} from "next";

type RouteParams = {
    slug?: string[];
}
type UserDetailsProps = {
    params: RouteParams;
}
export const metadata: Metadata = {
    title: {
        default: "About us",
        template: "%s | Next.js",
    },
    description: "Welcome to our site",
    keywords: ["Next.js", "TypeScript", "React"],
    openGraph: {
        title: "About OpenGraph",
        description: "Description about OpenGraph",
        url: "https://example.com",
        siteName: "Next.js",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://example.com/og.png",
                width: 1200,
                height: 630,
                alt: "Preview image",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Twitter",
        description: "Description about Twitter",
        creator: "@nextjs",
        images: ["https://example.com/og.png"],
    },
};

export default function UserDetailPage({params}: UserDetailsProps) {
    console.log("Slug >>", params.slug);
    return <div/>;
}