import styles from "./Links.module.scss";
import { NavBarProps } from "@/components/navigation/NavBar";
import List from "@/components/layout/List";
import Text from "@/components/ui/Text";
import NavLink from "@/components/navigation/NavLink";
import { useTranslations } from "use-intl";
import { useEffect, useState } from "react";


const Links = ({ headings }: NavBarProps) => {
    const translations = useTranslations("Headings");
    const [translatedHeadings, setTranslatedHeadings] = useState(headings);

    useEffect(() => {
        const updated = headings.map(h => ({
            ...h,
            heading: translations(h.heading),
        }));
        setTranslatedHeadings(updated);
    }, [headings, translations]);

    return (
        <nav aria-label="Navigation links">
            <List className={styles.links} orientation="horizontal">
                {translatedHeadings.map((link, index) => (
                    <NavLink key={index} href={link.href}>
                        <Text variant="p">{link.heading}</Text>
                    </NavLink>
                ))}
            </List>
        </nav>
    );
};
export default Links;