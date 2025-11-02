import styles from "./quote-block.module.css"

import Text from "@/ui/components/ui/Text";
import { QuoteBlockProps } from "./quote-block.types";
import Icon from "@/ui/components/ui/Icon";

const QuoteBlock = ({ text, author }: QuoteBlockProps ) => {
    return (
        <blockquote className={styles.quote}>
            <Icon icon="quote" size="huge" />
            <span className={styles.content}>
                <Text variant="p" className={styles.text}>{text}</Text>
                <Text variant="h2" className={styles.author}>{author}</Text>
            </span>
            <Icon icon="quote" size="huge" />
        </blockquote>
    )

}

export default QuoteBlock;