import styles from "./page.module.css"
import Link from "next/link";

export default async function UserPage() {
    let userData = await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json());
    return (
        <ul className={styles.list}>
            {
                userData.map((user: any) => (
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                {user.username}
                            </Link>
                        </li>
                    )
                )
            }
        </ul>
    )
}