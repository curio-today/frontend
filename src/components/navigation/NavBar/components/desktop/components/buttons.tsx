import styles from "./buttons.module.css";

import List from "@/components/layout/List";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Buttons () {
    return (
        <div className={styles.buttons}>
            {/*<Link href="/support" replace>*/}
            {/*    <Button mode="fill" title="Support" />*/}
            {/*</Link>*/}
            <Button
                icon={{ type: "globe" }}
                title="EN"
            />
            {/*<Button*/}
            {/*    icon={{ type: "moon" }}*/}
            {/*/>*/}
            {/*<Link href="/search" replace>*/}
            {/*    <Button*/}
            {/*        icon="magnifying_glass"*/}
            {/*        title="Search"*/}
            {/*    />*/}
            {/*</Link>*/}
        </div>
    );
}

