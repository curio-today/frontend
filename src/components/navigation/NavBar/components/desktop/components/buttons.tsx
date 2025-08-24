import styles from "./buttons.module.css";

import List from "@/components/layout/List";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SwitchLanguageButton from "@/components/ui/SwitchLanguageButton";

export default function Buttons () {
    return (
        <div className={styles.buttons}>
            {/*<Link href="/support" replace>*/}
            {/*    <Button mode="fill" title="Support" />*/}
            {/*</Link>*/}
            <SwitchLanguageButton />
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

