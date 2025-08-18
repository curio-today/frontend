import styles from "./headline.module.css"

import Text, { TextProps } from "@/components/ui/Text";

type HeadlineProps = TextProps;

const Headline = ({ variant = "h1", id = "headline", children, ...rest }: HeadlineProps) => {
    return (
        <Text variant={variant} className={styles.headline} id={id} {...rest}>{children}</Text>
    )
}

export default Headline;