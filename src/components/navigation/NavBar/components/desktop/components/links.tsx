import styles from "./links.module.css";
import { NavBarProps } from "@/components/navigation/NavBar";
import List from "@/components/layout/List";
import Text from "@/components/ui/Text";
import NavLink from "@/components/navigation/NavLink";


const Links = ({ headings }: NavBarProps) => {
    return (
        <nav aria-label="Navigation links">
            <List className={styles.links} orientation="horizontal">
                {headings.map((link, index) => (
                    <NavLink key={index} href={link.href}>
                        <Text variant="p">{link.label}</Text>
                    </NavLink>
                ))}
            </List>
        </nav>
    );
};
export default Links;