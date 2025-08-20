import styles from "./Buttons.module.scss";

import List from "@/components/layout/List";
import Link from "next/link";
import Button from "@/components/ui/Button";

const Buttons = () => {
    return (
        <List className={styles.buttons} orientation="horizontal">
            <Link href="/support" replace>
                <Button mode="fill" title="Support" />
            </Link>
            <Button
                icon="globe"
                title="EN"
            />
            <Button
                icon="moon"
            />
            <Link href="/search" replace>
                <Button
                    icon="magnifying_glass"
                    title="Search"
                />
            </Link>
        </List>
    );
}


export default Buttons;