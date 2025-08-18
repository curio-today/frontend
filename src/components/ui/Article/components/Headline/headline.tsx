import styles from "./headline.module.css"

import Text, { TextProps } from "@/components/ui/Text";

type HeadlineProps = {
    headline: string;
} & Partial<TextProps>;

const Headline = ({ variant = "h1", id = "headline", headline, ...rest }: HeadlineProps) => {
    return (
        <Text variant={variant} className={styles.headline} id={id} {...rest}>{headline}</Text>
    )
}

export default Headline;