import styles from "./Links.module.scss";
import { NavBarProps } from "@/components/navigation/NavBar";
import List from "@/components/layout/List";
import Text from "@/components/ui/Text";
import NavLink from "@/components/navigation/NavLink";


const Links = ({ data }: NavBarProps) => {
    return (
        <nav aria-label="Navigation links">
            <List className={styles.links} orientation="horizontal" >
                {data.map((link, index) => (
                    <NavLink key={index} href={link.href}>
                        <Text variant="p">{link.title}</Text>
                    </NavLink>
                ))}
            </List>
        </nav>
    )
}

export default Links;