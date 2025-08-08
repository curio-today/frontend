import styles from "./MobileNavButton.module.scss"

import { TextProps } from "@/shared/props/TextProps";
import { IconProps } from "@/shared/props/IconProps";

import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

type MobileNavButtonProps = TextProps & Pick<IconProps, "src" | "alt">

const MobileNavButton = ({ text, src, alt }: MobileNavButtonProps) => {
    return (
        <Button className={styles.mobileNavButton}>
            <Icon src={src} alt={alt} />
            <p>{text}</p>
        </Button>
    )
}


export default MobileNavButton;