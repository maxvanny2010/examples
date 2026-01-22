import Link from "next/link";

export default function SidebarPage() {
    return (
        <nav>
            <ul>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/auth/login"}>Create modal</Link></li>
            </ul>
        </nav>
    )
}