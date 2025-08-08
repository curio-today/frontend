import styles from "./Buttons.module.scss";

import List from "@/components/layout/List";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const Buttons = () => {
    return (
        <List className={styles.buttons} orientation="horizontal">
            <Link href="/support" replace>
                <Button mode="reversed" text="Support" className="reversed" />
            </Link>
            <Button
                icon={{
                    src: "/icons/globe.svg",
                    alt: "globe",
                }}
                text="EN"
            />
            <Button
                icon={{
                    src: "/icons/moon.svg",
                    alt: "Moon",
                }}
            />
            <Link href="/search" replace>
                <Button
                    icon={{
                        src: "/icons/magnifying glass.svg",
                        alt: "Magnifying glass",
                    }}
                    text="Search"
                />
            </Link>
        </List>
    );
}


export default Buttons;