import styles from "./created-at.module.css"

import Text, { TextProps } from "@/ui/components/ui/Text";

type CreatedAtProps = {
    timeStamp: string
} & Partial<TextProps>;


const CreatedAt = ({timeStamp, variant = "h3", id = "createdAt", ...rest }: CreatedAtProps) => {
    return (
        <Text variant={variant} className={styles.createdAt} id={id} {...rest}>{timeStamp}</Text>
    )
}

export default CreatedAt;