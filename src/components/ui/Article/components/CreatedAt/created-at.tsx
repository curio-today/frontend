import styles from "./created-at.module.css"

import Text, { TextProps } from "@/components/ui/Text";

type CreatedAtProps = TextProps;


const CreatedAt = ({variant = "h3", id = "createdAt", ...rest }: CreatedAtProps) => {
    return (
        <Text variant={variant} className={styles.createdAt} id={id} {...rest}>{convertedTime}</Text>
    )
}

export default CreatedAt;