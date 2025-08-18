import Text, { TextProps } from "@/components/ui/Text";
import styles from "@/components/ui/Article/components/Headline/headline.module.css";

type SubtitleProps = {
    subtitle: string;
} & Partial<TextProps>;

const Subtitle = ({ variant = "p", id = "subtitle", subtitle, ...rest }: SubtitleProps) => {
    return (
        <Text variant={variant} className={styles.subtitle} id={id} {...rest}>{subtitle}</Text>
    )
}


export default Subtitle;