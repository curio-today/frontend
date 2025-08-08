import styles from "./Links.module.scss";
import Link from "next/link";
import List from "@/components/layout/List";

const linkData: { href: string, label: string }[] = [
    {
        href: "/amazes",
        label: "Amazes",
    },
    {
        href: "/informs",
        label: "Informs",
    },
    {
        href: "/amuses",
        label: "Amuses",
    },
    {
        href: "/inspires",
        label: "Inspires",
    }
]

const Links = () => {
    return (
        <List className={styles.links} orientation="horizontal" >
            {linkData.map((link) => (
                <Link key={link.href} href={link.href}>
                    <p>{link.label}</p>
                </Link>
            ))}
        </List>
    )
}

export default Links;